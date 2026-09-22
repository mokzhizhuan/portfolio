import React from 'react';
import './skills.css';

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt
} from 'react-icons/fa';

import {
  SiDjango,
  SiFastapi,
  SiSqlite,
  SiOpencv,
  SiMqtt,
  SiJira,
  SiNotion
} from 'react-icons/si';

import {
  MdMemory,
  MdStorage
} from 'react-icons/md';

import {
  TbApi,
  TbDeviceDesktopCode
} from 'react-icons/tb';

import {
  GiGears
} from 'react-icons/gi';

import download from '../../assets/cloud-download_60538.png';
import resume from '../../assets/MokZhiZhuan(SoftwareDeveloper).pdf';

const Skills = () => {
  return (
    <section id="skills">

      <span className="MyProfile">
        My Profile:
      </span>

      <br />

      <div className="Profile">
        <div className="myprofileinfo">
          <div className="info">

            Full Name : Mok Zhi Zhuan <br />

            Qualification : UOW Bachelor Degree <br />
            of Computer Science <br />

            Location : Singapore <br />

            Language : English <br />

            <a
              href={resume}
              download="MokZhiZhuan_Resume"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="resumes">
                My Resume:
              </h2>

              <img
                src={download}
                alt="Download Resume"
                className="downloadImg"
              />

            </a>

          </div>
        </div>
      </div>


      {/* =====================================================
          Programming Languages
      ===================================================== */}

      <span className="skillTitle">
        Programming Languages:
      </span>

      <div className="skillBar">

        <FaPython className="skillBarImg" />

        <div className="skillBarText">
          <h2>Python</h2>
          <p>
            Backend development, GUI applications,
            automation and computer vision
          </p>
        </div>

      </div>


      <div className="skillBar">

        <MdMemory className="skillBarImg" />

        <div className="skillBarText">
          <h2>Structured Text</h2>
          <p>
            CODESYS PLC programming and industrial automation
          </p>
        </div>

      </div>


      <div className="skillBar">

        <FaJs className="skillBarImg" />

        <div className="skillBarText">
          <h2>JavaScript</h2>
          <p>
            Web application and frontend development
          </p>
        </div>

      </div>


      {/* =====================================================
          Frontend & GUI
      ===================================================== */}

      <span className="skillTitle">
        Frontend & GUI:
      </span>

      <div className="skillBar">

        <FaReact className="skillBarImg" />

        <div className="skillBarText">
          <h2>React</h2>
          <p>
            Frontend development for dashboards and web applications
          </p>
        </div>

      </div>


      <div className="skillBar">

        <TbDeviceDesktopCode className="skillBarImg" />

        <div className="skillBarText">
          <h2>Tkinter</h2>
          <p>
            Python desktop GUI development
          </p>
        </div>

      </div>


      <div className="skillBar">

        <GiGears className="skillBarImg" />

        <div className="skillBarText">
          <h2>CODESYS HMI / WebVisu</h2>
          <p>
            Industrial monitoring and control interfaces
          </p>
        </div>

      </div>


      <div className="skillBar">

        <FaHtml5 className="skillBarImg" />

        <div className="skillBarText">
          <h2>HTML</h2>
          <p>
            Web interface structure
          </p>
        </div>

      </div>


      <div className="skillBar">

        <FaCss3Alt className="skillBarImg" />

        <div className="skillBarText">
          <h2>CSS</h2>
          <p>
            Responsive layouts and interface styling
          </p>
        </div>

      </div>


      {/* =====================================================
          Backend & APIs
      ===================================================== */}

      <span className="skillTitle">
        Backend & APIs:
      </span>

      <div className="skillBar">

        <SiFastapi className="skillBarImg" />

        <div className="skillBarText">
          <h2>FastAPI</h2>
          <p>
            Python REST API development
          </p>
        </div>

      </div>


      <div className="skillBar">

        <SiDjango className="skillBarImg" />

        <div className="skillBarText">
          <h2>Django</h2>
          <p>
            Backend development and database integration
          </p>
        </div>

      </div>


      <div className="skillBar">

        <TbApi className="skillBarImg" />

        <div className="skillBarText">
          <h2>REST API</h2>
          <p>
            Communication between frontend, backend and external systems
          </p>
        </div>

      </div>


      <div className="skillBar">

        <SiMqtt className="skillBarImg" />

        <div className="skillBarText">
          <h2>MQTT</h2>
          <p>
            Real-time messaging and system integration
          </p>
        </div>

      </div>


      {/* =====================================================
          Industrial Automation
      ===================================================== */}

      <span className="skillTitle">
        Industrial Automation:
      </span>

      <div className="skillBar">

        <GiGears className="skillBarImg" />

        <div className="skillBarText">
          <h2>CODESYS / PLC</h2>
          <p>
            Automation logic, monitoring and device control
          </p>
        </div>

      </div>


      <div className="skillBar">

        <MdMemory className="skillBarImg" />

        <div className="skillBarText">
          <h2>Modbus RTU</h2>
          <p>
            Industrial device and I/O communication
          </p>
        </div>

      </div>


      {/* =====================================================
          Computer Vision
      ===================================================== */}

      <span className="skillTitle">
        Computer Vision:
      </span>

      <div className="skillBar">

        <SiOpencv className="skillBarImg" />

        <div className="skillBarText">
          <h2>YOLO / OpenCV</h2>
          <p>
            Object detection, people counting and camera processing
          </p>
        </div>

      </div>


      {/* =====================================================
          Database & Tools
      ===================================================== */}

      <span className="skillTitle">
        Database & Tools:
      </span>

      <div className="skillBar">

        <SiSqlite className="skillBarImg" />

        <div className="skillBarText">
          <h2>SQLite / SQL</h2>
          <p>
            Application data, alarms and historical data storage
          </p>
        </div>

      </div>


      <div className="skillBar">

        <FaGitAlt className="skillBarImg" />

        <div className="skillBarText">
          <h2>Git / GitHub</h2>
          <p>
            Source control and project version management
          </p>
        </div>

      </div>


      <div className="skillBar">

        <SiJira className="skillBarImg" />

        <div className="skillBarText">
          <h2>Jira</h2>
          <p>
            Task tracking, bug tracking and project management
          </p>
        </div>

      </div>


      <div className="skillBar">

        <SiNotion className="skillBarImg" />

        <div className="skillBarText">
          <h2>Notion</h2>
          <p>
            Technical documentation and project planning
          </p>
        </div>

      </div>


      <p className="moreinfo">
        More details are available in my resume.
      </p>

    </section>
  );
};

export default Skills;