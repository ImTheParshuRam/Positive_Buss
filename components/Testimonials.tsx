export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya',
      class: '10th Grade',
      message:
        "Positive Academy helped me improve my English dramatically. The small batch size meant I got personalized attention, and Mukesh Sir's teaching style is amazing!",
      rating: 5,
    },
    {
      name: 'Rahul',
      class: '12th Grade',
      message:
        'The faculty here is excellent and the study environment is very conducive. My grades have improved significantly since I joined.',
      rating: 5,
    },
    {
      name: 'Aisha',
      class: '8th Grade',
      message:
        'I was struggling with English, but the personalized approach at Positive Academy helped me gain confidence. I can now speak English fluently!',
      rating: 5,
    },
    {
      name: 'Arjun',
      class: '9th Grade',
      message:
        'Regular tests and feedback really helped me understand my weak areas. The teachers are always available for doubt clearing sessions.',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
          <p className="text-gray-600 text-lg">What our students say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-blue-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.message}"</p>

              <div className="border-t border-blue-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.class}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
