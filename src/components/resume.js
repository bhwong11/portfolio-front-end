import React,{useState,useEffect} from 'react';
import '../css/resume.css'

function Resume(){

    return(
        <div id = "resume" className="hero-body">
            <h3 className="resume__title" >Want To Work Togther?</h3>
            <a className="resume_link button is-outlined" href="/bryant_wong_resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
        </div>
    )
}

export default Resume