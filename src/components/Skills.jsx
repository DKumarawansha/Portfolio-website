import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups, softSkills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-20 py-28 border-t border-inkline">
      <SectionHeading index="02" title="Skills" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <h3 className="font-mono text-xs text-wire mb-4">{group.title}</h3>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-chalk text-base font-light border-b border-inkline pb-2.5">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 pt-10 border-t border-inkline flex flex-wrap gap-3"
      >
        {softSkills.map((s) => (
          <span
            key={s}
            className="font-mono text-xs text-muted border border-inkline rounded-full px-4 py-2"
          >
            {s}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
