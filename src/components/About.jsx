import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const stats = [
  { label: 'Year of study', value: '3rd' },
  { label: 'Projects shipped', value: '5' },
  { label: 'Disciplines', value: 'Web · Mobile · UI' },
]

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-12 lg:px-20 py-28 border-t border-inkline">
      <SectionHeading index="01" title="About" />

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-3xl border border-inkline bg-white/[0.02] p-6 sm:p-8 shadow-[0_20px_40px_rgba(15,20,32,0.28)]"
        >
          <p className="text-lg sm:text-xl text-chalk leading-relaxed font-light">
            I'm a third-year Information Technology undergraduate at{' '}
            <span className="text-wire font-medium">SLIIT</span>, working across the full stack -
            from React interfaces and Node.js APIs to Kotlin on Android and interaction design in
            Figma.
          </p>
          <p className="mt-6 text-muted text-base leading-relaxed">
            I like taking a product from a rough idea to something people can actually open and
            use: sketching the flow, designing the screens, then wiring up the database and API
            underneath. Outside of coursework, I've contributed to team-built web platforms and
            designed a full mobile ordering experience end to end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="soft-card p-5">
              <div className="font-display text-2xl text-chalk">{s.value}</div>
              <div className="font-mono text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
