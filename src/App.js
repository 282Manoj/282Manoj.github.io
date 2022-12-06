import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Calender from "./components/Clander";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Skill/>
      <Projects />
      <Calender/>
      <br></br>
      <Stats/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
