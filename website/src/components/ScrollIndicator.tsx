import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0

      setProgress(scrolled)
      setVisible(scrollTop > 0)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: -8, opacity: 0 }}
      animate={{
        y: visible ? 0 : -8,
        opacity: visible ? 1 : 0
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        absolute bottom-0 left-0 right-0
        h-[2px]
        bg-white/10
        overflow-hidden
      "
    >
      <motion.div
        className="h-full bg-cyan-400"
        style={{ scaleX: progress, transformOrigin: "left" }}
      />
    </motion.div>
  )
}

export default ScrollIndicator