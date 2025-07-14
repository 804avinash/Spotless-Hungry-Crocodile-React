import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial13.css'

const Testimonial13 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial13-max-width thq-section-max-width">
        <div className="testimonial13-section-title">
          <h2 className="testimonial13-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial13-text16">
                  Customer Testimonials
                </span>
              </Fragment>
            )}
          </h2>
          <p className="testimonial13-subtitle thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial13-text18">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="testimonial13-container thq-flex-row">
          <div className="testimonial13-content1 thq-flex-column">
            <div className="testimonial13-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text10 thq-body-large">
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial13-text23">
                    Our trip to the Andaman Islands was truly unforgettable. The
                    stunning ocean views and white sandy beaches exceeded our
                    expectations. The snorkeling adventure was a highlight of
                    our journey.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial13-avatar1">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial13-avatar-image1 thq-img-round thq-img-ratio-1-1"
              />
              <div className="testimonial13-avatar-content1">
                <span className="testimonial13-text11 thq-body-small">
                  {props.author1Name ?? (
                    <Fragment>
                      <span className="testimonial13-text17">
                        Sarah and Mark
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author1Position ?? (
                    <Fragment>
                      <span className="testimonial13-text20">
                        Travel Enthusiasts
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company1LogoAlt}
                src={props.company1LogoSrc}
                className="testimonial13-logo1"
              />
            </div>
          </div>
          <div className="testimonial13-content2 thq-flex-column">
            <div className="testimonial13-stars2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text13 thq-body-large">
              {props.review2 ?? (
                <Fragment>
                  <span className="testimonial13-text19">
                    The Andaman Islands provided us with the perfect escape from
                    our busy lives. The luxurious accommodations and
                    personalized tour packages made our vacation a dream come
                    true.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial13-avatar2">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial13-avatar-image2 thq-img-round"
              />
              <div className="testimonial13-avatar-content2">
                <span className="testimonial13-text14 thq-body-small">
                  {props.author2Name ?? (
                    <Fragment>
                      <span className="testimonial13-text21">Emily</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author2Position ?? (
                    <Fragment>
                      <span className="testimonial13-text22">
                        Adventure Seeker
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company2LogoAlt}
                src={props.company2LogoSrc}
                className="testimonial13-logo2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial13.defaultProps = {
  heading1: undefined,
  author1Name: undefined,
  author2Alt: 'Image of Emily',
  content1: undefined,
  review2: undefined,
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Position: undefined,
  company2LogoAlt: 'Company Logo for Emily',
  author1Alt: 'Image of Sarah and Mark',
  author2Name: undefined,
  author2Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1541525897844-9851970da95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjIzNzQzOHw&ixlib=rb-4.1.0&q=80&w=1080',
  company1LogoAlt: 'Company Logo for Sarah and Mark',
  author2Src:
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjIzNzQzOHw&ixlib=rb-4.1.0&q=80&w=1080',
  review1: undefined,
}

Testimonial13.propTypes = {
  heading1: PropTypes.element,
  author1Name: PropTypes.element,
  author2Alt: PropTypes.string,
  content1: PropTypes.element,
  review2: PropTypes.element,
  company1LogoSrc: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author1Position: PropTypes.element,
  company2LogoAlt: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Name: PropTypes.element,
  author2Position: PropTypes.element,
  author1Src: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author2Src: PropTypes.string,
  review1: PropTypes.element,
}

export default Testimonial13
