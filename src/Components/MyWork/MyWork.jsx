import React from 'react'
import './MyWork.css'
import theme_pattern from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/theme_pattern.jpg'
import mywork_data from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/mywork_data.js'
import arrow_icon from 'C:/Users/hp/Desktop/portfolio/portfolio-react/src/assets/arrow_icon.jpg'

const MyWork = () => {
  return (
    <div id="work" className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
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