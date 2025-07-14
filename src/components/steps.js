import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps-actions"></div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text13 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text14 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text16 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text17 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text19 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text20 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text22 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text23 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step2Description:
    'Secure your spot on the tour by booking online or contacting our travel agents for assistance.',
  step2Title: 'Book Your Tour',
  step3Description:
    'Get ready for your adventure by packing all the essentials for a memorable trip to the Andaman Islands.',
  step3Title: 'Pack Your Bags',
  step1Description:
    'Browse through our selection of exciting tours and choose the one that suits your preferences.',
  step4Description:
    'Embark on a journey filled with stunning ocean views, pristine beaches, and unforgettable experiences in the Andaman Islands.',
  step1Title: 'Choose Your Adventure',
  step4Title: 'Enjoy Your Vacation',
}

Steps.propTypes = {
  step2Description: PropTypes.string,
  step2Title: PropTypes.string,
  step3Description: PropTypes.string,
  step3Title: PropTypes.string,
  step1Description: PropTypes.string,
  step4Description: PropTypes.string,
  step1Title: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps
