import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/SponsorsSection"
import WhatWeDoSection from "@/components/WhatWeDoSection"
import ExecutiveBoardSection from "@/components/ExecutiveBoardSection"
import ContactFormSection from "@/components/ContactForm"
import JoinUsSection from "@/components/JoinUs"
import CalendarSection from "@/components/CalendarSection"
import GallerySection from "@/components/GallerySection"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <ExecutiveBoardSection />
      <ProjectsSection />
      <CalendarSection />
      <JoinUsSection />
      <ContactFormSection />
    </main>
  )
}
