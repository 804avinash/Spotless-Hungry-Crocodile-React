import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className={`navbar-container1 ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar-image1"
        />
        <div className="navbar-container2">
          <div
            data-thq="thq-dropdown"
            className="navbar-thq-dropdown1 list-item"
          >
            <ul data-thq="thq-dropdown-list" className="navbar-dropdown-list1">
              <li
                data-thq="thq-dropdown"
                className="navbar-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle1"
                >
                  <span className="navbar-text10">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="navbar-text18">Sub-menu Item</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle2"
                >
                  <span className="navbar-text11">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="navbar-text20">Sub-menu Item</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle3"
                >
                  <span className="navbar-text12">
                    {props.text7 ?? (
                      <Fragment>
                        <span className="navbar-text17">Sub-menu Item</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links1">
              <Link to="/" className="navbar-link11 thq-link thq-body-small">
                {props.link1}
              </Link>
              <span className="navbar-link21 thq-link thq-body-small">
                {props.link2}
              </span>
              <Link
                to="/destinations"
                className="navbar-link31 thq-link thq-body-small"
              >
                {props.link3}
              </Link>
              <span className="navbar-link41 thq-link thq-body-small">
                {props.link4}
              </span>
              <Link
                to="/contact1"
                className="navbar-link51 thq-link thq-body-small"
              >
                {props.link5}
              </Link>
            </nav>
          </div>
        </div>
        <div data-thq="thq-dropdown" className="navbar-thq-dropdown2 list-item">
          <ul data-thq="thq-dropdown-list" className="navbar-dropdown-list2">
            <li data-thq="thq-dropdown" className="navbar-dropdown4 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle4"
              >
                <span className="navbar-abcd">
                  {props.text9 ?? (
                    <Fragment>
                      <span className="navbar-text19">Sub-menu Item</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="navbar-dropdown5 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle5"
              >
                <span className="navbar-text13">
                  {props.text10 ?? (
                    <Fragment>
                      <span className="navbar-text16">Sub-menu Item</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="navbar-dropdown6 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle6"
              >
                <span className="navbar-text14">
                  {props.text11 ?? (
                    <Fragment>
                      <span className="navbar-text15">Sub-menu Item</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links2">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              <span className="thq-link thq-body-small">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar-buttons">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  action1: '/',
  text11: undefined,
  action2: '/tours',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  text10: undefined,
  logoAlt: 'logo',
  link2: 'Tours',
  link4: 'About Us',
  text7: undefined,
  link5: 'Contact',
  text5: undefined,
  text9: undefined,
  rootClassName: '',
  link1: 'Home',
  text6: undefined,
  link3: 'Destinations',
}

Navbar.propTypes = {
  action1: PropTypes.string,
  text11: PropTypes.element,
  action2: PropTypes.string,
  logoSrc: PropTypes.string,
  text10: PropTypes.element,
  logoAlt: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  text7: PropTypes.element,
  link5: PropTypes.string,
  text5: PropTypes.element,
  text9: PropTypes.element,
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
  text6: PropTypes.element,
  link3: PropTypes.string,
}

export default Navbar
