import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[]) {
  const [currentSection, setCurrentSection] = useState(sectionIds[0])
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)

      // section spy
      for (let id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight
          if (scrollTop >= offsetTop - 100 && scrollTop < offsetTop + offsetHeight - 100) {
            setCurrentSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds])

  return { currentSection, scrollProgress }
}
