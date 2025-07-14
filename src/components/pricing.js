import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing-pricing23 thq-section-padding">
      <div className="pricing-max-width thq-section-max-width">
        <div className="pricing-section-title">
          <span className="pricing-text10 thq-body-small">
            {props.content1}
          </span>
          <div className="pricing-content">
            <h2 className="pricing-text11 thq-heading-2">{props.heading1}</h2>
            <p className="pricing-text12 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="pricing-tabs">
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing-button1 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing-button2 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly === true && (
          <div className="pricing-container1">
            <div className="pricing-column1 thq-card">
              <div className="pricing-price10">
                <div className="pricing-price11">
                  <p className="pricing-text15 thq-body-large">{props.plan1}</p>
                  <h3 className="pricing-text16 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing-list1">
                  <div className="pricing-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button3 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing-column2 thq-card">
              <div className="pricing-price12">
                <div className="pricing-price13">
                  <p className="pricing-text22 thq-body-large">
                    {props.plan12}
                  </p>
                  <h3 className="pricing-text23 thq-heading-3">
                    {props.plan1Price2}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly2}</p>
                </div>
                <div className="pricing-list2">
                  <div className="pricing-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature12}
                    </span>
                  </div>
                  <div className="pricing-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature22}
                    </span>
                  </div>
                  <div className="pricing-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature32}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button4 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action2}</span>
              </button>
            </div>
            <div className="pricing-column3 thq-card">
              <div className="pricing-price14">
                <div className="pricing-price15">
                  <p className="pricing-text29 thq-body-large">{props.plan2}</p>
                  <h3 className="pricing-text30 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly}</p>
                </div>
                <div className="pricing-list3">
                  <div className="pricing-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button5 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing-column4 thq-card">
              <div className="pricing-price16">
                <div className="pricing-price17">
                  <p className="pricing-text37 thq-body-large">{props.plan3}</p>
                  <h3 className="pricing-text38 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="thq-body-large">{props.plan3Yearly}</p>
                </div>
                <div className="pricing-list4">
                  <div className="pricing-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                  <div className="pricing-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button6 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {isMonthly === false && (
          <div className="pricing-container2">
            <div className="pricing-column5 thq-card">
              <div className="pricing-price18">
                <div className="pricing-price19">
                  <span className="pricing-text46 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing-text47 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing-list5">
                  <div className="pricing-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button7 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing-column6 thq-card">
              <div className="pricing-price20">
                <div className="pricing-price21">
                  <span className="pricing-text53 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing-text54 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing-list6">
                  <div className="pricing-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button8 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing-column7 thq-card">
              <div className="pricing-price22">
                <div className="pricing-price23">
                  <span className="pricing-text61 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing-text62 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing-list7">
                  <div className="pricing-list-item32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item34">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item35">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing-list-item36">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button9 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing.defaultProps = {
  plan12: 'Basic plan',
  plan2Feature3: 'All meals included',
  plan1Action: 'Book Now',
  plan3Feature3: 'All-inclusive package',
  plan2Feature21: 'Feature text goes here',
  plan1Price2: '$500',
  plan3: 'Enterprise plan',
  plan3Yearly: 'or $499 yearly',
  plan1Yearly2: 'or $200 yearly',
  plan2Action1: 'Get started',
  plan11: 'Basic plan',
  plan1Feature11: 'Feature text goes here',
  plan1Yearly: 'or $200 yearly',
  plan1: 'Basic plan',
  plan1Feature31: 'Feature text goes here',
  plan1Price1: '$200/yr',
  plan3Action: 'Book Now',
  plan2Feature1: '7 days and 6 nights',
  content1: 'Choose the perfect package for you',
  plan2Feature4: 'Feature text goes here',
  plan2Price: '$800',
  plan1Action1: 'Get started',
  plan2Price1: '$299/yr',
  plan2Feature11: 'Feature text goes here',
  plan1Feature32: 'Meals provided',
  plan1Feature22: 'Accommodation included',
  plan1Price: '$500',
  plan1Feature12: '5 days and 4 nights',
  plan3Action1: 'Get started',
  plan31: 'Enterprise plan',
  plan1Yearly1: 'or $20 monthly',
  plan3Feature11: 'Feature text goes here',
  plan3Price1: '$499/yr',
  plan2Feature2: 'Luxury accommodation',
  plan1Feature3: 'Meals provided',
  plan1Feature1: '5 days and 4 nights',
  plan2Feature41: 'Feature text goes here',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan1Feature21: 'Feature text goes here',
  plan3Feature41: 'Feature text goes here',
  plan1Action2: 'Book Now',
  plan3Feature5: 'Feature text goes here',
  plan3Feature51: 'Feature text goes here',
  plan2Feature31: 'Feature text goes here',
  heading1: 'Packages',
  plan3Feature21: 'Feature text goes here',
  plan21: 'Business plan',
  plan2Yearly1: 'or $29 monthly',
  plan3Yearly1: 'or $49 monthly',
  plan3Feature2: 'Private beach villa stay',
  plan1Feature2: 'Accommodation included',
  plan2Action: 'Book Now',
  plan3Feature31: 'Feature text goes here',
  plan3Feature4: 'Feature text goes here',
  plan3Feature1: '10 days and 9 nights',
  plan3Price: '$1200',
  plan2Yearly: 'or $299 yearly',
  plan2: 'Business plan',
}

Pricing.propTypes = {
  plan12: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan1Action: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan1Price2: PropTypes.string,
  plan3: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan1Yearly2: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan11: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan1: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan3Action: PropTypes.string,
  plan2Feature1: PropTypes.string,
  content1: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan2Price: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan1Feature32: PropTypes.string,
  plan1Feature22: PropTypes.string,
  plan1Price: PropTypes.string,
  plan1Feature12: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan31: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan2Feature41: PropTypes.string,
  content2: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan1Action2: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan2Feature31: PropTypes.string,
  heading1: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan21: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan2Action: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan3Price: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan2: PropTypes.string,
}

export default Pricing
