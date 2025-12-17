import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Videos from "./sections/Videos"
import Pricing from "./sections/Pricing"
import WhatsAppButton from "./components/WattsAppButton"
import ProcessTimeline from "./components/ProcessTImeline"

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <ProcessTimeline />
        <Pricing />
        <Videos />
        <Contact />
      </main>
      
      <Footer />

      <WhatsAppButton />
    </div>
  )
}

export default App
