import React from 'react'
import AboutSection from '../AboutSection'
import Branches from '../Branches'
import Footer from '../Footer'
import HeroSection from "../HeroSection"
  
function Home() {
    return (
        <div>
             <HeroSection />
             <AboutSection />
             <Branches />
              <Footer />
         </div>
    )
}

export default Home
