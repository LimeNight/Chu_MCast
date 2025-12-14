import Navbar from "./components/Navbar"
import Live from "./sections/Live"
import Footer from "./components/Footer"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import VideoGrid from "./components/VideoGrid"

function App() {
  return (
    <div className="bg-gray-950 text-gray-200">
      <Navbar />

      <Hero />
      <VideoGrid />
      <Live />
      <Contact />

      <Footer />
    </div>
  )
}

export default App
