import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <div className="footer">
        <div className="footer-content">
            <img src='/d-logo.png' width={100} height={100} />
            <div>
                <h3>Company</h3>
                <ul>
                    <li>Company A</li>
                    <li>Company B</li>
                    <li>Company C</li>
                </ul> 
            </div>
            <div>
            <h3>Services</h3>
                <ul>
                    <li>Data</li>
                    <li>Impact</li>
                    <li>Service</li>
                </ul> 
            </div>
            <div>
            <h3>Office</h3>
                <ul>
                    <li>Test Office</li>
                </ul> 
            </div>
        </div>
     
    </div>
  );
}
