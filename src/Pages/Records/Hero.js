import React from 'react';
import './Hero.css'

const Hero = (props) => {
  return (
    <div className="tool-hero">
        <div className="item-banner">{props.title}</div>
      </div>
  )
}

export default Hero