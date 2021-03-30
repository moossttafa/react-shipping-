import React from 'react'
import {FaLinkedinIn} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="section-left"> 
                    <div className="logo">
                       <h2>FE ELSAREA</h2>
                    </div>
                    <div className="social-media">
                        <a href="#" className="social_item">
                            <span className=" social-icon  icon-facebook">
                               <FaFacebookF />
                            </span>
                        </a> 
                        <a href="#" className="social_item">
                            <span className=" social-icon icon-linkedin-in">
                                <FaLinkedinIn />
                            </span>
                        </a>
                        </div>
                    </div>
                    <p className="copyright">© 2020 Created By mostafa
                    </p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="section-right"> 
                    <div className="title">
                        <h2>Our Newsletter</h2>
                    </div>
                    <p>Enter Your Email to get our news and updates. </p>
                    <form action="" className="footer-newsletter-form">
                        <input type="number" className="txtb" placeholder="Track your shipment" />
                        <input type="submit" className="btn-1" value="Tracking Now." />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        
    )
}

export default Footer
