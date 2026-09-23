import React from 'react';
import './intro.css';
import bg from '../../assets/148350266_p0_master1200.jpg';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">

        <span className="welcome">
          Welcome to <br />
          my Portfolio<br />
        </span>

        <span className="Hello">
          Hello&nbsp;,&nbsp;
        </span>

        <span className="Intro">
          I am&nbsp;
          <span className="IntroName">
            Mok <br />
            Zhi Zhuan
          </span>

          <br />

          Software Application Developer
        </span>

        <p className="intropara">
          Software Application Developer with experience in automation, Python,
          web development, backend systems, and computer vision.
          <br />
          Skilled in CODESYS, React, FastAPI/Django, Tkinter, MQTT, databases,
          and system integration.
        </p>

        <p className="Mainlanguage">
          Backend & APIs: Python, FastAPI, Django, REST API, MQTT
          <br />
          Frontend & Automation: React, Tkinter, CODESYS HMI / WebVisu
        </p>

      </div>

      <img
        src={bg}
        alt="Profile"
        className="bg"
      />
    </section>
  );
};

export default Intro;