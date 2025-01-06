  'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'

interface NavLinksProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  isMobile?: boolean;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-green-400">Loopify</Link>
        </motion.div>
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks setIsOpen={setIsOpen} isOpen={isOpen} />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-2"
          >
            <Link href="/login" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition duration-300">Login</Link>
            <Link href="/signup" className="bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-md transition duration-300">Sign Up</Link>
          </motion.div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <NavLinks setIsOpen={setIsOpen} isOpen={isOpen} isMobile />
            <div className="flex flex-col space-y-2 mt-4">
              <Link href="/login" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-center transition duration-300">Login</Link>
              <Link href="/signup" className="bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-md text-center transition duration-300">Sign Up</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const NavLinks = ({ setIsOpen, isOpen, isMobile = false }: NavLinksProps) => {
  const linkClasses = isMobile ? "block py-2" : "hover:text-green-400 transition duration-300"
  
  return (
    <ul className={isMobile ? "flex flex-col space-y-2" : "flex space-x-6"}>
      <li><Link href="/" className={linkClasses}>Home</Link></li>
      <li><Link href="/about" className={linkClasses}>About</Link></li>
      <li className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center ${linkClasses}`}
        >
          Services <ChevronDown className="ml-1" />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`${isMobile ? "" : "absolute"} right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg py-2`}
            >
              <li><Link href="/services/buy" className="block px-4 py-2 hover:bg-gray-700">Buy</Link></li>
              <li><Link href="/services/sell" className="block px-4 py-2 hover:bg-gray-700">Sell</Link></li>
              <li><Link href="/services/borrow" className="block px-4 py-2 hover:bg-gray-700">Borrow</Link></li>
              <li><Link href="/services/repair" className="block px-4 py-2 hover:bg-gray-700">Repair</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
      <li><Link href="/contact" className={linkClasses}>Contact</Link></li>
    </ul>
  )
}

export default Header
