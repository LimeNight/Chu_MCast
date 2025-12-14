import Navbar from "./components/Navbar"
import Live from "./sections/Live"
import Footer from "./components/Footer"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import VideoGrid from "./components/VideoGrid"

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <VideoGrid />
        <Live />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
