import React from 'react'
import './MyWork.css'
import themePattern from "../assets/theme_pattern.jpg"
import mywork_data from '../assets/mywork_data.js'
import arrow_icon from '../assets/arrow_icon.jpg'

const MyWork = () => {
  return (
    <div id="work" className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt=""/>
            })}
        </div>
        {/* <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />

        </div> */}
        <br></br>
    </div>
  )
}

export default MyWork