import React,{useState,useEffect} from 'react';
import MailModel from '../models/mail'

function Contact(){

    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [success, setSuccess] = useState("");
    const [error,setError] = useState("")
  
    function handleSubmit(event) {
      setError("")
      setSuccess("")
      event.preventDefault();
      const formData = {subject,email,content};
      MailModel.send(formData).then(json=>{
        if(json.status === 400 || json.status===500){
          setError(json.message)
        }
  
        if(json.status===200){
            setSuccess(json.message)
        }
        console.log(json)
      })
    }
  
    return (
      <div id="contact">
          {error?<div>{error}</div>:<></>}
          {success?<div>{success}</div>:<></>}
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label className='label' htmlFor='subject'>
              subject
            </label>
            <input
              className='input'
              type='text'
              name='subject'
              placeholder='Subject'
              onChange={e => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className='field'>
            <label className='label' htmlFor='email'>
              email
            </label>
            <input
              className='input'
              type='email'
              name='email'
              placeholder='Email'
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='field'>
            <label className='label' htmlFor='content'>
              content
            </label>
            <input
              className='input'
              type='text'
              name='content'
              placeholder='content'
              required
              onChange={e => setContent(e.target.value)}
              value={content}
            />
          </div>              
  
          <input className='button is-link' type='submit' value='Send Email' />
        </form>
      </div>
    );
}

export default Contact