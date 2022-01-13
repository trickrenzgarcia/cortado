import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              {/* Website logo */}
              <div>
                <Link href='/'>
                  <a className="flex items-center py-4 px-2">
                    <Image src="/favicon.ico" alt="" width={50} height={50}/>
                    <span className="font-semibold text-gray-500 text-lg">Cortado</span>
                  </a>
                </Link>
              </div>
              {/* Navbar items */}
              <div className="hidden md:flex items-center space-x-1">
                <Link href='/menu'><a className="py-4 px-2 text-green-700 border-b-4 border-green-700 font-semibold">Menu</a></Link>
                <Link href='/'><a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-700 transition duration-300">Home</a></Link>
                <Link href='/about'><a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-700 transition duration-300">About</a></Link>
              </div>
            </div>
            {/* Secondary navbar items */}
            <div className="hidden md:flex items-center space-x-3 ">
              <Link href='/login'><a className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-700 hover:text-white transition duration-300">Log In</a></Link>
              <Link href='/signup'><a className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-700 hover:text-white transition duration-300">Sign Up</a></Link>
            </div>
            {/* On Mobile Devices button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
					    </button>
					  </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
