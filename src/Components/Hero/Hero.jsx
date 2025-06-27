import React from 'react';
import './Hero.css';
import profile_img from '../assets/profile1.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Mounika Bathula</span> - Computer Science Graduate</h1>
        <p>
          Passionate Web Developer with hands-on experience in building responsive, user-centric websites using HTML, CSS, JavaScript, and Django. 
          Skilled in developing dynamic web applications and integrating real-time data to deliver smooth and functional user experiences.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
          </div>
          <div className="hero-resume">
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
          </div>
        </div>
    </div>
  );
};

export default Hero;
