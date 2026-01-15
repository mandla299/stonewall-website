import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Navbar from '../components/Navbar'
import Services from '../components/home/ServicesSection'
import IndustriesSection from '../components/home/IndustriesSection'
import CallToActionSection from '../components/home/CallToAction'

import DataImportanceSection from '../components/home/DataImportanceSection'


const Home = () => {
  return (
   
    <div className="flex flex-col w-full">
      <HeroSection />
      <Services/>
      <IndustriesSection />
      <CallToActionSection />
      <DataImportanceSection />
      
      
      {/* Other sections like Services, Testimonials, Footer */}
    </div>
    
  )
}

export default Home