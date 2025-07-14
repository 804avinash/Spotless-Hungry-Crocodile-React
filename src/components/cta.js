import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'

const CTA = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                <button type="button" className="cta-button thq-button-filled">
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  heading1: 'Explore the Pristine Beauty of Andaman Islands',
  action1: 'Enquire',
  content1:
    'Book your dream vacation to the Andaman Islands and experience the perfect blend of sun, sand, and sea.',
}

CTA.propTypes = {
  heading1: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
}

export default CTA
