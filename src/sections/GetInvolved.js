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
                        <a href="https://form.typeform.com/to/Y2YxnwJq" className="link-text" target="_blank">MENTOR</a>
                    </Col>
                    <Col xs={12} md={4} className="link j hvr-hang">
                        <a href="https://form.typeform.com/to/LE89laZh" className="link-text" target="_blank">PARTICIPANT</a>
                    </Col>
                    <Col xs={12} md={4} className="link u hvr-hang">
                        <a href="https://form.typeform.com/to/MFiSqPfq" className="link-text" target="_blank">JUDGE</a>
                    </Col>
                </Row>
            </div>
            <div className="getinv-bbg"></div>
        </div>
    )

}