import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Loopify</h3>
            <p className="text-sm text-gray-400">Promoting sustainable electronics use and reducing e-waste.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-400 transition duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-400 transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-green-400 transition duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/buy" className="hover:text-green-400 transition duration-300">Buy</Link></li>
              <li><Link href="/services/sell" className="hover:text-green-400 transition duration-300">Sell</Link></li>
              <li><Link href="/services/borrow" className="hover:text-green-400 transition duration-300">Borrow</Link></li>
              <li><Link href="/services/repair" className="hover:text-green-400 transition duration-300">Repair</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h4>
            <p className="text-sm text-gray-400 mb-2">123 Green Street, Eco City, EC 12345</p>
            <p className="text-sm text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-400 mb-2">Email: info@Loopify.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2023 Loopify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

