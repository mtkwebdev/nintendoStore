import React from 'react'
import '../Layout.scss'
import logo80s from '../../../../static/images/logo80s.png'

function Footer() {
    return (
        <article className="footerLogoContainer footer">
            <img className="logo80s" src={logo80s} alt="" />
            <div className="footerContainer">
                <div className="footerContent">
                    <div className="row">
                        <h4>Nintendo</h4>
                        <h4>eShop</h4>
                        <h4>Nintendo Kids</h4>
                        <h4>Parents Support Events</h4>
                        <h4>Events</h4>
                    </div>
                    <div className="row">
                        <p>Company Information</p>
                        <p>Career</p>
                        <p>Website Privacy Policy </p>
                        <p>Cookie settings </p>
                        <p> CSR </p>
                        <p>Modern Slavery Transparency Statement</p>
                        <p> Contact</p>
                    </div>
                    <p className="copyright">© 2021 Nintendo - This reskin has been done by Mohammad Kawadri 2021</p>
                </div>
            </div>
    
        </article>
    )
}

export default Footer
