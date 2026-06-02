import { HomeHero } from './_components/home-hero'
import { HomeServices } from './_components/home-services'
import { HomeAbout } from './_components/home-about'
import { HomeTestimonials } from './_components/home-testimonials'
import { HomeContact } from './_components/home-contact'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeTestimonials />
      <HomeContact />
    </>
  )
}
