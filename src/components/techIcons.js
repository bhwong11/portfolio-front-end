import React,{useState,useEffect} from 'react';
import "../css/techIcon.css"

function TechIcon(props){

    return(
        <div class = "tech-icon">
            <image src = {props.image} alt={props.title}/>
            <div className = "tech-icon__wrapper">{props.title}</div>
        </div>

    )
}

export default TechIcon