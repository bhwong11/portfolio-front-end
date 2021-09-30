import React, { useEffect, useState } from "react";
import ProjectModel from '../models/project'


function DeleteProject(props) {

    const [error,setError] = useState("")
    const [project,setProject] = useState(null)

    useEffect(function(){
        ProjectModel.show(props.match.params.id)
        .then(json=>{
            setProject(json.project)
        })
    },[])

  function handleSubmit(event) {
    setError("")
    event.preventDefault();
    ProjectModel.destroy(props.match.params.id).then(json=>{
      if(json.status === 400 || json.status===500){
        setError(json.message)
      }

      if(json.status===200){
        props.history.push('/projects')
      }
      console.log(json)
    })
  }

  function handleCancel(){
      props.history.push('/')
  }

  return (
    <div className='form-container crud_page'>
        {error?<div>{error}</div>:<></>}
      <h2>Are you sure you want to delete {project?(project.title):(<span>loading...</span>)}?</h2>
      <button onClick={handleCancel}>Cancel</button>
      <form onSubmit={handleSubmit}>
        <input className='button is-link' type='submit' value='Delete' />
      </form>
    </div>
  );
}

export default DeleteProject;