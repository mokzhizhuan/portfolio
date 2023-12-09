import NavBar from "./componments/navbar/NavBar.js";
import Intro from "./componments/intro/intro.js";
import Skills from "./componments/skills/skills.js";
import Projects from "./componments/Projects/projects.js";
import Education from "./componments/Education/education.js";
import Work from "./componments/WorkExperience/workexperience.js";
import "./style.css";
import Footer from "./componments/Footer/footer.js";
import Contact from "./componments/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Education/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
