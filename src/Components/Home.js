import React from 'react'
import Services from './Services'
import TechnicalSkills from './TechnicalSkills'
import About from './About'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
   <>
   <Navbar></Navbar>
    <About></About>
    <TechnicalSkills></TechnicalSkills>
    <Services></Services>
    <Footer></Footer>
   </>
  )
}

export default Home