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
                <p className="project__info">Tech Used:</p>
                <p className = "project__description">{props.project.description.split(')')[0]+')'}</p>
                <br/>
                <p className="project__info">Description:</p>
                <p className = "project__description">{props.project.description.split(')')[1]}</p>
                <div className = "project__link_wrapper">
                <a href={props.project.liveLink} className = "project__live_link button is-outlined" target="_blank" rel="noreferrer" >Live Demo</a>
                <a className = "project__github button is-outlined" href={props.project.github} target="_blank" rel="noreferrer" >GitHub</a>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Project