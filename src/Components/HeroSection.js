import React from "react";
import "./HeroSection.css";
import { Button } from "./Navbar/Button";
import {Link} from 'react-router-dom'
import img from "../img/main_files/fast delivery service.png";
function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
           <div className="row">
          <div className="col-md-6 ">
            <div className="info">
                <h3 className="title-text">Hey</h3>
                <h1 className="title-text text-uppercase">Shapping Awaits</h1>
                <p>whats are you wating for</p>
                <Button 
                to="/about"
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                >
                  <Link style={{"color": "#425b73" , "text-decoration":" none"}} to="/shapping">
                  Get Start
                  </Link> 
                </Button>
                </div>
          </div>
          <div className="col-md-6">
              <div className="cont-img">
                 <img src={img} alt="pic" />
              </div>
           </div>
        </div>
        </div>
      </div>
  );
}

export default HeroSection;
