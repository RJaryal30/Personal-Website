import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='car__features-container__feature'>
      <div className='car__features-container__feature-title'>
        <h1>{title}</h1>
        <div />
      </div>
      <div className='car__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature