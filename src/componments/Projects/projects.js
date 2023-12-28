import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section className="Projects">
        <div id="projects">
            <h1 className="projectpagetitle">My Projects</h1>
            <a className="projectpagesubtitle" href="https://github.com/mokzhizhuan/Shopmereferences"
            target='_blank' rel="noreferrer">
            Ecommerence Project(Spring boot)
            </a>
            <a className="projectpagesubtitle" href="https://github.com/mokzhizhuan/clinic-eps"
            target='_blank' rel="noreferrer">
            Clinic-eps
            </a>
            <a className="projectpagesubtitle" href="https://github.com/natashahjy/ids-system"
            target='_blank' rel="noreferrer">
            IDS System
            </a>
            <a className="projectpagesubtitle" href="https://github.com/mokzhizhuan/chatgpt-main"
            target='_blank' rel="noreferrer">
            AI ChatGPT
            </a>
            <a className="projectpagesubtitle" href="https://github.com/mokzhizhuan/CSCI356"
            target='_blank' rel="noreferrer">
            FPS Game
            </a>
            <a className="projectpagesubtitle" href="https://github.com/mokzhizhuan/clinic-eps-Spring-Boot"
            target='_blank' rel="noreferrer">
            Clinic-eps(Spring Boot Java)
            </a>
        </div>
    </section>
  )
}

export default Projects