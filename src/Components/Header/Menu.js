import React from 'react'

import './headerStyles.css'
import nswitch from '../../images/svg/switch.svg'
import ngames from '../../images/svg/games.svg'

function Menu() {
    return (
        <div >
            <nav className="menuContainer">
            <li className='menu' ><img className="menuIcon " src={nswitch} alt="" /> Switch Family</li>
                <li className='menu' ><img className="menuIcon " src={ngames} alt="" /> Games </li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
         
  
            </nav>
        </div>
    )
}

export default Menu
