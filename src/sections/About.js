import React from 'react';
import "../styles/About.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import spaceship from "../assets/spaceship.svg"
import astronaut from "../assets/astronaut.svg"

export default function About() {

    return (
        <div className="about-bg">
            <Row className="about-row">
            <Col xs={12} md={6} className="text-col">  
                <p className="about-text"><b>CUNY Hackathon</b>, NYC's largest collegiate hackathon with nearly 900 attendees last spring, is now in its 6th iteration this fall, with this being the 2nd time it's virtual and the 3rd time it's student-run. We welcome all CUNY students and recent grads (within a year of graduating) regardless of major, skill level, and background. 
                <br/><br/>
                With the goal of bringing together students in software development, design, marketing and entrepreneurship to build solutions for problems unique to the New York City community, this 36-hour event will see students create projects and learn from workshops and activities.</p>
            </Col>
            <Col xs={12} md={6} className="img-col">  
                <div class="hvr-hang">
                    <img src={spaceship} alt="spaceship" class="spaceship"/>
                </div>
                <div class="hvr-hang">
                    <img src={astronaut} alt="astronaut" class="astronaut"/>
                </div>
            </Col>
            </Row>
        </div>

    )

}