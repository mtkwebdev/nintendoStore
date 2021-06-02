import React from 'react'
import Menu from './Menu'
import logo from '../../../../static/images/logo.png'
import '../Layout.scss'

//Component Assets

function Header() {

    return (
        <div>
        <div className="headerLogoContainer " >
        <div className="logo" ><img src={logo} className="logo" alt="Nintendo Logo" /></div>
         <Menu></Menu>
        </div>
        </div>
    )
}

export default Header
