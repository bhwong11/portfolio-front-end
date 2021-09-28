import React, { useEffect } from "react";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";
import { userState } from "../recoil/atoms";
import { useRecoilValue,useRecoilState } from "recoil";
import { logginState } from "../recoil/selectors";

import UserModel from '../models/User'

import Home from "../pages/Home";
import Login from "../pages/Login";
import NewProject from "../pages/NewProject";
import Projects from "../pages/Projects";
import UpdateProject from "../pages/UpdateProject";
import DeleteProject from "../pages/DeleteProject";


function Routes(props) {

//    const [user, setUser] = useRecoilState(userState);
//
//    useEffect(function(){
//        if(localStorage.getItem("uid")){
//            console.log(localStorage.uid)
//            UserModel.show().then(json=>{
//                console.log(json)
//                setUser(json.data)
//                console.log('USER',user)
//                console.log(isLoggin)
//            })
//        }else{
//            console.log("no token")
//        }
//    },[])

    let isLoggin = useRecoilValue(logginState);
    console.log('LOGGED IN',isLoggin)

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      {/*<Route exact path='/projects/new' component={NewProject} />
        <Route path='/projects/:id/update' component={UpdateProject} />
        <Route path='/projects/:id/delete' component={DeleteProject} />*/}
      {isLoggin ? (
        <Switch>
          <Route exact path='/projects/new' component={NewProject} />
          <Route exact path='/projects' component={Projects} />
          <Route path='/projects/:id/update' component={UpdateProject} />
          <Route path='/projects/:id/delete' component={DeleteProject} />
        </Switch>
      ) : (
        <Redirect to='/' />
      )}
    </Switch>
  );
}

export default Routes;