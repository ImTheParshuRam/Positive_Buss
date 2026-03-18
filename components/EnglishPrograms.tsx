export default function EnglishPrograms() {
  const programs = [
    {
      name: 'Basic English',
      status: 'Available',
      statusColor: 'bg-green-100 text-green-800',
      description: 'Foundation in English grammar and communication',
      details: ['Grammar fundamentals', 'Vocabulary building', 'Reading comprehension'],
    },
    {
      name: 'Spoken English',
      status: 'Starting April',
      statusColor: 'bg-blue-100 text-blue-800',
      description: 'Fluent spoken English and conversation skills',
      details: ['Pronunciation training', 'Daily conversations', 'Confidence building'],
    },
    {
      name: 'Grammar & Writing',
      status: 'Available',
      statusColor: 'bg-green-100 text-green-800',
      description: 'Master writing skills and grammatical accuracy',
      details: ['Essay writing', 'Grammar rules', 'Sentence construction'],
    },
  ]

  return (
    <section id="english" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">English Programs</h2>
          <p className="text-gray-600 text-lg">Special focus on English mastery</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${program.statusColor}`}>
                  {program.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{program.description}</p>
              
              <ul className="space-y-3">
                {program.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-teal-500 mr-3 font-bold">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
