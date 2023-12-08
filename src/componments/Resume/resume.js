import React from 'react';
import './resume.css';
import resume from "../../assets/MokZhiZhuan(Software Developer).pdf"

const Resume = () => {
  return (
    <section className="Resume">
        <div id="Resume">
        <a href={resume} download="MyResume" target='_blank' rel="noreferrer">
          <h2 className="resume">My Resume</h2> 
        </a>
        </div>
        </section>
  )
}

export default Resume