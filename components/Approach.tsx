'use client'

import { motion } from 'framer-motion'
import { Recycle, Battery, Zap, Leaf } from 'lucide-react'

const approaches = [
  {
    icon: <Recycle />,
    title: "Recycling",
    description: "We specialize in recycling unusable batteries and electronics, ensuring proper disposal and resource recovery."
  },
  {
    icon: <Battery />,
    title: "Battery Refining",
    description: "Our advanced processes refine black mass into environmentally friendly applications, reducing waste and pollution."
  },
  {
    icon: <Zap />,
    title: "Energy Efficiency",
    description: "We promote energy-efficient devices and practices, helping users reduce their carbon footprint and save on energy costs."
  },
  {
    icon: <Leaf />,
    title: "Circular Economy",
    description: "By choosing our platform, you're contributing to a circular economy, extending the life of electronics and reducing e-waste."
  }
]

const Approach = () => {
  return (
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
        >
          Our Approach
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex items-start"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-green-600 mr-4 text-3xl bg-green-100 p-3 rounded-full"
              >
                {approach.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{approach.title}</h3>
                <p className="text-gray-700">{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach

