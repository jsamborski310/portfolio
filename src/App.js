import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

      <HashRouter>
        <Sidebar/>
          <Routes>
              <Route exact path="/" component={Header} />
              <Route exact path="/about" component={About} />
              <Route exact path="/toolkit" component={Toolkit} />
              <Route exact path="/personalProjects" component={PersonalProjects} />
              <Route exact path="/contact" component={Contact} /> 
          </Routes>
      </HashRouter>

      <Header/>
      <About/>
      <Toolkit/>
      <PersonalProjects/>
      <Contact/>
    </>
  );
}

export default App;
