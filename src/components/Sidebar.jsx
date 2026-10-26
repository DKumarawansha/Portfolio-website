import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const res = await fetch(
        'https://backend-worker.dasukumarawansha.workers.dev/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await res.json()

      if (res.ok) {
        setStatus('✅ Message sent successfully!')

        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        setStatus(data.message || '❌ Failed to send message.')
      }
    } catch (error) {
      setStatus('❌ Backend connection failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t border-inkline
        bg-blueprint bg-grid
        px-5 py-12
        sm:px-8 sm:py-14
        md:px-12 md:py-16
        lg:px-20 lg:py-20
        xl:px-24
      "
    >
      {/* Background overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-t
          from-ink
          via-ink/70
          to-ink/90
        "
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section index */}
        <span
          className="
            section-index
            font-mono
            text-xs
            text-signal
            sm:text-sm
          "
        >
          06 / Contact
        </span>

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-4
            max-w-2xl
            font-display
            text-3xl
            leading-[1.08]
            tracking-tight
            text-chalk
            sm:mt-6
            sm:text-4xl
            md:text-5xl
          "
        >
          Let's build something worth shipping.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mt-5
            max-w-xl
            text-sm
            leading-7
            text-muted
            sm:mt-6
            sm:text-base
          "
        >
          I'm looking for an entry-level internship in software engineering or
          product development. Reach out - I reply quickly.
        </motion.p>

        {/* Contact content */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-10
            sm:mt-12
            md:gap-12
            lg:grid-cols-2
            lg:gap-16
            xl:gap-24
          "
        >
          {/* ================= CONTACT FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              flex
              w-full
              flex-col
              gap-3.5
              sm:gap-5
            "
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-name"
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-muted
                  sm:text-xs
                "
              >
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="
                  w-full
                  min-h-[48px]
                  rounded-lg
                  border border-inkline
                  bg-ink/40
                  px-4 py-3
                  text-base
                  text-chalk
                  placeholder:text-muted
                  outline-none
                  transition
                  focus:border-signal
                  focus:ring-1
                  focus:ring-signal/30
                  sm:text-sm
                "
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-muted
                  sm:text-xs
                "
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="
                  w-full
                  min-h-[48px]
                  rounded-lg
                  border border-inkline
                  bg-ink/40
                  px-4 py-3
                  text-base
                  text-chalk
                  placeholder:text-muted
                  outline-none
                  transition
                  focus:border-signal
                  focus:ring-1
                  focus:ring-signal/30
                  sm:text-sm
                "
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-muted
                  sm:text-xs
                "
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="
                  min-h-[150px]
                  w-full
                  resize-y
                  rounded-lg
                  border border-inkline
                  bg-ink/40
                  px-4 py-3
                  text-base
                  leading-relaxed
                  text-chalk
                  placeholder:text-muted
                  outline-none
                  transition
                  focus:border-signal
                  focus:ring-1
                  focus:ring-signal/30
                  sm:text-sm
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                mt-1
                min-h-[48px]
                w-full
                rounded-lg
                bg-signal
                px-5 py-3
                text-sm
                font-semibold
                text-ink
                transition
                duration-200
                hover:opacity-90
                focus:outline-none
                focus:ring-2
                focus:ring-signal
                focus:ring-offset-2
                focus:ring-offset-ink
                disabled:cursor-not-allowed
                disabled:opacity-50
                sm:w-auto
                sm:self-start
              "
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status */}
            {status && (
              <p
                aria-live="polite"
                className="
                  max-w-full
                  break-words
                  font-mono
                  text-xs
                  leading-6
                  text-muted
                  sm:text-sm
                "
              >
                {status}
              </p>
            )}
          </motion.form>

          {/* ================= CONTACT INFO ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              flex
              min-w-0
              flex-col
              gap-8
              lg:justify-between
              lg:gap-12
            "
          >
            {/* Email */}
            <div>
              <p
                className="
                  mb-3
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-muted
                  sm:text-xs
                "
              >
                Email
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="
                  block
                  min-w-0
                  max-w-full
                  break-words
                  font-display
                  text-xl
                  leading-tight
                  text-signal
                  transition-colors
                  duration-200
                  hover:text-wire
                  focus-ring
                  rounded
                  sm:text-2xl
                  md:text-3xl
                "
              >
                {profile.email}
              </a>
            </div>

            {/* Contact links */}
            <div>
              <p
                className="
                  mb-4
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-muted
                  sm:text-xs
                "
              >
                Connect
              </p>

              <div className="flex flex-col gap-4 font-mono text-sm">
                {/* Phone */}
                <a
                  href={`tel:+94${profile.phone.slice(1)}`}
                  className="
                    w-fit
                    max-w-full
                    break-words
                    text-muted
                    transition-colors
                    hover:text-wire
                    focus-ring
                    rounded
                  "
                >
                  {profile.phone}
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="
  inline-flex
  min-h-11
  min-w-11
  w-fit
  items-center
  text-muted
  transition-colors
  hover:text-wire
  focus-ring
  rounded
"
                >
                  LinkedIn ↗
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
  target="_blank"
  rel="noreferrer"
  className="
    inline-flex
    min-h-11
    min-w-11
    w-fit
    items-center
    text-muted
    transition-colors
    hover:text-wire
    focus-ring
    rounded
  "
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
