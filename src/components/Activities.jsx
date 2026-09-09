import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { activities, languages } from '../data'

export default function Activities() {
  return (
    <section id="activities" className="px-6 sm:px-12 lg:px-20 py-14 border-t border-inkline">
      <SectionHeading index="05" title="Beyond the code" />

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 flex flex-col gap-3"
        >
          {activities.map((a) => (
            <li key={a} className="flex gap-3 text-chalk text-base font-light">
              <span className="text-signal">·</span>
              {a}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <h3 className="font-mono text-xs text-wire mb-4">Languages</h3>
          <div className="flex flex-col gap-4">
            {languages.map((l) => (
              <div key={l.name} className="flex justify-between border-b border-inkline pb-3">
                <span className="text-chalk">{l.name}</span>
                <span className="text-muted text-sm">{l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
