import React, { useState } from "react";
import AuthModel from '../models/auth';
import UserModel from "../models/User"

import {userState} from "../recoil/atoms";
import {useSetRecoilState,useRecoilValue} from "recoil";

import { logginState } from "../recoil/selectors";


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  const setUser = useSetRecoilState(userState);

  function handleSubmit(event) {
    setError("")
    event.preventDefault();
    const credientials = {email,password};
    AuthModel.login(credientials).then(json=>{
      if(json.status === 400 || json.status===500){
        setError(json.message)
      }

      if(json.status===200){
        localStorage.setItem("uid", json.token);
        UserModel.show().then(json=>{
          console.log(json)
          setUser(json.data)
          console.log('IS LOGIN',isLoggin)
          props.history.push('/projects')
        })
      }
      console.log(json)
    })
  }

  let isLoggin = useRecoilValue(logginState);

  return (
    <div className='form-container crud_page'>
      <h2>Login</h2>
      {error? <div>{error}</div>:<></>}
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label' htmlFor='email'>
            Email
          </label>
          <input
            className='input'
            type='text'
            name='email'
            placeholder='email@email.com'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='field'>
          <label className='label' htmlFor='password'>
            Password
          </label>
          <input
            className='input'
            type='password'
            name='password'
            placeholder='********'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <input className='button is-link' type='submit' value='Login' />
      </form>
      
    </div>
  );
}

export default Login;
