import { motion } from 'framer-motion'

export default function SectionHeading({ index, title }) {
  return (
    <div className="flex items-baseline gap-4 mb-6">
      <span className="section-index font-mono text-sm text-signal">{index}</span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl sm:text-4xl text-chalk tracking-tight"
      >
        {title}
      </motion.h2>
      <span className="flex-1 h-px bg-inkline" />
    </div>
  )
}
