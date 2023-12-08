import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section className="Projects">
        <div id="projects">
            <h1 className="projectpagetitle">My Projects</h1>
            <a className="projectpagesubtitle" href="https://github.com/mokzhizhuan/Shopmereferences">
            Ecommerence Project(Spring boot)
            </a>
            <a className="projectpagesubtitle" href="https://github.com/mokzhizhuan/clinic-eps">
            Clinic-eps
            </a>
            <a className="projectpagesubtitle" href="https://github.com/natashahjy/ids-system">
            IDS System
            </a>
            <a className="projectpagesubtitle" href="https://github.com/mokzhizhuan/chatgpt-main">
            AI ChatGPT
            </a>
            <a className="projectpagesubtitle" href="https://github.com/mokzhizhuan/CSCI356">
            FPS Game
            </a>
        </div>
    </section>
  )
}

export default Projects