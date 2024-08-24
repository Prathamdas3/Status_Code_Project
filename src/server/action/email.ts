'use server'
import nodemailer from 'nodemailer'
import { contactFormSchema, type contactFormSchemaType } from '@/lib/schema'

const mailtrapHost = process.env.MAILTRAP_HOST
const mailtrapPort = process.env.MAILTRAP_PORT
const mailtrapAuthUser = process.env.MAILTRAP_AUTH_USER
const mailtrapAuthPass = process.env.MAILTRAP_AUTH_PASS

if (!mailtrapHost || !mailtrapPort || !mailtrapAuthUser || !mailtrapAuthPass) {
  throw new Error('Mailtrap configuration is incomplete.')
}

const transport = nodemailer.createTransport({
  service: 'gmail',
  host: mailtrapHost,
  port: Number(mailtrapPort),
  auth: {
    user: mailtrapAuthUser,
    pass: mailtrapAuthPass,
  },
} as nodemailer.TransportOptions)

export async function sendEmail(formData: contactFormSchemaType) {
  try {
    const { data, error, success } = contactFormSchema.safeParse(formData)

    if (!success) {
      return { message: 'Invalid Input', error, status: 400 }
    }

    const mailOptions = {
      form: data.email,
      to: 'daspratham3@gmail.com',
      subject: data.subject,
      html: `<h2> Hi I am ${data.name}</h2>
      <p>this is my ${data.email}</p>
          <p>${data.subject}</p>
          <p>${data.message}p>
          `,
    }

    await transport.sendMail(mailOptions)

    return { status: 200 }
  } catch (error) {
    console.error('Problem in User creation', error)
  }
}
