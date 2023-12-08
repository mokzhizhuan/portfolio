import React from 'react'
import './skills.css';
import vue from "../../assets/Vue.js_Logo_2.svg.png";
import react from "../../assets/react.png";
import thymeleaf from "../../assets/thymeleaf.png";
import html from "../../assets/html.png";
import css from "../../assets/CSS3_logo_and_wordmark.svg.png";
import javascript from "../../assets/javascript.png";
import spring from "../../assets/spring boot java.png";
import java from "../../assets/Java_programming_language_logo.svg.png";
import c from "../../assets/ISO_C++_Logo.svg.png";
import python from "../../assets/Python-logo-notext.svg.png";
import asp from "../../assets/asp.jpg";


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Programming language used: <br/></span>
        <span className="skillTitleFront">FrontEnd: <br/></span>
        <div className="skillBarsFrontsframeworks">Framework:<br/>
        <div className="skillBarsFrontsframework">
          <img src={vue} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>VueJS</h2>
          </div>
        <div className="skillBarsFrontsframework"> 
        <img src={react} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>ReactJS</h2>
          </div></div>
        </div></div>
        <div className="skillBarsFronts">FrontEnd Programming:<br/>
        <div className="skillBarsFront"> 
        <img src={thymeleaf} alt="" className="skillBarImg" width="30px" height="30px"/>
          <div className="skillBarText">
            <h2>Thymeleaf</h2>
          </div></div>
        <div className="skillBarsFront">
        <img src={html} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML</h2>
          </div>
        </div>
        <div className="skillBarsFront">
        <img src={css} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CSS</h2>
          </div>
        </div>
        <div className="skillBarsFront">
        <img src={javascript} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Javascript</h2>
          </div>
        </div>
        </div>
        <span className="skillTitleBack">BackEnd: <br/></span>
        <div className="skillBarsBacksframeworks">Framework:<br/>
        <div className="skillBarsBacksframework">
        <img src={spring} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Spring Boot Java</h2>
          </div>
        </div>
        <div className="skillBarsBacks">BackEnd Programming:<br/>
        <div className="skillBarsBack">
          <img src={java} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java</h2>
          </div><br/></div>
        <div className="skillBarsBack">
          <img src={c} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>C++</h2>
          </div></div>
        <div className="skillBarsBack">
          <img src={python} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python</h2>
          </div></div>
        <div className="skillBarsBack">
          <img src={asp} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Asp</h2>
          </div></div>
        </div>
        </div>
    </section>
  )
}

export default Skills;