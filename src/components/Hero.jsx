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

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-24 lg:pt-0 bg-blueprint bg-grid overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink to-ink pointer-events-none" />

      <div className="relative z-10 grid w-full max-w-6xl min-w-0 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] lg:gap-20">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wire opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wire" />
            </span>
            <p className="font-mono text-wire text-sm">
              Malabe, Sri Lanka - open to internships
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[11vw] sm:text-7xl lg:text-8xl leading-[0.95] text-chalk tracking-tight break-words"
          >
            Dasunika
            <br />
            <span className="relative inline-block max-w-full break-words">
              Kumarawansha
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-signal sm:-bottom-2"
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex h-9 items-center gap-3 overflow-hidden"
          >
            
            <motion.div
              key={roleIndex}
              initial={{ y: 36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -36, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="font-display text-2xl sm:text-3xl text-signal"
            >
              {profile.roles[roleIndex]}
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-md text-muted text-base leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative px-6 py-3 bg-signal text-ink font-body font-medium text-sm rounded-sm overflow-hidden transition-colors duration-300 hover:text-signal focus-ring"
            >
              <span className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-300 group-hover:translate-x-0" />
              <span className="relative">View projects</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 border border-inkline text-chalk font-body font-medium text-sm rounded-sm hover:border-wire hover:text-wire transition-colors duration-200 focus-ring"
            >
              Get in touch
            </a>
            <a
              href="/CV_Dasunika_Kumarawansha.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-inkline text-muted font-body font-medium text-sm rounded-sm hover:border-wire hover:text-wire transition-colors duration-200 focus-ring"
            >
              View CV ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none"
        >
          {/* corner ticks for a technical-drawing feel */}
          <span className="absolute -top-2 -left-2 h-4 w-4 border-l-2 border-t-2 border-signal" />
          <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-signal" />

          <div className="relative aspect-square overflow-hidden rounded-full border-4 border-paper/90 bg-paper shadow-2xl shadow-black/40">
            <img
              src={profilePhoto}
              alt="Portrait of Dasunika Kumarawansha"
              className="h-full w-full object-cover object-top brightness-105 contrast-[1.04] transition duration-500 hover:scale-[1.08]"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/20 to-transparent" />
          </div>

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-ink border border-inkline px-3 py-2 font-mono text-[10px] text-wire shadow-lg sm:-bottom-4 sm:px-4 sm:text-[11px]"
          >
            SLIIT · IT Undergraduate
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-10 left-6 sm:left-12 lg:left-20 items-center gap-3 text-muted font-mono text-xs"
      >
        <motion.span
          animate={{ scaleX: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-px bg-wire origin-left"
        />
        Scroll
      </motion.div>
    </section>
  )
}