'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import neweco from '../components/neweco.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionize Your <span className="text-green-400">Tech Habits</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join the sustainable electronics movement. Buy, sell, borrow, and repair with ease.
            </p>
            <Link href="/signup" className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition duration-300 inline-block">
              Get Started
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <Image
              src={neweco}
              alt="EcoGadget Devices"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <CircuitAnimation />
          </motion.div>
        </div>
      </div>
      <BackgroundAnimation />
    </section>
  )
}

const CircuitAnimation = () => (
  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M0 200H400 M200 0V400 M50 50L350 350 M350 50L50 350"
      stroke="rgba(74, 222, 128, 0.2)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
    />
  </svg>
)

const BackgroundAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-green-500 rounded-full opacity-10"
        style={{
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
)

export default Hero

