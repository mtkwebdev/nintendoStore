import React from 'react'
import {Link} from "gatsby"
import ImageSlider from './ImageSlider'
import './hero.scss'


function Hero() {
    return (
        <div className="heroGrid">
        <div></div>
        <Link to="/nintendoswitch"><ImageSlider className="carousel"></ImageSlider></Link>
        <div></div>
        </div>
       
    )
}

export default Hero
