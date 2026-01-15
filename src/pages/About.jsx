import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutMission from '../components/about/AboutMission'
import AboutValues from '../components/about/AboutValues'
import AboutIdentity from '../components/about/AboutIdentity'
import AboutCallToAction from '../components/about/AboutCallToAction'

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutIdentity />
      <AboutCallToAction />
    </div>
  )
}

export default About
