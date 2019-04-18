import './FooterAction.css'
import cash from '../../../assets/img/actionButton/cash.svg'


import React from 'react'
import Container from 'react-bootstrap/Container';

const FooterAction = () => {
    return (
            <section className="globalFooterCards" id="footerAction1">
                <Container className="fA-wrapper">
                    <div className="fA-card-wrap">

                    
                    <a
                        className="common-Link globalFooterCard card-sigma"
                        href="/signup"
                        data-analytics-action="sigma"
                        data-analytics-source="card_link"
                    >
                        <img src={cash}  alt="benefits"/>
                        <h2 className="common-UppercaseText common-Link--arrow">SIGN UP</h2>
                        <p className="common-BodyText">Like what you see?<br/>

                            Be a Royalty Cardholder today to enjoy all the benefits provided by us.</p>
                    </a>
                    </div>
                    
                </Container>
            </section>
            );
       }
        
export default FooterAction;