import React,{useState,useEffect} from 'react';
import ProjectModel from '../models/project'

function Project(props){

    return(
        <div>
            <h3>{props.project.title}</h3>
            <p>{props.project.image}</p>
            <p>{props.project.description}</p>
            <p>{props.project.liveLink}</p>
            <p>{props.project.github}</p>
        </div>
    )
}

export default Project