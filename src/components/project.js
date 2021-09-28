import React,{useState,useEffect} from 'react';
import '../css/project.css'

function Project(props){

    return(
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={props.project.title} alt={props.project.title}/>
            </div>
            <div class="flip-card-back">
                <h3>{props.project.title}</h3>
                <p>{props.project.image}</p>
                <p>{props.project.description}</p>
                <p>{props.project.liveLink}</p>
                <p>{props.project.github}</p>
            </div>
        </div>
        </div>
    )
}

export default Project