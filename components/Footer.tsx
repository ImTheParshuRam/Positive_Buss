import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Positive Academy</h3>
            <p className="text-sm leading-relaxed">
              Empowering students with quality education and excellent coaching since 2002. Special focus on English
              and comprehensive subject knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-white transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919811743645" className="hover:text-white transition-colors">
                  +91 98117 43645
                </a>
              </li>
              <li className="pt-2">
                B-28, Kardam Farm,
                <br />
                Johri Pur, Delhi - 110094
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Mon - Fri: 9:00 AM - 8:00 PM</li>
              <li>Weekends: Closed</li>
              <li className="pt-4">
                <a
                  href="https://wa.me/919811743645"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white text-sm transition-colors"
                >
                  <span>💬</span>
                  Chat Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Positive Academy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
