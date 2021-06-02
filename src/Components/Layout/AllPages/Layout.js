import React from 'react'
import '../../../static/styles/globalStyles.scss'
import Header from  './Header/Header'
import Footer from './Footer/Footer'

const Layout =({children}) => {
    return (
        <div>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}

export default Layout
