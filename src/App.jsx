import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import Industries from './pages/Industries'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import RefundPolicy from './pages/RefundPolicy';
import TrackProject from './pages/TrackProject';
import ScrollToHash from './components/ScrollToHash'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import useAnalytics from './hooks/useAnalytics'

const App = () => {
  useAnalytics()
  return (
    <div>
      <Navbar />
      <ScrollToHash />
      <div className="w-full">
        <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services /> }/>
        <Route path='/industries' element={<Industries /> }/>
        <Route path='/contact' element={<Contact /> }/>
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>
      <Footer />
      </div>
    </div>
  )
}

export default App
