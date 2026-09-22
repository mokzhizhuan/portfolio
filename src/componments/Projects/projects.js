import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section className="Projects">
      <div id="projects">

        <h1 className="projectpagetitle">
          My Projects
        </h1>

        <div className="projectpagesubtitle">
          <h2>Industrial Analyzer Monitoring System</h2>
          <p>
            CODESYS, MQTT, Modbus RTU, SQLite, HMI
          </p>
          <p>
            Developed a 16-channel industrial analyzer monitoring system
            with real-time data processing, alarm handling, historical
            records, calibration, and local database storage.
          </p>
        </div>

        <div className="projectpagesubtitle">
          <h2>AI People Counting & Multi-Camera System</h2>
          <p>
            Python, YOLO, OpenCV, React, FastAPI/Django
          </p>
          <p>
            Developed a computer vision people-counting system for
            entry, exit, occupancy monitoring, and multi-camera support.
          </p>
        </div>

        <div className="projectpagesubtitle">
          <h2>GreyForm PBU / BIM Robotic Marking System</h2>
          <p>
            Python, IFC/BIM, Tkinter, ROS, FastAPI
          </p>
          <p>
            Developed a Python application to process IFC/BIM geometry
            and generate marking coordinates for robotic workflows.
          </p>
        </div>

        <div className="projectpagesubtitle">
          <h2>Other Projects</h2>

          <a
            href="https://github.com/mokzhizhuan/Shopme-Ecommerence"
            target="_blank"
            rel="noreferrer"
          >
            E-Commerce Project
          </a>

          <br />

          <a
            href="https://github.com/mokzhizhuan/WeatherRestAPI"
            target="_blank"
            rel="noreferrer"
          >
            Weather REST API
          </a>

          <br />

          <a
            href="https://github.com/mokzhizhuan/CSCI356"
            target="_blank"
            rel="noreferrer"
          >
            FPS Game Project
          </a>
          <a
            href="https://github.com/mokzhizhuan"
            target="_blank"
            rel="noreferrer"
          >
            View My GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;