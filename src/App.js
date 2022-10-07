import Navbar from './components/Navbar'
// import { useState } from 'react'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'
function App() {
  // const [dark, setDark] = useState(true)
  //className={dark ? 'text-white bg-[#000300]' : 'text-black bg-white'}
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
