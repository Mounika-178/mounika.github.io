import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Abilities from './Components/Abilities/Abilities'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Abilities/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App