import React from 'react';
import "../styles/TBA.css"

export default function TBA() {

    return (
        <div className="tba-bg">
            <h1 className="tba-title">More Information</h1>
            <h2 className="tba-subtitle">Coming Soon</h2>
            <h3 className="tba-follow" onClick={event =>  {window.open('https://www.instagram.com/cuny.hackathon/', "_blank")}}>FOLLOW US ON INSTAGRAM</h3>
        </div>
    )

}