import heroVideo from "/hero-bg-1.mp4";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">

      {/* 🎥 Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        muted={true}
        autoPlay={true}
        loop={true}
        playsInline={true}
      />

      {/* 🌑 Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🧠 Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          {/* Hero szöveg */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Chu-MobilCast
          </motion.h1>


          <motion.p
            className="text-lg md:text-2xl text-white/70 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Live-uitzendingen, video’s en content op een modern, eendelig platform!
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            {/* Primary button */}
            <a
              href="#videos"
              className="
                          relative inline-flex items-center justify-center
                          px-8 py-3
                          rounded-xl
                          font-semibold
                          text-white
                          bg-gradient-to-r from-blue-600 to-cyan-500
                          shadow-lg shadow-blue-600/30
                          transition-all duration-300 ease-out
                          hover:scale-105 hover:-translate-y-0.5
                          hover:shadow-blue-500/50
                          active:scale-95
                          focus:outline-none focus:ring-2 focus:ring-blue-400/60
                        "
            >
              Videos
            </a>

            {/* Secondary button */}
            <a
              href="#live"
              className="
                          inline-flex items-center justify-center
                          px-8 py-3
                          rounded-xl
                          font-medium
                          text-white
                          bg-white/10
                          backdrop-blur-md
                          border border-white/20
                          transition-all duration-300 ease-out
                          hover:bg-white/20
                          hover:scale-105 hover:-translate-y-0.5
                          active:scale-95
                          focus:outline-none focus:ring-2 focus:ring-white/30
                        "
            >
              Stream
            </a>

          </div>

        </div>
      </div>

    </section>
  )
}



export default Hero