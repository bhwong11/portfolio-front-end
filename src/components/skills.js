import React,{useState,useEffect} from 'react';
import TechIcon from './techIcons'
import "../css/skills.css"

function Skills(){

    return(
        <div id = "skills" className="hero-body">
            <div className = "skills__title">Skills</div>
            <div class = "skills__container">
            <TechIcon title="HTML" image="image"/>
            <TechIcon title="CSS" image="image"/>
            <TechIcon title="JavaScript" image="image"/>
            <TechIcon title="Python" image="image"/>
            <TechIcon title="SQL" image="image"/>
            <TechIcon title="Mongo" image="image"/>
            <TechIcon title="JSON" image="image"/>
            <TechIcon title="DTL" image="image"/>
            <TechIcon title="EJS" image="image"/>
            <TechIcon title="MongoDB" image="image"/>
            <TechIcon title="postgreSQL" image="image"/>
            <TechIcon title="React" image="image"/>
            <TechIcon title="Express" image="image"/>
            <TechIcon title="Django" image="image"/>
            <TechIcon title="Nodejs" image="image"/>
            <TechIcon title="JQuery" image="image"/>
            <TechIcon title="Bootstrap" image="image"/>
            <TechIcon title="Sematic UI" image="image"/>
            <TechIcon title="Bulma" image="image"/>
            </div>
        </div>
    )
}

export default Skills