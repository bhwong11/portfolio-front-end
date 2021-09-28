import React, { useEffect, useState } from "react";
import Projects from '../components/projects';
import Header from '../components/header';
import About from '../components/about';
import Skills from '../components/skills';
import Resume from '../components/resume';
import Contact from '../components/contact';


function Home(props) {

  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Resume/>
    <Contact/>
    </>
  );
}

export default Home;