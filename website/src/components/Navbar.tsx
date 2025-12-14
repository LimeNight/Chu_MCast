const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
        <a href="#" className="font-bold text-xl">Chu-MobiCast</a>

        <div className="space-x-6">
          <a href="#videos">Videók</a>
          <a href="#live">Élő</a>
          <a href="#contact">Kapcsolat</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar