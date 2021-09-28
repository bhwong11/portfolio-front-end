import React,{useState,useEffect} from 'react';
import TechIcon from './techIcons'
import "../css/skills.css"

function Skills(){

    return(
        <div id = "skills">
            <div>Skills</div>
            <div class = "skills__container">
            <TechIcon title="Node.js" image="image"/>
            <TechIcon title="Node.js" image="image"/>
            <TechIcon title="Node.js" image="image"/>
            <TechIcon title="Node.js" image="image"/>
            </div>
        </div>
    )
}

export default Skills