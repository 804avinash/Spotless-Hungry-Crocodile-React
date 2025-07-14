import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery13.css'

const Gallery13 = (props) => {
  return (
    <div className="gallery13-gallery3 thq-section-padding">
      <div className="gallery13-max-width thq-section-max-width">
        <div className="gallery13-section-title">
          <h2 className="gallery13-text10 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery13-text16">Sandy Beach Escape</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery13-text11 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery13-text17">
                  Relax on the pristine sandy beaches and soak up the sun while
                  enjoying the breathtaking views of the ocean.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery13-content">
          <div className="gallery13-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery13-image1 thq-img-ratio-4-3"
            />
            <span className="thq-body-small">
              {props.image1Title ?? (
                <Fragment>
                  <span className="gallery13-text18">Sandy Beach Escape</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery13-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery13-image2 thq-img-ratio-4-3"
            />
            <span className="thq-body-small">
              {props.image2Title ?? (
                <Fragment>
                  <span className="gallery13-text19">Snorkeling Adventure</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery13-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery13-image3 thq-img-ratio-4-3"
            />
            <span className="thq-body-small">
              {props.image3Title ?? (
                <Fragment>
                  <span className="gallery13-text15">
                    Luxurious Accommodations
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery13.defaultProps = {
  image3Title: undefined,
  heading1: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1708357311299-2dd3009bd8a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjMyMjM1N3w&ixlib=rb-4.1.0&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1646768832249-c461ae38196a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjMyMjM1OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Sandy beach with crystal clear water',
  image1Title: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1506947411487-a56738267384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjMyMjM1OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Title: undefined,
  image3Alt: 'Luxury beachfront villa with ocean view',
  image2Alt: 'Snorkeler exploring colorful coral reefs',
}

Gallery13.propTypes = {
  image3Title: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Title: PropTypes.element,
  image3Src: PropTypes.string,
  image2Title: PropTypes.element,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
}

export default Gallery13
