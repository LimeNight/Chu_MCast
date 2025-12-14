import Navbar from "./components/Navbar"
import Videos from "./sections/Videos"
import Live from "./sections/Live"
import Footer from "./components/Footer"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"

function App() {
  return (
    <div className="bg-gray-950 text-gray-200">
      <Navbar />

      <Hero />
      <Videos />
      <Live />
      <Contact />

      <Footer />
    </div>
  )
}

export default App
