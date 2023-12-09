import React from 'react';
import './intro.css';
import bg from '../../assets/Silver.Wolf.600.3967512.jpg';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="welcome">Welcome to <br/> my Portfolio<br/> </span>
            <span className="Hello">Hello&nbsp;,&nbsp;</span>
            <span className="Intro">I am&nbsp;
            <span className="IntroName">Mok <br/>Zhi Zhuan</span>
            <br/>Software Backend Developer</span>
            <p className="intropara">
            Passionate computer science student, seeking to use my existing skills <br/>
            and my eagerness to learn in to design innovative , cost-effective <br/>
            software development solution.
            </p>
            <p className="Mainlanguage">
            Main backend framework language: Spring boot Java <br/>
            FrontEnd : Thymeleaf , HTML , CSS , Javascript or ReactJS/VueJS
            </p>
        </div>
            <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;