import './FooterAction.css'
import cash from '../../../assets/img/actionButton/cash.svg'
import bank from '../../../assets/img/actionButton/piggy-bank.svg'


import React from 'react'
import Container from 'react-bootstrap/Container';

const FooterAction = () => {
    return (
            <section className="globalFooterCards" id="footerAction">
                <Container>
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

                    <a
                        className="common-Link globalFooterCard card-documentation"
                        href="/login"
                        data-analytics-action="documentation"
                        data-analytics-source="card_link"
                    >
                        <img src={bank}  alt="piggy bank"/>
                        <h2 className="common-UppercaseText common-Link--arrow">LOGIN</h2>
                        <p className="common-BodyText">Earn Royalty Cash coupon up to ৳250
                                <br/>
                            Refer your friends and family to earn more Royalty Money</p>
                    </a>


                </Container>
            </section>
            );
       }
        
export default FooterAction;