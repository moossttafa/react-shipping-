import React from 'react';
 import './HeroSection.css'
import { Button } from './Navbar/Button';
function HeroSection() {
    return (
     <div className="hero-section"> 
      <h1>Shapping Awaits</h1>
      <p>whats are you wating for</p>
      <Button 
       className="btns"
       buttonStyle="btn--outline"
       buttonSize="btn--large">
           Get Start
       </Button>
      </div>
    )
}

export default HeroSection;
