'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, User, Mail, Lock, ChevronRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const nameInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Handle sign-up logic here
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  useEffect(() => {
    if (step === 1 && nameInputRef.current) {
      nameInputRef.current.focus()
    }
  }, [step])

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
          Join EcoGadget
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    ref={nameInputRef}
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-gray-700 text-white w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your name"
                  />
                </div>
                <NameAnimation name={name} />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
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
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
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
                    placeholder="Create a password"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between">
            {step > 1 && (
              <motion.button
                type="button"
                onClick={prevStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                <ChevronLeft className="inline-block mr-2" />
                Back
              </motion.button>
            )}
            {step < 3 ? (
              <motion.button
                type="button"
                onClick={nextStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
              >
                Next
                <ChevronRight className="inline-block ml-2" />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                disabled={isLoading}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
              >
                Sign Up
              </motion.button>
            )}
          </div>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 text-center"
        >
          <span className="text-gray-400">Already have an account?</span>{' '}
          <Link href="/login" className="text-green-400 hover:underline">
            Log in
          </Link>
        </motion.div>

        <ProgressIndicator currentStep={step} totalSteps={3} />
        <BackgroundAnimation />
      </motion.div>
    </div>
  )
}

const NameAnimation = ({ name }: { name: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-4 text-center"
    >
      <AnimatePresence>
        {name && (
          <motion.span
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-green-400"
          >
            Welcome, {name}!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ProgressIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="flex justify-center mt-8 space-x-2">
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className={`w-3 h-3 rounded-full ${
            index < currentStep ? 'bg-green-400' : 'bg-gray-600'
          }`}
        />
      ))}
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

