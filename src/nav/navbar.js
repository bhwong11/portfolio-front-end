import React, { useState,useEffect } from "react";

import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { NavLink } from "react-router-dom";
import UserModel from "../models/User";
import { HashLink } from 'react-router-hash-link';

function Navbar(props) {
  const [user, setUser] = useRecoilState(userState);
  function login() {}
  function logout() {
    setUser(null);
    localStorage.clear()
    //can use localStorage.removeItme("uid")
  }


  //on mount check if local storage uid exist
  //if so fetch user data
  useEffect(function(){
      if(localStorage.getItem("uid")){
          console.log(localStorage.uid)
          UserModel.show().then(json=>{
              console.log(json)
              setUser(json.data)
          })
      }else{
          console.log("no token")
      }
  },[])

  return (
    <header>
      <HashLink exact to='/'>
        Home
      </HashLink>
      <HashLink exact to='/#about'>
        about
      </HashLink>
      <HashLink exact to='/#skills'>
        skills
      </HashLink>
      <HashLink exact to='/#projects'>
        projects
      </HashLink>
      <HashLink exact to='/#resume'>
        resume
      </HashLink>
      <HashLink exact to='/#contact'>
        contact
      </HashLink>
      <nav className='top-navigation__right'>
        {user ? (
          <>
            <NavLink exact to='/projects/new'>
              new project
            </NavLink>
            <NavLink exact to='/projects'>
              Projects
            </NavLink>

            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
