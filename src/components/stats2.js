import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text25">20+</span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text30">
                  Explore the Andaman Islands with Us
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text29">
                  Various tour packages to choose from
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container3 thq-grid-2">
            <div className="stats2-container4">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text21">Number of Tours</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text26">
                      Options for different preferences
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text28">Types of Tours</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text31">
                      Different types of tours available
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container6 thq-grid-2">
            <div className="stats2-container7">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text22">Happy Customers</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text27">
                      Satisfied with their experience
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text24">Average Rating</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text23">
                      Based on customer reviews
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat1: undefined,
  stat3: undefined,
  stat4Description: undefined,
  stat4: undefined,
  content1: undefined,
  stat1Description: undefined,
  stat3Description: undefined,
  stat2: undefined,
  content2: undefined,
  heading1: undefined,
  stat2Description: undefined,
}

Stats2.propTypes = {
  stat1: PropTypes.element,
  stat3: PropTypes.element,
  stat4Description: PropTypes.element,
  stat4: PropTypes.element,
  content1: PropTypes.element,
  stat1Description: PropTypes.element,
  stat3Description: PropTypes.element,
  stat2: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  stat2Description: PropTypes.element,
}

export default Stats2
