import React, { useEffect, useState } from "react";
import ProjectModel from "../models/project";

import Projects from '../components/projects';
import Header from '../components/header';
import About from '../components/about';
import Skills from '../components/skills';
import Resume from '../components/resume';
import Contact from '../components/contact';
import Footer from '../components/footer';


function Home(props) {

  const [projects,setProjects] = useState(null)

  useEffect(function(){
    ProjectModel.all().then((json)=>{
        setProjects(json.projects)
    })
  },[])

  return (
    <>
    {projects ? (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Projects projects ={projects} />
    <Resume/>
    <Contact/>
    <Footer/>
    </>
    ):(
      <div>Loading...</div>
    )}
    </>
    );
}

export default Home;