import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import About from "./components/About"
import Toolkit from "./components/Toolkit";
import PersonalProjects from './components/PersonalProjects'
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar"
import './App.css'

function App() {
  return (
    <>

      <Router>
        <Sidebar/>
          <Routes>
              <Route path="/#home" component={<Header/>} />
              <Route path="/#about" component={<About/>} />
              <Route path="/#toolkit" component={<Toolkit/>} />
              <Route path="/#personalProjects" component={<PersonalProjects/>} />
              <Route path="/#contact" component={<Contact/>} /> 
          </Routes>
      </Router>

      <Header/>
      <About/>
      <Toolkit/>
      <PersonalProjects/>
      <Contact/>
    </>
  );
}

export default App;
