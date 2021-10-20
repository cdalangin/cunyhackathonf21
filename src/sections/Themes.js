import React from 'react';
import "../styles/Themes.css"
import entertaining from "../assets/themes/entertaining.png"
import urbanity from "../assets/themes/urbanity.png"
import healthcare from "../assets/themes/healthcare.png"
import budget from "../assets/themes/budget.png"
import education from "../assets/themes/education.png"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Themes() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1200, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 576 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1
        }
      };

    return (
        <div className="themes-bg">
            <h1 className="themes-title">THEMES</h1>
            <Carousel 
            responsive={responsive}
            infinite={true}
            className="theme-carousel">
                <div className="hvr-hang theme-item">
                    <p className="theme-subtitle">Entertainment</p>
                    <img src={entertaining} alt="Entertainment" className="theme-icon" />
                    <p className="theme-para">Games, Art, and Music</p>
                </div>
                <div className="hvr-hang theme-item">
                    <p className="theme-subtitle">Urban Tech (for NYC)</p>
                    <img src={urbanity} alt="Urban Tech" className="theme-icon" />
                    <p className="theme-para">Environmental Sustainability, Socioeconomic Issues, GovTech, Public Health, Transportation, Infrastructure, and Accessibility</p>
                </div>
                <div className="hvr-hang theme-item">
                    <p className="theme-subtitle">Finance</p>
                    <img src={budget} alt="Finance" className="theme-icon" />
                    <p className="theme-para">Personal Finances, Blockchain, and Budgeting</p>
                </div>
                <div className="hvr-hang theme-item">
                    <p className="theme-subtitle">Education</p>
                    <img src={education} alt="Education" className="theme-icon" />
                    <p className="theme-para">Productivity, Online Learning, and College Life</p>
                </div>
                <div className="hvr-hang theme-item">
                    <p className="theme-subtitle">Healthcare</p>
                    <img src={healthcare} alt="Healthcare" className="theme-icon" />
                    <p className="theme-para">Physical Health, Mental Health and Wellness</p>
                </div>
            </Carousel>
        </div>
    )

}