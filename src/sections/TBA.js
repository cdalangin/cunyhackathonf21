import React from 'react';
import "../styles/TBA.css"
import astro2 from "../assets/astronaut2.png"

export default function TBA() {

    return (
        <div className="tba-bg">
            <img src={astro2} alt="astronaut on rocket" className="hvr-hang tba-astro2 astro2" />
            <h1 className="tba-title">More Information</h1>
            <h2 className="tba-subtitle">Coming Soon</h2>
            <h3 className="tba-follow" onClick={event =>  {window.open('https://www.instagram.com/cuny.hackathon/', "_blank")}}>FOLLOW US ON INSTAGRAM</h3>
        </div>
    )

}