import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Alt: 'Image of Michael Smith',
  author4Position: 'Photographer',
  author3Position: 'Travel Blogger',
  author1Position: 'Marketing Manager',
  review3:
    "I've traveled to many destinations, but Andaman Islands hold a special place in my heart. Thanks to Oceanic Travels for curating such a magical experience.",
  author1Name: 'Sara Johnson',
  author2Name: 'Michael Smith',
  review1: '5 stars - Highly recommend!',
  author2Position: 'CEO',
  review2:
    'The Andaman Islands tour exceeded all our expectations. The team at Oceanic Travels ensured every detail was taken care of, allowing us to relax and enjoy the beauty of the islands.',
  content1:
    'Our trip to Andaman Islands organized by Oceanic Travels was truly unforgettable. The pristine beaches, crystal-clear waters, and excellent service made it a dream vacation.',
  author2Src:
    'https://images.unsplash.com/photo-1500048993953-d23a436266cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjIxNzAxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  author1Alt: 'Image of Sara Johnson',
  author1Src:
    'https://images.unsplash.com/photo-1619091743055-be44730dcea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjIxNzAxOHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjIxNzAxOXw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Alt: 'Image of David Wilson',
  review4:
    "Capturing the beauty of Andaman Islands was a photographer's dream come true. Thanks to Oceanic Travels for making it possible.",
  author4Name: 'David Wilson',
  heading1: 'Testimonials',
  author3Src:
    'https://images.unsplash.com/photo-1600349230078-13945eb9d51d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjIxNzAyMHw&ixlib=rb-4.1.0&q=80&w=1080',
  author3Name: 'Emily Brown',
  author3Alt: 'Image of Emily Brown',
}

Testimonial.propTypes = {
  author2Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author3Position: PropTypes.string,
  author1Position: PropTypes.string,
  review3: PropTypes.string,
  author1Name: PropTypes.string,
  author2Name: PropTypes.string,
  review1: PropTypes.string,
  author2Position: PropTypes.string,
  review2: PropTypes.string,
  content1: PropTypes.string,
  author2Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review4: PropTypes.string,
  author4Name: PropTypes.string,
  heading1: PropTypes.string,
  author3Src: PropTypes.string,
  author3Name: PropTypes.string,
  author3Alt: PropTypes.string,
}

export default Testimonial
