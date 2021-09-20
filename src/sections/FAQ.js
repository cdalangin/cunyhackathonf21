import React from 'react';
import "../styles/FAQ.css"
import ReactHtmlParser from 'react-html-parser'; 
import {questions} from "../assets/Questions"
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ufo from "../assets/ufo.png"

export default function FAQ() {

    return (
        <div className="faq-bg">
            <div>
                <img src={ufo} alt="ufo" className="hvr-hang faq-ufo" />
            </div>
            <div className="faq-box">
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <hr/>
                
                <Row className="faqs">
                    {
                    questions.map(question => {
                        return (
                            <Col xs={12} md={6}>                                    
                                <Dropdown className="faq-dd">
                                    <Dropdown.Toggle  id="faq-dropdown">
                                        <h3 className="faq-ques">{question.ques}</h3>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="faq-card">
                                    <p className="faq-ans">{ReactHtmlParser(question.ans)}</p>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            
                        )
                    })
                    }
                </Row>
            </div>
            
        </div>
    )

}