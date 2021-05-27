import React from 'react'
import '../../static/styles/g-Styles.scss'
import Header from  './Header/Header'
import Footer from './Footer/Footer'

const Layout =({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default Layout
