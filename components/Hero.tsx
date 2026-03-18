'use client'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-teal-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-balance">
            Best Coaching Classes in Johri Pur for 1st–12th
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700">
            Special Focus on English | Online & Offline Batches Available
          </p>

          <div className="bg-white bg-opacity-80 backdrop-blur-sm border-l-4 border-blue-600 rounded-lg p-4 md:p-6 inline-block max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-semibold text-blue-600">
              🎯 Spoken English Batches Starting April | 3-Day Free Trial
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="tel:+919811743645"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919811743645"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              💬 WhatsApp
            </a>
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              ✓ Book Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
