import React from 'react';


import ServiceMatrix from '../components/ServiceMatrix';
import IndustriesCTA from '../components/IndustriesCTA';
import IndustriesHero from '../components/industries/IndustriesHero';
import IndustriesGrid from '../components/industries/IndustriesGrid';

const Industries = () => {
  return (
    <>
    <IndustriesHero />
    <IndustriesGrid />
    <ServiceMatrix />
    <IndustriesCTA />
    </>
  );
};

export default Industries;
