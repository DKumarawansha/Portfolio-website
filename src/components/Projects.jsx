import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="projects" className="px-6 sm:px-12 lg:px-20 py-28 border-t border-inkline">
      <SectionHeading index="03" title="Projects" />

      <div className="flex flex-col">
        {projects.map((p, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-b border-inkline"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group focus-ring rounded"
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="font-mono text-xs text-muted hidden sm:block">0{i + 1}</span>
                  <span className="font-display text-xl sm:text-2xl text-chalk group-hover:text-wire transition-colors duration-200">
                    {p.title}
                  </span>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="font-mono text-xs text-signal hidden sm:block">{p.type}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-2xl text-muted leading-none"
                  >
                    +
                  </motion.span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-0 sm:pl-16 grid sm:grid-cols-3 gap-8">
                      <p className="sm:col-span-2 text-muted text-base leading-relaxed">
                        {p.description}
                        <ul className="mt-4 flex flex-col gap-2">
                          {p.points.map((pt) => (
                            <li key={pt} className="text-chalk text-sm flex gap-3">
                              <span className="text-signal">—</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </p>
                      <div className="flex flex-wrap content-start gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="font-mono text-xs text-wire border border-inkline rounded-full px-3 py-1.5 h-fit"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
