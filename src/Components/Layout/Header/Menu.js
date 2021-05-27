import React from 'react'

import '../Layout.scss'
import nswitch from '../../../static/images/menuIcons/switch.png'
import ngames from '../../../static/images/menuIcons/games.png'

function Menu() {
    return (
        <div >
            <nav className="menuContainer">
            <li className='menu' ><img className="menuIcon " src={nswitch} alt="" /> Switch Family</li>
                <li className='menu' ><img className="menuIcon " src={ngames} alt="" /> Games </li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                {/* <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li>
                <li className='menu' ><img className="menuIcon" src={nswitch} alt="" />Menu Item</li> */}
         
  
            </nav>
        </div>
    )
}

export default Menu
