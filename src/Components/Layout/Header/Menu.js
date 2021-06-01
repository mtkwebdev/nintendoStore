import React, {useState} from 'react'
import {menuData} from './menuData'
import { Link } from "gatsby"
import '../Layout.scss'


function Menu() {
    const [showMenu, setShowMenu] = useState(false);
const menuClick = () => {setShowMenu(!showMenu)};

//onClick={window.location.pathname = val.link}
    return (
         <div className="menuContainer">
            <div className="burger" onClick={menuClick}>☰</div>
            {showMenu ?<div onClick={menuClick} className="menuContainer">
            {menuData.map((val,key)=>{return(
                <Link to={val.link} className="menuItem" key={key}>
                    <div>{val.title}</div>
                    <div>{val.icon}</div>
                </Link>
                )})}
            </div>:null}
        </div>

    )
}

export default Menu
