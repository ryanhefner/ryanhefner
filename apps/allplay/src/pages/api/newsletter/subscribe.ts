import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import { z } from 'zod'

const subscriptionSchema = z.object({
  email: z.string().trim().max(254).email(),
  firstName: z.string().trim().max(100).optional(),
})

const resend = new Resend(process.env.RESEND_FULL_ACCESS_API_KEY)
const audienceId = process.env.RESEND_AUDIENCE_ID

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' })
    return
  }

  if (!audienceId) {
    res.status(422).json({ success: false, error: '' })
    return
  }

  let body: unknown
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  } catch {
    res.status(400).json({ success: false, error: 'Invalid JSON body' })
    return
  }

  const subscription = subscriptionSchema.safeParse(body)
  if (!subscription.success) {
    res
      .status(400)
      .json({
        success: false,
        error: 'Provide a valid email address and optional first name.',
      })
    return
  }

  try {
    const { email, firstName } = subscription.data

    const { error } = await resend.contacts.create({
      email,
      firstName,
      unsubscribed: false,
      audienceId,
    })
    if (error) {
      res.status(502).json({
        success: false,
        error: 'Unable to subscribe right now. Please try again.',
      })
      return
    }
    res.status(200).json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, error: 'subscription failed' })
  }
}

export default handler
