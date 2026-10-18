import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'
import profilePhoto from './Assets/profile.jpg'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2600)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="
        relative min-h-[100svh]
        flex flex-col justify-center
        overflow-hidden
        bg-blueprint bg-grid
        px-5 sm:px-8 md:px-12 lg:px-20
        pt-24 pb-16
        lg:pt-0 lg:pb-0
      "
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/90 to-ink pointer-events-none" />

      {/* Main content */}
      <div
        className="
          relative z-10
          mx-auto w-full max-w-6xl
          grid items-center
          gap-12 sm:gap-14
          lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)]
          lg:gap-20
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="min-w-0">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mb-6
              inline-flex max-w-full
              items-center gap-3
              rounded-full
              border border-inkline
              bg-ink/50
              px-3.5 py-2 sm:px-4
              backdrop-blur-sm
            "
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wire opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wire" />
            </span>

            <p className="font-mono text-xs leading-tight text-wire sm:text-xs md:text-sm">
              Malabe, Sri Lanka · open to internships
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              font-display
              text-[clamp(2.5rem,1rem+6vw,3.75rem)]
              leading-[0.92]
              tracking-tight
              text-chalk
            "
          >
            Dasunika
            <br />

            <span className="relative inline-block max-w-full break-words text-white/90">
              Kumarawansha

              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: 'easeOut',
                }}
                className="
                  absolute
                  -bottom-1 left-0
                  h-[2px] w-full
                  origin-left
                  bg-gradient-to-r
                  from-signal via-wire to-signal
                  sm:-bottom-2 sm:h-[3px]
                "
              />
            </span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="
              mt-7 sm:mt-8
              flex h-10
              items-center
              overflow-hidden
            "
          >
            <motion.div
              key={roleIndex}
              initial={{ y: 36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -36, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
              className="
                max-w-full
                rounded-full
                border border-wire/40
                bg-wire/10
                px-3 py-1.5
                font-display
                text-base
                text-signal
                sm:text-xl
                md:text-2xl
              "
            >
              {profile.roles[roleIndex]}
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="
              mt-5 sm:mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-muted
              sm:text-base
              md:text-lg
            "
          >
            {profile.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="
              mt-7 sm:mt-8
              flex flex-wrap
              items-center
              gap-2.5 sm:gap-3
            "
          >
            {/* View Projects */}
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="
                group relative
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-signal to-[#ff8a5b]
                px-5 py-2.5
                text-xs
                font-medium
                text-ink
                shadow-[0_14px_32px_rgba(255,107,74,0.35)]
                transition-transform
                duration-300
                hover:-translate-y-0.5
                focus-ring
                sm:px-6 sm:py-3 sm:text-sm
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-white/15
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <span className="relative">
                View projects
              </span>
            </button>

            {/* Get in touch */}
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="
                rounded-full
                border border-inkline
                bg-ink/40
                px-5 py-2.5
                text-xs
                font-medium
                text-chalk
                transition-all
                duration-200
                hover:border-wire
                hover:text-wire
                focus-ring
                sm:px-6 sm:py-3 sm:text-sm
              "
            >
              Get in touch
            </button>

            {/* CV */}
            <a
              href="/CV_Dasunika_Kumarawansha.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                border border-inkline
                bg-transparent
                px-5 py-2.5
                text-xs
                font-medium
                text-muted
                transition-all
                duration-200
                hover:border-wire
                hover:text-wire
                focus-ring
                sm:px-6 sm:py-3 sm:text-sm
              "
            >
              View CV ↗
            </a>
          </motion.div>

          {/* Skill tags */}
          <div
            className="
              mt-7 sm:mt-8
              flex flex-wrap
              gap-1.5 sm:gap-2
              font-mono
              text-xs
              text-muted
              sm:text-xs
            "
          >
            {[
              'React',
              'Node.js',
              'Kotlin',
              'Figma',
              'Mobile',
              'UI/UX',
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border border-inkline
                  bg-white/[0.02]
                  px-2.5 py-1.5
                  sm:px-3
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ================= PROFILE IMAGE ================= */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            x: 24,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-[240px]
            sm:max-w-[280px]
            md:max-w-[300px]
            lg:mx-0
            lg:max-w-none
          "
        >
          {/* Image circle */}
          <div
            className="
              relative
              aspect-square
              overflow-hidden
              rounded-full
              border-4
              border-paper/90
              bg-paper
              shadow-2xl
              shadow-black/40
            "
          >
            <img
              src={profilePhoto}
              alt="Portrait of Dasunika Kumarawansha"
              className="
                h-full w-full
                object-cover
                object-top
                brightness-105
                contrast-[1.04]
                transition
                duration-500
                hover:scale-[1.08]
              "
            />

            <div
              className="
                absolute inset-x-0 bottom-0
                h-20
                bg-gradient-to-t
                from-ink/20
                to-transparent
              "
            />
          </div>

          {/* Image label */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
            className="
              absolute
              bottom-2
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              rounded-sm
              border border-inkline
              bg-ink
              px-2.5 py-1.5
              font-mono
              text-xs
              text-wire
              shadow-lg
              sm:bottom-[-16px]
              sm:px-4 sm:py-2
              sm:text-xs
            "
          >
            SLIIT · IT Undergraduate
          </motion.span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-7
          left-5
          hidden
          items-center
          gap-3
          font-mono
          text-xs
          text-muted
          sm:flex
          sm:left-8
          lg:left-20
          lg:bottom-10
        "
      >
        <motion.span
          animate={{
            scaleX: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            h-px
            w-8
            origin-left
            bg-wire
          "
        />

        Scroll
      </motion.div>
    </section>
  )
}