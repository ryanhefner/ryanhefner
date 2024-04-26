import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_FULL_ACCESS_API_KEY)
const audienceId = process.env.RESEND_AUDIENCE_ID

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!audienceId) {
    res.status(422).json({ success: false, error: '' })
    return
  }

  try {
    resend.contacts.create({
      email: 'steve.wozniak@gmail.com',
      // firstName: 'Steve',
      // lastName: 'Wozniak',
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
