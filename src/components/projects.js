import React,{useState,useEffect} from 'react';
import ProjectModel from '../models/project'

function Projects(){

    const [projects,setProjects] = useState(null);

    useEffect(function(){
        ProjectModel.all().then((json)=>{
            setProjects(json.projects)
        })
    },[])

    const generateProjects = ()=>{
        return projects.map(project=>{
            return <p>{project.title}</p>
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