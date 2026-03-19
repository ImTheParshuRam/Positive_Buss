import Image from 'next/image'

export default function Faculty() {
  const faculty = [
    {
      name: 'Mukesh Sir',
      subject: 'English',
      // qualification: 'M.A. English, B.Ed',
      experience: '28+ years',
      bio: 'Expert in English grammar, spoken English, and competitive exam preparation.',
      icon: '👨‍🏫',
      // Add your image to the "public" folder and specify the path here:
      image: '/mukesh-sir.jpeg', // e.g., save your photo as "public/mukesh-sir.jpg"
    },
  ]

  return (
    <section id="faculty" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900/50 dark:to-transparent transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Faculty</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Experienced educators dedicated to your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-32 flex items-center justify-center pt-4">
                {member.image ? (
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800 top-6">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <span className="text-6xl">{member.icon}</span>
                )}
              </div>
              
              <div className="p-8 pt-10 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{member.subject}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300 text-left bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  {/* <p><span className="font-semibold text-gray-800 dark:text-gray-200">Qualification:</span> {member.qualification}</p> */}
                  <p><span className="font-semibold text-gray-800 dark:text-gray-200">Experience:</span> {member.experience}</p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
