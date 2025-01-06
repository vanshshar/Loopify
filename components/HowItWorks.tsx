'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, DollarSign, Repeat, Wrench } from 'lucide-react'

const steps = [
  { icon: <ShoppingCart />, title: "Buy", description: "Purchase eco-friendly refurbished electronics" },
  { icon: <DollarSign />, title: "Sell", description: "Sell your unused devices for cash or credit" },
  { icon: <Repeat />, title: "Borrow", description: "Rent electronics for short-term use" },
  { icon: <Wrench />, title: "Repair", description: "Get your devices fixed by certified technicians" },
]

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-green-400 mb-4 text-4xl bg-gray-800 p-4 rounded-full"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

