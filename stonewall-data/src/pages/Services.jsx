import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import TranscriptionGrid from '../components/services/TranscriptionGrid'
import DataCleaningGrid from '../components/services/DataCleaningGrid'
import DataCaptureGrid from '../components/services/DataCaptureGrid'

const Services = () => {
  return (
    <div className="flex flex-col w-full">
      <ServicesHero />
       <DataCaptureGrid />
      <TranscriptionGrid />
      <DataCleaningGrid />
    </div>
  )
}

export default Services
