import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar
        link1="Home"
        link3="Destinations"
        link4="About Us"
        link5="Contact Us"
        text5={
          <Fragment>
            <span className="home-text1">Sub-menu Item</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text2">Sub-menu Item</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="home-text3">Sub-menu Item</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="home-text4">Sub-menu Item</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="home-text5">Sub-menu Item</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="home-text6">Sub-menu Item</span>
          </Fragment>
        }
        logoSrc="/logo-1500h.png"
        rootClassName="navbarroot-class-name"
      ></Navbar>
      <Hero
        content1="Explore the World’s Most Stunning Shorelines with Us!"
        heading1="Welcome To Blue Andamans"
        image3Src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjIyMTk5NHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        rootClassName="heroroot-class-name"
      ></Hero>
      <Features1></Features1>
      <CTA action1="enquire"></CTA>
      <Features2></Features2>
      <Pricing
        content1="Choose the perfect package for you"
        content2="There is a plan for everyone\n"
        heading1="Packages"
      ></Pricing>
      <Steps></Steps>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
