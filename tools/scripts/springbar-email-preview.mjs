import { createServer, request as requestHttp } from 'node:http'

import { createPreviewServer } from '@chakra-email/preview'

const publicHost = '127.0.0.1'
const publicPort = Number.parseInt(process.env.PORT ?? '4100', 10)

if (!Number.isInteger(publicPort) || publicPort < 1 || publicPort > 65_535) {
  throw new Error('PORT must be an integer between 1 and 65535.')
}

const preview = await createPreviewServer({
  configFile: 'libs/emails/chakra-email.config.ts',
  host: '127.0.0.1',
  port: 0,
})
const upstream = await preview.listen()

const proxy = createServer((incoming, outgoing) => {
  const upstreamRequest = requestHttp(
    {
      headers: {
        ...incoming.headers,
        host: `${upstream.host}:${upstream.port}`,
      },
      host: upstream.host,
      method: incoming.method,
      path: incoming.url,
      port: upstream.port,
    },
    (upstreamResponse) => {
      outgoing.writeHead(
        upstreamResponse.statusCode ?? 502,
        upstreamResponse.headers,
      )
      upstreamResponse.pipe(outgoing)
    },
  )

  upstreamRequest.on('error', (error) => {
    if (!outgoing.headersSent) {
      outgoing.writeHead(502, { 'content-type': 'text/plain; charset=utf-8' })
    }
    outgoing.end(`Email preview proxy error: ${error.message}`)
  })
  incoming.pipe(upstreamRequest)
})

await new Promise((resolve, reject) => {
  proxy.once('error', reject)
  proxy.listen(publicPort, publicHost, resolve)
})

process.stdout.write(
  `Chakra Email preview for Springbar: http://${publicHost}:${publicPort}\n`,
)

let closing = false
const close = async () => {
  if (closing) return
  closing = true

  await Promise.all([
    preview.close(),
    new Promise((resolve, reject) => {
      proxy.close((error) => (error ? reject(error) : resolve()))
    }),
  ])
}

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => {
    void close().catch((error) => {
      process.stderr.write(
        `${error instanceof Error ? error.message : error}\n`,
      )
      process.exitCode = 1
    })
  })
}
