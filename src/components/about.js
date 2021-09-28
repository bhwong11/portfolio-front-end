import React,{useState,useEffect} from 'react';
import '../css/about.css'

function About(){

    return(
        <div id = "about">
            <div class="about__description">
                <div>About</div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nulla assumenda totam, atque quod molestias officia doloremque cum natus, labore quidem! Maxime maiores quos vel ratione, totam debitis. Suscipit, est.
            </div>
            <div class="about__image_container">
                <img class="about__image" src="https://i.imgur.com/rNFnofu.png" alt="headshot"/>
            </div>
        </div>

    )
}

export default About