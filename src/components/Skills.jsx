import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups, softSkills } from '../data'

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        border-t border-inkline
        px-5 py-12
        sm:px-8 sm:py-14
        md:px-12
        lg:px-20 lg:py-16
      "
    >
      <SectionHeading index="02" title="Skills" />

      {/* Skill Groups */}
      <div
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          sm:gap-5
          lg:grid-cols-3
          lg:gap-6
        "
      >
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
            }}
            className="
              soft-card
              min-w-0
              p-4
              sm:p-5
              md:p-6
            "
          >
            {/* Group title */}
            <h3
              className="
                mb-4
                font-mono
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-wire
                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              {group.title}
            </h3>

            {/* Skills list */}
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="
                    border-b
                    border-inkline
                    pb-2.5
                    text-sm
                    font-light
                    leading-relaxed
                    text-chalk
                    last:border-b-0
                    sm:text-base
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
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
          margin: '-60px',
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="
          mt-12
          border-t
          border-inkline
          pt-8
          sm:mt-14
          sm:pt-10
          lg:mt-16
        "
      >
        <div
          className="
            mb-5
            font-mono
            text-[10px]
            uppercase
            tracking-[0.16em]
            text-muted
            sm:text-xs
            sm:tracking-[0.18em]
          "
        >
          Soft Skills
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {softSkills.map((s) => (
            <span
              key={s}
              className="
                rounded-full
                border
                border-inkline
                bg-white/[0.02]
                px-3
                py-1.5
                font-mono
                text-[10px]
                text-muted
                transition-all
                duration-200
                hover:border-wire
                hover:text-wire
                sm:px-4
                sm:py-2
                sm:text-xs
              "
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}