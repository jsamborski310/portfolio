import React from "react";
import Toolkit from "./Toolkit";
import About from "./About"
import PersonalProjects from './PersonalProjects'
import '../css/app.css'
import Contact from "./Contact";


function App() {
  return (
    <div>
      <About/>
      <Toolkit/>
      <PersonalProjects/>
      <Contact/>
    </div>
  );
}

export default App;
