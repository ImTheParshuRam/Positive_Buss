export default function Faculty() {
  const faculty = [
    {
      name: 'Mukesh Sir',
      subject: 'English',
      qualification: 'M.A. English, B.Ed',
      experience: '10+ years',
      bio: 'Expert in English grammar, spoken English, and competitive exam preparation.',
      icon: '👨‍🏫',
    },
  ]

  return (
    <section id="faculty" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Faculty</h2>
          <p className="text-gray-600 text-lg">Experienced educators dedicated to your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
            >
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-24 flex items-center justify-center">
                <span className="text-6xl">{member.icon}</span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.subject}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p><span className="font-semibold">Qualification:</span> {member.qualification}</p>
                  <p><span className="font-semibold">Experience:</span> {member.experience}</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
