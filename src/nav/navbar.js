import React, { useState,useEffect } from "react";

import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { NavLink } from "react-router-dom";
import UserModel from "../models/User";
import { HashLink } from 'react-router-hash-link';

function Navbar(props) {
  const [user, setUser] = useRecoilState(userState);
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
          }).catch((err)=>{
            console.log(`error occured ${err}`)
          })
      }else{
          console.log("no token")
      }
  },[])

  return (
    <header>
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          
          <div className="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></div></div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
          <HashLink className="navbar-item" exact to='/#about'>
            about
          </HashLink>
          <HashLink className="navbar-item" exact to='/#skills'>
            skills
          </HashLink>
          <HashLink className="navbar-item" exact to='/#projects'>
            projects
          </HashLink>
          <HashLink className="navbar-item" exact to='/#resume'>
            resume
          </HashLink>
            {user && (
              <>
                <NavLink className="navbar-item" exact to='/projects/new'>
                  new project
                </NavLink>
                <NavLink className="navbar-item" exact to='/projects'>
                  Projects
                </NavLink>
                <button onClick={logout}>Logout</button>
              </>
            )}
            <div className="navbar-item"><HashLink className="button is-primary is-outlined is-rounded" href="/contact" exact to='/#footer'>
            contact
          </HashLink></div>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
