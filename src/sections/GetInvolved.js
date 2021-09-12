import React from 'react';
import "../styles/GetInvolved.css";

export default function GetInvolved() {

    return (
        <div className="getinv">
            <div className="getinv-bg">
                <h1 className="getinv-title">Get Involved</h1>
                <div className="inv-links row">
                    <div className="link n col-12 col-sm-4" >
                        <h3 className="link-text" onClick={event =>  {window.open('https://www.google.com/', "_blank")}}>MENTOR</h3>
                    </div>
                    <div className="link j col-12 col-sm-4">
                        <h3 className="link-text" onClick={event =>  {window.open('https://www.google.com/', "_blank")}}>PARTICIPANT</h3>
                    </div>
                    <div className="link u col-12 col-sm-4">
                        <h3 className="link-text" onClick={event =>  {window.open('https://www.google.com/', "_blank")}}>JUDGE</h3>
                    </div>
                </div>
            </div>
            <div className="getinv-bbg"></div>
        </div>
    )

}