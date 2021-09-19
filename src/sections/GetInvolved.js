import React from 'react';
import "../styles/GetInvolved.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function GetInvolved() {

    return (
        <div className="getinv">
            <div className="getinv-bg">
                <h1 className="getinv-title">Get Involved</h1>
                <Row className="inv-links row">
                    <Col xs={12} md={4} className="link n hvr-hang" >
                        <h3 className="link-text" onClick={event =>  {window.open('https://www.google.com/', "_blank")}}>MENTOR</h3>
                    </Col>
                    <Col xs={12} md={4} className="link j hvr-hang">
                        <h3 className="link-text" onClick={event =>  {window.open('https://www.google.com/', "_blank")}}>PARTICIPANT</h3>
                    </Col>
                    <Col xs={12} md={4} className="link u hvr-hang">
                        <h3 className="link-text" onClick={event =>  {window.open('https://www.google.com/', "_blank")}}>JUDGE</h3>
                    </Col>
                </Row>
            </div>
            <div className="getinv-bbg"></div>
        </div>
    )

}