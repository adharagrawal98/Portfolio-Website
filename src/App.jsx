import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:bg-cyan-900'>
        <div className='flixed top-0 -z-10 w-full h-full'></div>
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <Technologies />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>
      </div>
  )
}

export default App
