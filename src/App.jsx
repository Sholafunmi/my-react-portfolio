import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar />
       <Hero />
       <Bio />
       <Skills /> 
       <Work />
       <Contact />
       <Footer />
    </div>
   
  )
}

export default App
