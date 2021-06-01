import React from 'react'

//images
import logo2 from '../../../static/images/logox2.svg'
import nswitch from '../../../static/images/svg/switch.svg'
import games from '../../../static/images/svg/games.svg'
import eShop from '../../../static/images/svg/eshop.svg'
import support from '../../../static/images/svg/support.svg'
import myStore from '../../../static/images/svg/mystore.svg'
import news from '../../../static/images/svg/news.svg'


export const menuData = [
    {
        title:"Back to the Home Page",
        icon: <img className="menuIcon" src={logo2} alt=""/>,
        link: "/"
    },
    {
        title:"Nintendo Switch Family",
        icon: <img className="menuIcon" src={nswitch} alt=""/>,
        link: "/nintendoswitch"
    },
    {
        title:"Games",
        icon: <img className="menuIcon" src={games} alt=""/>,
        link: "/games"
    },
    {
        title:"Nintendo eShop",
        icon: <img className="menuIcon" src={eShop} alt=""/>,
        link: "/nintendoswitch"
    },
    {
        title:"Support",
        icon: <img className="menuIcon" src={support} alt=""/>,
        link: "/support"
    },
    {
        title:"My Nintendo Store",
        icon: <img className="menuIcon" src={myStore} alt=""/>,
        link: "/nintendoswitch"
    },
    {
        title:"News",
        icon: <img className="menuIcon" src={news} alt=""/>,
        link: "/news"
    },
]
