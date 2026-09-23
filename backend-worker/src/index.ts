import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { neon } from '@neondatabase/serverless'
import { Resend } from 'resend'

type Bindings = {
  DATABASE_URL: string
  RESEND_API_KEY: string
  TO_EMAIL: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('*', cors())

app.get('/', (c) => {
  return c.json({
    message: 'Cloudflare Backend Working!'
  })
})

app.post('/api/contact', async (c) => {
  try {
    const { name, email, message } = await c.req.json()

    if (!name || !email || !message) {
      return c.json({ message: 'Please fill all fields' }, 400)
    }

    const sql = neon(c.env.DATABASE_URL)

    const result = await sql`
      INSERT INTO contacts (name, email, message)
      VALUES (${name}, ${email}, ${message})
      RETURNING id, name, email, message, created_at
    `

    const resend = new Resend(c.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: c.env.TO_EMAIL,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    return c.json({
      message: 'Message sent successfully!',
      contact: result[0]
    })

  } catch (error) {
    console.error(error)

    return c.json({
      message: 'Something went wrong'
    }, 500)
  }
})

export default app