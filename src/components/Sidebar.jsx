import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sections, profile } from '../data'

export default function Sidebar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-4 bg-ink/90 backdrop-blur border-b border-inkline lg:hidden" style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))' }}>
        <span className="font-display text-chalk text-sm tracking-tight">
          DK<span className="text-signal">.</span>
        </span>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
          className="w-9 h-9 flex flex-col justify-center items-center gap-1.5 focus-ring rounded"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="w-6 h-[1.5px] bg-chalk block"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="w-6 h-[1.5px] bg-chalk block"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="w-6 h-[1.5px] bg-chalk block"
          />
        </button>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 z-30 w-64 bg-ink border-r border-inkline pt-20 px-6 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <button
                    onClick={() => goTo(s.id)}
                    className={`w-full text-left py-2.5 font-mono text-sm flex items-center gap-3 focus-ring rounded ${
                      active === s.id ? 'text-signal' : 'text-muted'
                    }`}
                  >
                    <span className="text-xs opacity-60">0{i + 1}</span>
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 flex-col justify-between border-r border-inkline px-8 py-10 z-30 bg-ink">
        <div>
          <button
            onClick={() => goTo('home')}
            className="font-display text-2xl text-chalk tracking-tight focus-ring rounded"
          >
            Dasunika<span className="text-signal">.</span>
          </button>
          <p className="mt-1.5 text-xs text-muted font-mono">IT Undergraduate, SLIIT</p>
        </div>

        <nav>
          <ul className="relative flex flex-col gap-1 border-l border-inkline">
            {sections.map((s, i) => (
              <li key={s.id} className="relative pl-6 py-2.5">
                {active === s.id && (
                  <motion.span
                    layoutId="active-dot"
                    className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full bg-signal"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {active !== s.id && (
                  <span className="absolute -left-[3.5px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-inkline" />
                )}
                <button
                  onClick={() => goTo(s.id)}
                  className={`font-mono text-sm transition-colors duration-200 focus-ring rounded ${
                    active === s.id ? 'text-chalk' : 'text-muted hover:text-wire'
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 text-xs font-mono text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-wire focus-ring rounded">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-wire focus-ring rounded">
            LinkedIn ↗
          </a>
        </div>
      </aside>
    </>
  )
}
