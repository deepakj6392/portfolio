import React, { Fragment, useEffect } from 'react'
import HeroSection from '../../components/hero-section/HeroSection'
import AOS from 'aos'
import Service from '../service/Service'
import Contact from '../contact/Contact'

const Home = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <Fragment>
        <HeroSection />
        <Service />
        <Contact />
    </Fragment>
  )
}

export default Home