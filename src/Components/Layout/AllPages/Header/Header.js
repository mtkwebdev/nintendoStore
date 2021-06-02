import React from 'react'
import Menu from './Menu'
import {Link} from 'gatsby'
import logo from '../../../../static/images/logo.png'
import '../Layout.scss'

//Component Assets

function Header() {

    return (
        <div>
        <div className="headerLogoContainer " >
        <Link to="/" className="logo" ><img src={logo} className="logo" alt="Nintendo Logo" /></Link>
         <Menu></Menu>
        </div>
        </div>
    )
}

export default Header
