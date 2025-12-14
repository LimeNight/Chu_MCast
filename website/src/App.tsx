import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Videos from "./sections/Videos"
import Pricing from "./sections/Pricing"

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <Pricing />
        <Videos />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
