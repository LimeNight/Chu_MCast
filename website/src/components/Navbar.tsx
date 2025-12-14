import { useScrollSpy } from "../hooks/useScrollSpy"
import { motion } from "framer-motion"
import logo from "../../public/logo.png"

const sections = ["home", "pricing", "videos", "contact"]

const Navbar = () => {
  const { currentSection, scrollProgress } = useScrollSpy(sections)

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">

        {/* Logo + Menu */}
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-lg">
            <img src={logo} alt="MCast Logo" className="h-16" />
          </a>
          <div className="flex space-x-4 text-sm">
            {sections.map(sec => (
              <a
                key={sec}
                href={`#${sec}`}
                className={`transition-colors duration-300 ${
                  currentSection === sec
                    ? "text-[#0ff] drop-shadow-[0_0_4px_#0ff]"
                    : "text-white/70 hover:text-[#0ff]"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-3 mt-3">

          {/* Progress bar */}
          <div className="flex-1 h-1 bg-white/20 rounded overflow-hidden">
            <motion.div
              className="h-1 rounded shadow-[0_0_8px_#0ff]"
              style={{ backgroundColor: "#0ff" }}
              animate={{ width: `${scrollProgress}%` }}
              transition={{ type: "tween", duration: 0.2 }}
            />
          </div>

          {/* Section name */}
          <span className="text-xs uppercase tracking-wider text-white/60">
            {currentSection}
          </span>
          
        </div>

      </div>
    </nav>
  )
}

export default Navbar