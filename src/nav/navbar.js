import React, { useState,useEffect } from "react";

import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { NavLink } from "react-router-dom";
import UserModel from "../models/User";

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
      <NavLink exact to='/'>
        Home
      </NavLink>
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
