import React from 'react'
import ImageSlider from './ImageSlider'
import './hero.css'





function Hero() {
    return (
        
        <div className="heroGrid">
         <div className="blueBox"></div>
        <ImageSlider className="carousel"></ImageSlider>
        <div className="blueBox"></div>
   
        </div>
       
    )
}

export default Hero
