import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-12 lg:px-20 py-14 border-t border-inkline bg-blueprint bg-grid relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink pointer-events-none" />

      <div className="relative">
        <span className="section-index font-mono text-sm text-signal">06 / Contact</span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl text-chalk tracking-tight mt-6 max-w-2xl"
        >
          Let's build something worth shipping.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-lg text-muted text-base leading-relaxed"
        >
          I'm looking for an entry-level internship in software engineering or product
          development. Reach out - I reply quickly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10"
        >
          <a
            href={`mailto:${profile.email}`}
            className="min-w-0 max-w-full break-words font-display text-2xl sm:text-3xl text-signal hover:text-wire transition-colors duration-200 focus-ring rounded"
          >
            {profile.email}
          </a>

          <div className="flex flex-col gap-3 font-mono text-sm">
            <a href={`tel:+94${profile.phone.slice(1)}`} className="text-muted hover:text-wire transition-colors focus-ring rounded">
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-wire transition-colors focus-ring rounded">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-wire transition-colors focus-ring rounded">
              GitHub ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
