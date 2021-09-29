import React,{useState,useEffect} from 'react';
import { FaGithubSquare,FaLinkedinIn } from "react-icons/fa";
import "../css/footer.css"

function Footer(){

    return(
        <footer id = "footer">
            <a href="https://github.com/bhwong11" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
            <a href="https://www.linkedin.com/in/bryanthwong" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
            <div className="footer__email">Bryanthwong@gmail.com</div>
        </footer>
    )
}

export default Footer