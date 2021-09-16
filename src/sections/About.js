import React from 'react';
import "../styles/About.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function About() {

    return (
        <div className="about-bg">
            <Row className="about-row">
            <Col xs={12} md={6} className="text-col">  
                <p className="about-text"><b>CUNY Hackathon Fall 2021</b> is the first virtually held hackathon for
                    the City University of New York students, but we still welcome
                    students from all over the world. 
                    <br/><br/>
                    With the goal of bringing together
                    students in software development, design, marketing and entrepreneurship
                    to build solutions for problems unique to the New York City community,
                    this 24-hour event will see students create projects and learn from
                    workshops and activities.</p>
            </Col>
            <Col xs={12} md={6} className="astronaut">  
                <div ></div>
            </Col>
            </Row>
        </div>

    )

}