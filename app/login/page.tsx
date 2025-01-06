'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Lock, Mail } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden"
      >
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
            >
              <Loader2 className="w-12 h-12 text-green-400 animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl font-bold text-center text-green-400 mb-6"
        >
          Welcome Back
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-700 text-white w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-700 text-white w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your password"
              />
            </div>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isLoading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            Log In
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 text-center"
        >
          <Link href="/forgot-password" className="text-sm text-green-400 hover:underline">
            Forgot your password?
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4 text-center"
        >
          <span className="text-gray-400">Don't have an account?</span>{' '}
          <Link href="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </motion.div>

        <BackgroundAnimation />
      </motion.div>
    </div>
  )
}

const BackgroundAnimation = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
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

