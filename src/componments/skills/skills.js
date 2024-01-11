import React from 'react'
import './skills.css';
import vue from "../../assets/Vue.js_Logo_2.svg.png";
import react from "../../assets/react.png";
import thymeleaf from "../../assets/thymeleaf.png";
import html from "../../assets/html.png";
import css from "../../assets/CSS3_logo_and_wordmark.svg.png";
import javascript from "../../assets/JavaScript-Logo.png";
import spring from "../../assets/spring boot java.png";
import java from "../../assets/Java_programming_language_logo.svg.png";
import python from "../../assets/Python-logo-notext.svg.png"
import bootstrap from "../../assets/Bootstrap_logo.svg.png"
import download from '../../assets/cloud-download_60538.png'
import resume from "../../assets/MokZhiZhuan(SoftwareDeveloper).pdf"


const Skills = () => {
  return (
    <section id="skills">
        <span className="MyProfile">My Profile:</span><br/>
        <div className="Profile">
        <div className="myprofileinfo">
          <div className="info">
          Full Name : Mok Zhi Zhuan <br/>
          Age : 27 <br/>
          Qualification : UOW Bachelor Degree <br/>of Computer Science <br/>
          Language : English <br/>
          <a href={resume} download="mokzhizhuan_Resume" target='_blank' rel="noreferrer">
            <h2 className="resumes">My Resume:</h2> 
            <img src={download} alt="" className="downloadImg"/>
            </a>
          </div>
        </div>
        </div>
        <span className="skillTitle">Programming language mainly used:<br/></span>
        <span className="skillTitle">Frontend Framework:</span>
        <div className="skillBar">
          <img src={vue} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>VueJS</h2>
            <p>Vue Javascript Framework</p>
        </div>
        </div>
        <div className="skillBar">
          <img src={react} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>React</h2>
            <p>React Javascript Framework</p>
        </div>
        </div>
        <div className="skillBar">
          <img src={bootstrap} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Bootstrap</h2>
            <p>Bootstrap CSS</p>
        </div>
        </div>
        <span className="skillTitle">Frontend:</span>
        <div className="skillBar">
          <img src={html} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Html</h2>
        </div>
        </div>
        <div className="skillBar">
          <img src={thymeleaf} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Thymeleaf</h2>
        </div>
        </div>
        <div className="skillBar">
          <img src={css} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>CSS</h2>
        </div>
        </div>
        <div className="skillBar">
          <img src={javascript} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Javascript</h2>
        </div>
        </div>
        <span className="skillTitle">Backend Framework:</span>
        <div className="skillBar">
          <img src={spring} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Spring boot java</h2>
            <p>Java Backend Framework</p>
        </div>
        </div>
        <span className="skillTitle">Backend:</span>
        <div className="skillBar">
          <img src={java} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Java</h2>
        </div>
        </div>
        <div className="skillBar">
          <img src={python} alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Python</h2>
        </div>
        </div>
        <p className="moreinfo">More details you can check my resume</p>
    </section>
  )
}

export default Skills;