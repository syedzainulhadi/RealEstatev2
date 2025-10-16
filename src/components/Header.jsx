import React from 'react'
import Navbar from './Navbar'
import headerImg from '../assets/header_img.png' // ✅ Importing the image

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${headerImg})` }} // ✅ Background image applied
      id="Header"
    >
      <Navbar />

      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fits your dreams
        </h2>

        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white py-3 px-8 rounded hover:bg-white hover:text-black transition"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-500 py-3 px-8 rounded hover:bg-blue-600 transition"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
