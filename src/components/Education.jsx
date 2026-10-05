import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { education } from '../data'

export default function Education() {
  return (
    <section
      id="education"
      className="
        border-t border-inkline
        px-5 py-12
        sm:px-8 sm:py-14
        md:px-12
        lg:px-20 lg:py-16
      "
    >
      <SectionHeading index="04" title="Education" />

      <div className="flex flex-col">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{
              opacity: 0,
              x: -16,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}
            className="
              grid
              grid-cols-1
              gap-3
              border-b
              border-inkline
              py-6
              last:border-b-0
              sm:grid-cols-[120px_minmax(0,1fr)]
              sm:gap-8
              sm:py-8
              lg:grid-cols-[120px_minmax(0,1fr)]
              lg:gap-10
            "
          >
            {/* Period */}
            <span
              className="
                font-mono
                text-xs
                text-signal
                sm:text-sm
              "
            >
              {e.period}
            </span>

            {/* Education details */}
            <div className="min-w-0">
              <h3
                className="
                  break-words
                  font-display
                  text-lg
                  leading-tight
                  text-chalk
                  sm:text-xl
                "
              >
                {e.program}
              </h3>

              <p
                className="
                  mt-1
                  break-words
                  text-sm
                  text-wire
                "
              >
                {e.school}
              </p>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-relaxed
                  text-muted
                  sm:text-base
                "
              >
                {e.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}