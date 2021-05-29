import React, {useState} from 'react'
import {menuData} from './menuData'
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
                <div className="menuItem" key={key} >
                    <div>{val.title}</div>
                    <div>{val.icon}</div>
                </div> )})}
            </div>:null}
        </div>

    )
}

export default Menu
