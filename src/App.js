import NavBar from "./componments/navbar/NavBar.js";
import Intro from "./componments/intro/intro.js";
import Skills from "./componments/skills/skills.js";
import Projects from "./componments/Projects/projects.js";
import Education from "./componments/Education/education.js";
import Work from "./componments/WorkExperience/workexperience.js";
import Resume from "./componments/Resume/resume.js";
import "./style.css";
import Footer from "./componments/Footer/footer.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Education/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
