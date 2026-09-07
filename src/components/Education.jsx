import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="px-6 sm:px-12 lg:px-20 py-28 border-t border-inkline">
      <SectionHeading index="04" title="Education" />

      <div className="flex flex-col">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="grid sm:grid-cols-[120px_1fr] gap-4 sm:gap-10 py-8 border-b border-inkline last:border-b-0"
          >
            <span className="font-mono text-sm text-signal">{e.period}</span>
            <div>
              <h3 className="font-display text-xl text-chalk">{e.program}</h3>
              <p className="text-wire text-sm mt-1">{e.school}</p>
              <p className="text-muted text-sm mt-3 leading-relaxed max-w-2xl">{e.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
