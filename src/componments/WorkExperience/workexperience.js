import React from 'react';
import './workexperience.css';

const Work = () => {
  return (
    <section className="Work">
      <div id="workexperience">

        <h1 className="workpagetitle">
          Work Experience
        </h1>

        {/* =====================================================
            Winsys Technology
        ===================================================== */}
        <div className="workpagecompany">
          Winsys Technology PTE LTD

          <div className="workpagesubtitle">
            <h2>
              Software Application Developer
            </h2>

            <p>
              Feb 2024 - Present
            </p>

            <p>
              Develop automation and monitoring systems using
              CODESYS, Python, React, FastAPI/Django, and Tkinter.
            </p>

            <p>
              Work with PLC communication, REST APIs, MQTT,
              databases, alarm handling, and historical data systems.
            </p>

            <p>
              Develop Python-based GUI and computer vision
              applications, including multi-camera systems.
            </p>

            <p>
              Handle testing, bug tracking, documentation,
              and project coordination using Jira, Notion, and Git.
            </p>
          </div>
        </div>


        {/* =====================================================
            NCS - ServiceNow
        ===================================================== */}
        <div className="workpagecompany">
          NCS PTE LTD

          <div className="workpagesubtitle">
            <h2>
              ServiceNow Consultant
            </h2>

            <p>
              Aug 2022 - Dec 2023
            </p>

            <p>
              Supported ServiceNow development, testing,
              troubleshooting, incident handling, and system upgrades.
            </p>

            <p>
              Worked with automated testing, system configuration,
              documentation, and Agile development activities.
            </p>
          </div>
        </div>


        {/* =====================================================
            NCS - PeopleSoft
        ===================================================== */}
        <div className="workpagecompany">
          NCS PTE LTD

          <div className="workpagesubtitle">
            <h2>
              PeopleSoft Consultant
            </h2>

            <p>
              Jan 2022 - Jul 2022
            </p>

            <p>
              Modified and maintained PeopleSoft applications
              and supported new system features and reports.
            </p>

            <p>
              Worked with development, testing, troubleshooting,
              and system documentation processes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;