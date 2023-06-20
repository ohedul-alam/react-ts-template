import React from 'react';
import './BlueCard.css';

export function BlueCard() {
    const imageNames = ['logo_01.jpeg', 'logo_02.jpg', 'logo_03.jpeg', 'logo_04.jpeg'];
  return (
    <div className="blue-card-container">
        <p><span>Lorem, ipsum dolor </span>sit amet consectetur </p>
        <div className="companies">
            {
               imageNames.map(img=><img src={"/"+ img} height={30} width={30}></img>) 
            }
        </div>
        <div className="description-container">
            <img src="/data-center.jpeg"/>
            <div className="text-container">
                <h2>Lorem ipsum dolor, sit amet consectetur.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae minima facere odit delectus rerum, vero iure est beatae nemo reiciendis similique possimus dolores laborum harum mollitia, placeat numquam fugit?</p>
            </div>
        </div>
    </div>
  );
}
