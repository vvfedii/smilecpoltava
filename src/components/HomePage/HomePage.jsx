import { useState } from 'react'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/HeroSection'
import CoursesSection from '../CoursesSection/CoursesSection'
import AboutSection from '../AboutSection/AboutSection'
import ContactsSection from '../ContactsSection/ContactsSection'
import ReviewsSection from '../ReviewsSection/ReviewsSection'
import ReviewsModal from '../ReviewsModal/ReviewsModal'


export default function HomePage() {
    return (
        <>
      <Header/>
      <HeroSection/>
      <CoursesSection/>
      <AboutSection/>
      <ReviewsSection/>
      {/* <ReviewsModal/> */}
      <ContactsSection />
     </>
    )
}