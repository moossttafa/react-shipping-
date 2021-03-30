import React from 'react'
import PageHero from '../PageHero'

function ContactUs({title}) {
    return (
      <main>
        <PageHero title="ContactUs"/>
       <div className="contact-us text-center" id="Contact">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="sec-title-headline">
                          <h2 className="top-handline-title">Contact Us</h2>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                      <form action="" className="message">
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="message-box">
                                      <input type="text" placeholder="Your Name" />
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="message-box">
                                      <input type="email" placeholder="Your email" />
                                  </div>
                              </div>
  
                              <div className="col-lg-6">
                                  <div className="message-box">
                                      <input type="tel" placeholder="Your Nummber" />
                                  </div>
                              </div>
                              <div className="col-lg-12">
                                  <div className="message-box">
                                      <textarea placeholder="Leave Your Message Here....."></textarea>
                                  </div>
                              </div>
                              <div className="col-lg-12">
                                  <div className="message-box">
                                      <a href="#" className="btn-style">Send You message</a>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      </main>
    )
}

export default ContactUs
