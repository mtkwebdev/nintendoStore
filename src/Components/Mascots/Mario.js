import React from 'react'
import './mario.css'
import coin from '../../images/superMario/coin.png'
import coinbox from '../../images/superMario/coinbox2.jpeg'
import mario from '../../images/superMario/mario.png'

function Mario() {
    return (
        <div className="flex marioContainer" >
        <img className="coin" src={coin} alt=""></img>
        <img className="coinBox" src={coinbox} alt=""></img>
        <img className="_mario" src={mario} alt=""></img>
    </div>
    )
}

export default Mario
