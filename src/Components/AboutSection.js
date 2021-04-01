import React from 'react'
import imgAbout from '../img/unnamed.jpg'

function AboutSection() {
    return (
        <div className="about-one " id="about">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                    <div className="about-box-text">
                        <div className="sec-title sec-left">
                            <div className="sec-title-headline">
                                <h2 className="top-handline-title">who are we </h2>
                                <h3 className="handline-title">Providing the best solutions</h3>
                            </div>
                        </div>
                        <p className="about-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-box-img">
                        <div className="box-img">
                            <img src={imgAbout} alt="pic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutSection
