import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import EnglishPrograms from '@/components/EnglishPrograms'
import WhyUs from '@/components/WhyUs'
import Faculty from '@/components/Faculty'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <EnglishPrograms />
      <WhyUs />
      <Faculty />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </>
  )
}
