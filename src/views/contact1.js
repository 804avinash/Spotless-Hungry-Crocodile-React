import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import ContactForm7 from '../components/contact-form7'
import Footer4 from '../components/footer4'
import './contact1.css'

const Contact1 = (props) => {
  return (
    <div className="contact1-container">
      <Helmet>
        <title>Contact1 - Spotless Hungry Crocodile</title>
        <meta
          property="og:title"
          content="Contact1 - Spotless Hungry Crocodile"
        />
      </Helmet>
      <Navbar3
        link1={
          <Fragment>
            <span className="contact1-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact1-text11">Tours</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact1-text12">Accommodations</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact1-text13">Activities</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact1-text14">Contact Us</span>
          </Fragment>
        }
        logoSrc="/logo-1500h.png"
      ></Navbar3>
      <ContactForm7
        email={
          <Fragment>
            <span className="contact1-text15">info@andamanislandtours.com</span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="contact1-text16">+1-123-456-7890</span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="contact1-text17">Contact Us</span>
          </Fragment>
        }
        address={
          <Fragment>
            <span className="contact1-text18">
              123 Sandy Beach Road, Andaman Islands
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact1-text19">
              Have a question or need more information?
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact1-text20">
              Our team is here to assist you.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text21">Get in Touch</span>
          </Fragment>
        }
      ></ContactForm7>
      <Footer4
        termsLink={
          <Fragment>
            <span className="contact1-text22">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact1-text23">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact1-text24">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact1
