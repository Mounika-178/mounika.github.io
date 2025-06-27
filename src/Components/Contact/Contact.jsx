import React from 'react'
import './Contact.css'
import theme_pattern from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/theme_pattern.jpg'
import mail_icon from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/mail_icon.jpg'
import location_icon from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/location_icon.jpg'
import call_icon from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/call_icon.jpg'


const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c21b4fd9-6727-4d81-8940-75fdd5752fcf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt=""  />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, feel free to send a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=""/> <p>mounikabathula178@gmail.com</p> 
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt=""/> <p>+91-77803-91169</p> 
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt=""/> <p>visakhapatnam, AP, India</p> 
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Mounika</label>
                <input type="text" placeholder='Enter the name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter the email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter the message'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
