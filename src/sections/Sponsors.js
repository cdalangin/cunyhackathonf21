import React from 'react';
import "../styles/Sponsors.css"
import bloomberg from "../assets/sponsors/bloomberg.png"
import cunystartups from "../assets/sponsors/cunystartups.png"
import mlh from "../assets/sponsors/mlh.png"
import mufg from "../assets/sponsors/mufg.png"
import astro2 from "../assets/astronaut2.png"

export default function Sponsors() {

    return (
        <div className="spon-bg">
            {/* <img src={astro2} alt="astronaut on rocket" className="spon-astro2" /> */}
            <h1 className="spon-title">Sponsors and Partners</h1>
            <div className="spon-logos">
                <img src={bloomberg} alt="bloomberg" className="spon-logo" />
                <img src={mufg} alt="mufg" className="spon-logo" />
                <img src={cunystartups} alt="cunystartups" className="spon-logo" />
                <img src={mlh} alt="mlh" className="spon-logo" />
                
            </div>
            
        </div>
    )

}