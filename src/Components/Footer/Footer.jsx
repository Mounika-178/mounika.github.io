import React from 'react'
import './Footer.css'
import logo from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/log.jpg'
import user_icon from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/user_icon.jpg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" className='logo'/>
                <p></p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter the email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
     <hr/>
     <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2025 Mounika Bathula. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
     </div>
    </div>
  )
}

export default Footer