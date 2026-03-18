export default function WhyUs() {
  const reasons = [
    {
      icon: '👥',
      title: 'Small Batch Size',
      description: 'Personalized attention for each student with manageable class sizes',
    },
    {
      icon: '👨‍🏫',
      title: 'Experienced Teachers',
      description: 'Highly qualified and dedicated faculty with years of teaching experience',
    },
    {
      icon: '💡',
      title: 'Personal Attention',
      description: 'One-on-one guidance and customized learning plans for each student',
    },
    {
      icon: '📊',
      title: 'Regular Tests',
      description: 'Continuous assessment and feedback to track progress',
    },
    {
      icon: '🗣️',
      title: 'English Focus',
      description: 'Special emphasis on English improvement and communication skills',
    },
    {
      icon: '🎯',
      title: 'Result-Oriented',
      description: 'Proven track record of student success and achievements',
    },
  ]

  return (
    <section id="why-us" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 text-lg">Excellence in education with proven results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-blue-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
