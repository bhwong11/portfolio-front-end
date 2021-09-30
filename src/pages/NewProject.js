import React, { useState } from "react";
import ProjectModel from '../models/project'


function NewProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState("");
  const [error,setError] = useState("")

  function handleSubmit(event) {
    setError("")
    event.preventDefault();
    const formData = {title,description,liveLink,github,image};
    ProjectModel.create(formData).then(json=>{
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
    <div className='form-container crud_page'>
        {error?<div>{error}</div>:<></>}
      <h2>New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label' htmlFor='title'>
            Title
          </label>
          <input
            className='input'
            type='text'
            name='title'
            placeholder='project title'
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
            placeholder='project description'
            onChange={e => setDescription(e.target.value)}
          >
          {description}
          </textarea>
        </div>
        <div className='field'>
          <label className='label' htmlFor='liveLink'>
            Live Link
          </label>
          <input
            className='textarea'
            type='text'
            name='liveLink'
            placeholder='project liveLink'
            onChange={e => setLiveLink(e.target.value)}
            value={liveLink}
          />
        </div>
        <div className='field'>
          <label className='label' htmlFor='github'>
            Github link
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
        

        <input className='button is-link' type='submit' value='Create' />
      </form>
    </div>
  );
}

export default NewProject;