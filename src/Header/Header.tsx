import React from 'react';
import './Header.css';

export function Header() {
  return (
    <div className="header-container">
        <div className="logo-container">
            <img src='/logo-d-impact.png' width={100} height={40}/>
            <button className="contact-us">Contact Us</button>
        </div>
     <div className="img-desc-container">
        <div className="header-container max-width-50">
            <h1><a href="#"> DATA IMPACT</a> dolor sit amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero aperiam enim sed ad, molestias velit temporibus eligendi quisquam vitae odit, autem ratione dolor obcaecati assumenda repellendus maiores tempora ab.</p>
            <button className="dark-blue-button">Tim hieu ngey</button>
        </div>
        <img src="/robot.jpg"/>
     </div>
     
    </div>
  );
}
