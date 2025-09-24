import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Img.jpg'
const About = () => {
  return (
    <div  id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hello! I am an aspiring Web Developer with hands-on experience in building responsive websites, scalable applications, and database-driven systems. Skilled in Java, ReactJS, Redux, MySQL, HTML, CSS, and JavaScript, I enjoy creating clean and user-friendly digital solutions. My projects range from interactive games to full-stack applications, reflecting both creativity and problem-solving abilities.</p>
          </div>
          <div className="about-skills">
  <div className="about-skill">
    <p>Java </p>
    <hr style={{width:"50%"}} />
  </div>
  <div className="about-skill">
    <p>My Sql</p>
    <hr style={{width:"70%"}} />
  </div>
  <div className="about-skill">
    <p>HTML & CSS </p>
    <hr style={{width:"75%"}} />
  </div>
  <div className="about-skill">
    <p>React Js</p>
    <hr style={{width:"60%"}} />
  </div>
  <div className="about-skill">
    <p>BootStrap</p>
    <hr style={{width:"70%"}} />
  </div>
  <div className="about-skill">
    <p>JavaScript</p>
    <hr style={{width:"60%"}} />
  </div>
</div>
      </div>
      </div>
     <div className="about-achievements">
      <div className="about-achievement">
        <h1>10+</h1>
        <p>PPROJECTS COMPLETED</p>
      </div>
</div>
    </div>
  )
}


export default About
