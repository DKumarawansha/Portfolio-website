import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      id="projects"
      className="
        border-t border-inkline
        px-5 py-12
        sm:px-8 sm:py-14
        md:px-12
        lg:px-20 lg:py-16
      "
    >
      <SectionHeading index="03" title="Projects" />

      <div
        className="
        grid
        grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))]
        gap-4
      "
>
  {projects.map((p, i) => {
          const isOpen = openIndex === i

          return (
            <motion.div
              key={p.title}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-60px',
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
              className="
                min-w-0
                overflow-hidden
                rounded-xl
                border
                border-inkline
                bg-white/[0.02]
                sm:rounded-2xl
              "
            >
              {/* Project header */}
              <button
                type="button"
                onClick={() => toggleProject(i)}
                aria-expanded={isOpen}
                className="
                  group
                  flex
                  w-full
                  min-w-0
                  items-center
                  justify-between
                  gap-3
                  px-4
                  py-4
                  text-left
                  focus-ring
                  sm:gap-6
                  sm:px-6
                  sm:py-5
                "
              >
                {/* Project title */}
                <div
                  className="
                    flex
                    min-w-0
                    flex-1
                    items-center
                    gap-3
                    sm:gap-8
                  "
                >
                  <span
                    className="
                      hidden
                      shrink-0
                      font-mono
                      text-xs
                      text-muted
                      sm:block
                    "
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span
                    className="
                      min-w-0
                      break-words
                      font-display
                      text-lg
                      leading-tight
                      text-chalk
                      transition-colors
                      duration-200
                      group-hover:text-wire
                      sm:text-xl
                      md:text-2xl
                    "
                  >
                    {p.title}
                  </span>
                </div>

                {/* Type + icon */}
                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-3
                    sm:gap-6
                  "
                >
                  <span
                    className="
                      hidden
                      font-mono
                      text-[10px]
                      text-signal
                      sm:block
                      sm:text-xs
                    "
                  >
                    {p.type}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-inkline
                      font-mono
                      text-xl
                      leading-none
                      text-muted
                      transition-colors
                      duration-200
                      group-hover:border-wire
                      group-hover:text-wire
                      sm:h-8
                      sm:w-8
                    "
                  >
                    +
                  </motion.span>
                </div>
              </button>

              {/* Project details */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: 'easeInOut',
                    }}
                    className="overflow-hidden"
                  >
                    <div
                      className="
                        grid
                        gap-6
                        px-4
                        pb-5
                        pt-1
                        sm:grid-cols-3
                        sm:gap-8
                        sm:px-6
                        sm:pb-6
                        sm:pl-16
                        sm:pt-2
                      "
                    >
                      {/* Description + points */}
                      <div className="min-w-0 sm:col-span-2">
                        <p
                          className="
                            text-sm
                            leading-relaxed
                            text-muted
                            sm:text-base
                          "
                        >
                          {p.description}
                        </p>

                        <ul
                          className="
                            mt-4
                            flex
                            flex-col
                            gap-2.5
                          "
                        >
                          {p.points.map((pt) => (
                            <li
                              key={pt}
                              className="
                                flex
                                min-w-0
                                gap-2.5
                                text-xs
                                leading-relaxed
                                text-chalk
                                sm:gap-3
                                sm:text-sm
                              "
                            >
                              <span className="shrink-0 text-signal">
                                —
                              </span>

                              <span className="min-w-0 break-words">
                                {pt}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technology stack */}
                      <div
                        className="
                          flex
                          min-w-0
                          flex-wrap
                          content-start
                          gap-1.5
                          sm:gap-2
                        "
                      >
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="
                              h-fit
                              rounded-full
                              border
                              border-inkline
                              bg-ink/60
                              px-2.5
                              py-1.5
                              font-mono
                              text-[10px]
                              text-wire
                              sm:px-3
                              sm:text-[11px]
                            "
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