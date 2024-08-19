import React from 'react'
import Footer from '../Footer'
import OurSchool from './OurSchool'
import Founder from './Founder'
import Aim from './Aim'
import Navbar from '../Navbar'
import Curosel from './Curosel'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Curosel/>
      <OurSchool/>
      <Founder/>
      <Aim/>
      <Footer/>
    </>
  )
}

export default Home
