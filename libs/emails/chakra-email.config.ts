import { defineConfig } from '@chakra-email/preview'

export default defineConfig({
  root: '.',
  templates: './src/lib',
  include: ['emails.tsx', '**/*.email.{ts,tsx}'],
  exclude: ['**/*.{test,spec}.{ts,tsx}', '**/__fixtures__/**'],
  host: '127.0.0.1',
  port: 4100,
})
