import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { CourseEnrollment } from '@/components/course-enrollment'
import { News } from '@/components/news'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CourseEnrollment />
      <News />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
