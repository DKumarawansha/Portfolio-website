import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="projects" className="px-6 sm:px-12 lg:px-20 py-14 border-t border-inkline">
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
              className="rounded-2xl border border-inkline bg-white/[0.02] px-4 py-2 sm:px-6 sm:py-3"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full min-w-0 flex items-center justify-between gap-4 py-4 text-left group focus-ring rounded sm:gap-6"
              >
                <div className="min-w-0 flex items-baseline gap-4 sm:gap-8">
                  <span className="font-mono text-xs text-muted hidden sm:block">0{i + 1}</span>
                  <span className="min-w-0 font-display text-xl text-chalk transition-colors duration-200 group-hover:text-wire sm:text-2xl break-words">
                    {p.title}
                  </span>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="hidden font-mono text-xs text-signal sm:block">{p.type}</span>
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
                    <div className="grid gap-8 pb-6 pt-2 sm:pl-16 sm:grid-cols-3">
                      <p className="sm:col-span-2 text-base leading-relaxed text-muted">
                        {p.description}
                        <ul className="mt-4 flex flex-col gap-2">
                          {p.points.map((pt) => (
                            <li key={pt} className="flex gap-3 text-sm text-chalk">
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
                            className="h-fit rounded-full border border-inkline bg-ink/60 px-3 py-1.5 font-mono text-[11px] text-wire"
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
