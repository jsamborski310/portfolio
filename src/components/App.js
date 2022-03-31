import React from "react";
import Toolkit from "./Toolkit";
import About from "./About"
import PersonalProjects from './PersonalProjects'
import '../css/app.css'


function App() {
  return (
    <div>
      <About/>
      <Toolkit/>
      <PersonalProjects/>
    </div>
  );
}

export default App;
