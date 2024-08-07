import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

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

  try {
    const { email, firstName } = JSON.parse(req.body)

    await resend.contacts.create({
      email,
      firstName,
      unsubscribed: false,
      audienceId,
    })
    res.status(200).json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, error: 'subscription failed' })
  }
}

export default handler
