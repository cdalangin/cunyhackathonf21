import React from 'react';
import "../styles/Landing.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from "../assets/logo1.PNG"

export default function Landing() {

    return (
        <div className="land-bg">
            <Row className="title-stars">
                <Col xs={12} md={4} className="logo-div">
                    <img src={logo} alt="logo" className="land-logo hvr-hang" />
                </Col>
                <Col xs={12} md={7} className="title-text">
                <h4 className="land-theme">UNITED WE CODE</h4>
                    <h3 className="title hackathon">Fall 2021</h3>
                    <h1 className="title">CUNY</h1>
                    <h2 className="title hackathon">HACKATHON</h2>
                    
                    <h4 className="land-dates">November 12th - 14th, 2021</h4>
                </Col>
            </Row>
            <div>
            
            </div>
            
        </div>
    )

}