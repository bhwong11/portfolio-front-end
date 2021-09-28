import React,{useState,useEffect} from 'react';
import "../css/techIcon.css"

function TechIcon(props){

    return(
        <div class = "tech-icon">
            Tech Icon
            <image src = {props.image} alt={props.title}/>
        </div>

    )
}

export default TechIcon