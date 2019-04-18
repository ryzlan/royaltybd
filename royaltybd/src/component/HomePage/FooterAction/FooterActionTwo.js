import './FooterAction.css'
import bank from '../../../assets/img/actionButton/piggy-bank.svg'


import React from 'react'
import Container from 'react-bootstrap/Container';

const FooterAction = () => {
    return (
            <section className="globalFooterCards" id="footerAction2">
                <Container className="fA-wrapper">
                <div className="fA-card-wrap">
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

        </div>
                </Container>
            </section>
            );
       }
        
export default FooterAction;