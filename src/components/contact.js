import React,{useState,useEffect} from 'react';
import MailModel from '../models/mail'
import '../css/contact.css'

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
            setSuccess('Successfully Sent!')
        }
        console.log(json)
      })
    }
  
    return (
      <div id="contact" className="hero-body">
        <h3 className="contact__title">Contact</h3>
        <hr/>
          {error?<div>{error}</div>:<></>}
          {success?<div>{success}</div>:<></>}
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
            <textarea
              className='textarea contact__message_content'
              type='text'
              name='content'
              placeholder='message content'
              required
              onChange={e => setContent(e.target.value)}
              value={content}
            >
            </textarea>
          </div>              
  
          <input className='button is-outlined' type='submit' value='Send Message' />
        </form>
      </div>
    );
}

export default Contact