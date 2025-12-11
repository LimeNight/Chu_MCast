import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoGrid from "./components/VideoGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark bg-gray-950 text-gray-200">
      <Header />
      <Hero />

      <section id="videos" className="max-w-6xl mx-auto p-4 pt-20">
        <h2 className="text-3xl font-bold mb-6">Videók</h2>
        <VideoGrid />
      </section>

      <Footer />
    </div>
  );
}

export default App;
