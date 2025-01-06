'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Environmental Activist",
    content: "Loopify has revolutionized the way I think about electronics. Their platform makes it easy to make sustainable choices.",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Michael Chen",
    role: "Tech Enthusiast", 
    content: "I've saved so much money by borrowing devices for short-term projects. Loopify is a game-changer!",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Emma Rodriguez",
    role: "College Student",
    content: "The repair service is fantastic! They fixed my laptop for a fraction of what a new one would cost. Highly recommended!",
    image: "/placeholder.svg?height=80&width=80"
  }
]

const Testimonials = () => {
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
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-green-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
