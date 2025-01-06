'use client'

import { motion } from 'framer-motion'
import { Recycle, DollarSign, Zap, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: <Recycle />,
    title: "Eco-Friendly",
    description: "Reduce e-waste and promote sustainable tech use"
  },
  {
    icon: <DollarSign />,
    title: "Cost-Effective",
    description: "Save money on electronics through our platform"
  },
  {
    icon: <Zap />,
    title: "Energy Efficient",
    description: "Access to energy-saving devices and practices"
  },
  {
    icon: <ShieldCheck />,
    title: "Secure Transactions",
    description: "Safe and transparent buying, selling, and borrowing"
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-12"
        >
          Why Choose Loopify?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-green-400 mb-4 text-3xl"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>  
      </div>
    </section>
  )
}

export default Features

