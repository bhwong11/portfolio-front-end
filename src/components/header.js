import React,{useState,useEffect} from 'react';
import '../css/header.css'

function Header(){

    return(
        <div id = "header" className="hero is-white has-text-centered" >
            <div>
                <div className="header__wrapper" >
                    <img className="header__headshot" src="https://i.imgur.com/SPcVD7J.jpg" alt="alt text"/>
                </div>
                <div className="header__name animate__animated animate__pulse">Bryant Wong</div>
                <div className="header__title">Web Developer, Front-End and Back-End</div>
            </div>
        </div>

    )
}

export default Header