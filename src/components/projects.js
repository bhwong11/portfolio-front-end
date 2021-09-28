import React,{useState,useEffect} from 'react';
import ProjectModel from '../models/project'
import Project from './project'
import '../css/projects.css'

function Projects(){

    const [projects,setProjects] = useState(null);

    useEffect(function(){
        ProjectModel.all().then((json)=>{
            setProjects(json.projects)
        })
    },[])

    const generateProjects = ()=>{
        return projects.map(project=>{
            return <Project project={project}/>
        })
    }

    return(
        <div id = "projects">
            {
            projects? <div class="projects__container">
                {generateProjects()}
            </div>:
            <div>
                loading projects...
            </div>
        }
        </div>

    )
}

export default Projects