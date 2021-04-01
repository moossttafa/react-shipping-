import React from "react";
import "./HeroSection.css";
import { Button } from "./Navbar/Button";
import img from "../img/delivery.png";
function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
          <div className="banner display-table"> 
          <div className="head-info table-cell text-center"> 
        <div className="row">
          <div className="col-md-6">
              <div className="info">
                <h1>Shapping Awaits</h1>
                <p>whats are you wating for</p>
                <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                >
                Get Start
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
      </div>
    </div>
  );
}

export default HeroSection;
