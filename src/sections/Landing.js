import React from 'react';
import "../styles/Landing.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import stars from "../assets/stars.svg"

export default function Landing() {

    return (
        <div className="land-bg">
            <Row className="title-stars">
                <Col xs={12} md={3}>
                    <img src={stars} alt="logo placeholder" className="land-logo" />
                </Col>
                <Col xs={12} md={9}>
                    <h1 className="title">CUNY</h1>
                    <h2 className="title hackathon">HACKATHON</h2>
                    <h3 className="title hackathon">Fall 2021</h3>
                </Col>
            </Row>
            <div>
            <h4 className="land-dates">November 12th - 14th, 2021</h4>
            </div>
            
        </div>
    )

}