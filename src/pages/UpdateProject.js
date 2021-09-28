import React, { useEffect, useState } from "react";
import ProjectModel from '../models/project'


function UpdateProject(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState("");
  const [error,setError] = useState("")
  useEffect(function(){
    ProjectModel.show(props.match.params.id).then(json=>{
        console.log('JSON DATA',json.project.description)
        setTitle(json.project.title)
        setDescription(json.project.description)
        setLiveLink(json.project.liveLink)
        setGithub(json.project.github)
        setImage(json.project.image)
    })
  },[])

  function handleSubmit(event) {
    setError("")
    event.preventDefault();
    const formData = {title,description,liveLink,github,image};
    ProjectModel.update(props.match.params.id,formData).then(json=>{
      if(json.status === 400 || json.status===500){
        setError(json.message)
      }

      if(json.status===200){
        props.history.push('/projects')
      }
      console.log(json)
    })
  }

  return (
    <div className='form-container'>
        {error?<div>{error}</div>:<></>}
      <h2>Update Project</h2>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label' htmlFor='title'>
            Title
          </label>
          <input
            className='input'
            type='text'
            name='title'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className='field'>
          <label className='label' htmlFor='description'>
          Description
          </label>
          <textarea
            className='input'
            name='description'
            onChange={e => setDescription(e.target.value)}
            value = {description}
          >
          {description}
          </textarea>
        </div>
        <div className='field'>
          <label className='label' htmlFor='liveLink'>
            LiveLink
          </label>
          <input
            className='input'
            type='text'
            name='liveLink'
            placeholder='project liveLink'
            onChange={e => setLiveLink(e.target.value)}
            value={liveLink}
          />
        </div>
        <div className='field'>
          <label className='label' htmlFor='github'>
            Github
          </label>
          <input
            className='input'
            type='text'
            name='github'
            placeholder='project github'
            onChange={e => setGithub(e.target.value)}
            value={github}
          />
        </div>
        <div className='field'>
          <label className='label' htmlFor='image'>
            Image
          </label>
          <input
            className='input'
            type='text'
            name='image'
            placeholder='project image'
            onChange={e => setImage(e.target.value)}
            value={image}
          />
        </div>
        

        <input className='button is-link' type='submit' value='Update' />
      </form>
    </div>
  );
}

export default UpdateProject;