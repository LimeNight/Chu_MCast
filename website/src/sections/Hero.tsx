import heroVideo from "/hero-bg-1.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Chu-MobiCast
          </h1>

          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Élő közvetítések, videók és tartalmak egy modern, egyoldalas felületen
          </p>

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
              Videók
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
              Élő közvetítés
            </a>

          </div>

        </div>
      </div>

    </section>
  )
}



export default Hero