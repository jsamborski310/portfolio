import React from "react";
import Toolkit from "./Toolkit";
import Header from "./Header"
import About from "./About"
import PersonalProjects from './PersonalProjects'
import Sidebar from "./Sidebar"
import '../css/app.css'
import Contact from "./Contact";


function App() {
  return (
    <>
      <Sidebar/>
      <Header/>
      <About/>
      <Toolkit/>
      <PersonalProjects/>
      <Contact/>
    </>
  );
}

export default App;
