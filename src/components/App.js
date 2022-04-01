import React from "react";
import Toolkit from "./Toolkit";
import Header from "./Header"
import About from "./About"
import PersonalProjects from './PersonalProjects'
import '../css/app.css'
import Contact from "./Contact";


function App() {
  return (
    <>
      <Header/>
      <About/>
      <Toolkit/>
      <PersonalProjects/>
      <Contact/>
    </>
  );
}

export default App;
