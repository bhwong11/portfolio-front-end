import React,{useState,useEffect} from 'react';
import '../css/project.css'

function Project(props){

    return(
        <div id="project" className="hero-body">
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={props.project.image} alt={props.project.title}/>
                <div className = "project__card_title">
                    {props.project.title}
                </div>
            </div>
            <div class="flip-card-back">
                <h3 className = "project__title">{props.project.title}</h3>
                <p className = "project__description">{props.project.description}</p>
                <div className = "project__link_wrapper">
                <div className = "project__live_link"><a href={props.project.liveLink} target="_blank" >Live Demo</a></div>
                <div className = "project__github"><a href={props.project.github} target="_blank" >GitHub</a></div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Project