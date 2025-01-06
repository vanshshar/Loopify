import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Mission from '../components/Mission'
import Testimonials from '../components/Testimonials'
import JoinRevolution from '../components/JoinRevolution'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Mission />
      <JoinRevolution />
      <Footer />
    </main>
  )
}
