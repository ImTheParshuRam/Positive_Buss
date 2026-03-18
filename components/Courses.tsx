export default function Courses() {
  const courses = [
    {
      category: '1st–8th',
      description: 'All Subjects',
      icon: '📚',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
    },
    {
      category: '9th–10th',
      description: 'Maths, Science, English',
      icon: '🔬',
      color: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-300',
    },
    {
      category: '11th–12th',
      description: 'Science, Commerce, Arts',
      icon: '🎓',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-300',
    },
  ]

  return (
    <section id="courses" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-gray-600 text-lg">Comprehensive coaching for all grades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${course.color} border-2 ${course.borderColor} rounded-xl p-8 text-center hover:shadow-lg transition-shadow`}
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.category}</h3>
              <p className="text-gray-700 font-medium">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
