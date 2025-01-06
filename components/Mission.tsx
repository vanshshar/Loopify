'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Battery, Zap } from 'lucide-react'

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-8"
          >
            Our Mission
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Loopify is revolutionizing electronics use. We connect, repair, and recycle to reduce e-waste and promote sustainability.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Leaf />, text: "Sustainability", color: "bg-green-500" },
              { icon: <Recycle />, text: "Reduce E-Waste", color: "bg-blue-500" },
              { icon: <Battery />, text: "Extend Lifespan", color: "bg-yellow-500" },
              { icon: <Zap />, text: "Energy Efficiency", color: "bg-purple-500" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                variants={itemVariants}
              >
                <motion.div
                  className={`${item.color} p-4 rounded-full mb-4 shadow-lg`}
                  variants={iconVariants}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {item.icon}
                </motion.div>
                <p className="text-sm font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <CircuitAnimation />
    </section>
  )
}

const CircuitAnimation = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M0,0 L100,0 C150,0 150,50 200,50 L300,50 C350,50 350,100 400,100 L500,100"
      fill="none"
      stroke="rgba(74, 222, 128, 0.2)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
    />
    <motion.path
      d="M0,100 L100,100 C150,100 150,150 200,150 L300,150 C350,150 350,200 400,200 L500,200"
      fill="none"
      stroke="rgba(74, 222, 128, 0.2)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "loop", ease: "linear" }}
    />
  </svg>
)

export default Mission

