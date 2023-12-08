import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Programming language used: <br/></span>
        <span className="skillTitleFront">FrontEnd Framework: <br/></span>
        <div className="skillBarsFronts">
        <div className="skillBarsFront">Thymeleaf</div>
        <div className="skillBarsFront">HTML</div>
        </div>
        <span className="skillTitleBack">BackEnd Framework: <br/></span>
        <div className="skillBarsBacks">
        <div className="skillBarsBack"></div>
        </div>
    </section>
  )
}

export default Skills;