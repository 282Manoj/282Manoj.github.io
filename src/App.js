import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Calender from "./components/Clander";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skill/> 
      <Projects />
      <Calender/>
      <br></br>
      <Stats/>
    <br></br>
      <Contact/>
    
    </div>
  );
}

export default App;
