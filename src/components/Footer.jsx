export default function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-20 py-8 border-t border-inkline flex flex-col sm:flex-row justify-between items-center gap-3">
      <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} Dasunika Kumarawansha</p>
      <p className="font-mono text-xs text-muted">Built with React, Tailwind CSS & Framer Motion</p>
    </footer>
  )
}
