import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import useWindowsize from "./Hook/HandW.hook";
import Calender from "./components/Calender";
import Stats from "./components/Stats";

function App() {
  const [height,width]=useWindowsize();
  console.log(height,width);
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
