import React from 'react'
import PageHero from '../PageHero'
import Footer from '../Footer'
import AboutSection from '../AboutSection'

function About() {
    return (
    <div className="about-section">
       <PageHero title="about" />
      <AboutSection />
    <Footer /> 
  </div>
     )
}

export default About
