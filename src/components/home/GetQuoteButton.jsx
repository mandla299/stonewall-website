import React from 'react'
import { Link } from 'react-router-dom'

const GetQuoteButton = () => {
  return (
    <Link
      to="/contact"
      className="relative inline-block px-6 py-3 rounded-full font-semibold overflow-hidden text-white bg-[#1e1b4b] group"
    >
      <span className="relative z-10">Get In Touch</span>
      <span className="absolute top-0 left-0 w-full h-full bg-[#ff7200] transform -translate-x-full transition-transform duration-1500 ease-out group-hover:translate-x-0 z-0"></span>
    </Link>
  )
}

export default GetQuoteButton