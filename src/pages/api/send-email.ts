import { emailService } from '@/lib/services'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }
  const { to, subject, text } = req.body

  try {
    await emailService.sendEmail({ to, subject, text })
    res.status(200).json({ success: true, message: 'Email sended' })
  } catch (error) {
    console.error('Error on send email:', error)
    res.status(500).json({ success: false })
  }
}
