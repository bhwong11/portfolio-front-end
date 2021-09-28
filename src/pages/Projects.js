import React,{useState,useEffect} from 'react';
import ProjectModel from '../models/project'
import { Link } from 'react-router-dom';

function Projects(){

    const [projects,setProjects] = useState(null);

    useEffect(function(){
        ProjectModel.all().then((json)=>{
            setProjects(json.projects)
        })
    },[])

    const generateProjects = ()=>{
        return projects.reverse().map(project=>{
            return (<div>
            <h3>{project.title}</h3>
            <p>{project.image}</p>
            <Link to={`/projects/${project._id}/update`} >update Project</Link>
            <Link to={`/projects/${project._id}/delete`} >delete Project</Link>
            <p>{project._id}</p>
            <p>{project.description}</p>
            <p>{project.liveLink}</p>
            <p>{project.github}</p>
        </div>)
        })
    }

    return(
        <div>
            {
            projects? <div>
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