import nodemailer from 'nodemailer'

interface EmailPayload {
  to: string
  subject: string
  text: string
}

class EmailService {
  private transporter: nodemailer.Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD
      },
    })
  }

  async sendEmail(payload: EmailPayload): Promise<void> {
    const emailOptions = { from: process.env.NODEMAILER_EMAIL, ...payload }
    const mailOptions: nodemailer.SendMailOptions = { ...emailOptions }
    await this.transporter.sendMail(mailOptions)
  }
}

const emailService = new EmailService()
export { emailService }
