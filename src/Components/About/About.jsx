import React from 'react'
import './About.css'
import theme_pattern from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/theme_pattern.jpg'
import about_profile from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/about_profile.jpg'

const About = () => {
  return (
    <div className='about'>
        <div id="about" className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I'm a Creative and motivated Web Developer with hands-on experience in building responsive and dynamic web applications using HTML, CSS, JavaScript, and Django. </p>
                        <p>Skilled in designing clean user interfaces and intuitive user experiences, with a solid foundation in full stack development, Python programming, and integrating machine learning models into real-world applications.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Django</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>MySQL</p><hr style={{width:"78%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"75%"}}/></div>
                    
                </div>

            </div>
        </div>
      
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>years of experience in IT field</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Certifications related to web development and Programming</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>4+</h1>
                <p>Projects completed</p>
            </div>
            
        </div>
    </div>
  )
}

export default About