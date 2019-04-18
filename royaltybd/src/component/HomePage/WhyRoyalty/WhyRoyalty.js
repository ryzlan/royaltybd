import React, { Component } from 'react';
import './WhyRoyalty.css'
import diamond from  '../../../assets/img/benefits/animat-diamond-color.gif'
import compass from '../../../assets/img/benefits/animat-compass-color.gif'
import sign from '../../../assets/img/benefits/animat-sign-post-color.gif'

import Container from 'react-bootstrap/Container'

const WhyRoyalty = () => {
    return ( 
        <section id="key-benefits" >
            <Container>
            <div className="wrapper">
            <div className="box">
                <img className="box-img" src={diamond} alt="diamond"/>
                <h1 className="common-BodyTitle">GET EXCLUSIVE OFFERS & EARN ROYALTY POINTS</h1>
                <p className="common-BodyText">Enjoy special discounts from your favorite brands and Royalty Points  on Every Purchase.</p>
            </div>
            <div  className="box">
                <img className="box-img" src={compass} alt="compass"/>
                <h1 className="common-BodyTitle">NEWS-FEED</h1>
                <p className="common-BodyText">Stay up to date with your favorite brands’ latest deals and offers. Stay ahead of the crowd</p>
            </div>
            <div  className="box">
                <img className="box-img" src={sign} alt="signs"/>
                <h1 className="common-BodyTitle">TRACK YOUR EXPENSE</h1>
                <p className="common-BodyText">Track all the amount you’re spending at our partners and also how much you saved.</p>
            </div>
            </div>
        
            </Container>
        </section>

     );
}
 
export default WhyRoyalty;