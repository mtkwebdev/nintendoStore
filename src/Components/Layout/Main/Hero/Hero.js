import React from 'react'
import ImageSlider from './ImageSlider'
import './hero.scss'


function Hero() {
    return (
        <div className="heroGrid">
        <div></div>
        <ImageSlider className="carousel"></ImageSlider>
        <div></div>
        </div>
       
    )
}

export default Hero
