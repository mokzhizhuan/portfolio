import React from 'react';
import './intro.css';
import bg from '../../assets/113570961_p0_master1200.jpg';

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
            Software Engineer at Singapore , Strong skills in Java , Python , React , VueJS ,<br/>
            Thyemleaf with ability to implement projects fast through professional expeirence<br/>
            and building 10+ projects.
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