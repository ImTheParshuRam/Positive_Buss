'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast, Toaster } from 'sonner'
import { MapPin, Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    let valid = true
    const newErrors = { name: '', email: '', phone: '', message: '' }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      valid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      valid = false
    }

    const phoneRegex = /^\d{10}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      valid = false
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const ownerTemplateId = process.env.NEXT_PUBLIC_EMAILJS_OWNER_TEMPLATE_ID!
      const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }

      // Step 1: Send email to owner
      await emailjs.send(
        serviceId,
        ownerTemplateId,
        templateParams,
        publicKey
      )

      // Step 2: Send auto-reply email to user
      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        templateParams,
        publicKey
      )

      toast.success('We will contact you soon', {
        style: { background: '#10b981', color: '#fff', border: 'none' }
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      toast.error('Something went wrong. Please try again later', {
        style: { background: '#ef4444', color: '#fff', border: 'none' }
      })
      console.error('Email sending failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg">Contact us for more information or to book a free trial</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">B-28, Kardam Farm, Johri Pur, Delhi - 110094</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+919811743645" className="text-blue-600 hover:text-blue-700 block transition-colors">
                      +91 98117 43645
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="text-blue-600 w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a
                      href="https://wa.me/919811743645"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 block transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-64 md:h-80 w-full relative">
              <iframe
                title="Positive Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d743.2791991686022!2d77.28751530030937!3d28.713519643065734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbf88ed22fcd%3A0xf18647e00ef537b6!2sB-28%2C%20Kardam%20Farm%20Colony%2C%20Johripur%20Extension%2C%20Johripur%2C%20Delhi%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201102!5e1!3m2!1sen!2sin!4v1773860321690!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full min-h-[44px] px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full min-h-[44px] px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full min-h-[44px] px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  placeholder="10-digit phone number"
                  maxLength={10}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full min-h-[100px] px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-y ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  placeholder="Tell us about your interest..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[44px] bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 touch-manipulation"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
