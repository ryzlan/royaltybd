import './FooterAction.css'
import cash from '../../../assets/img/actionButton/cash.svg'
import bank from '../../../assets/img/actionButton/piggy-bank.svg'


import React from 'react'
import Container from 'react-bootstrap/Container';

const FooterAction = () => {
    return (
            <section class="globalFooterCards" id="footerAction">
                <Container>
                    <a
                        class="common-Link globalFooterCard card-sigma"
                        href="https://stripe.com/en-US/sigma"
                        data-analytics-action="sigma"
                        data-analytics-source="card_link"
                    >
                        <img src={cash}  alt="benefits"/>
                        <h2 class="common-UppercaseText common-Link--arrow">Introducing Sigma</h2>
                        <p class="common-BodyText">Use SQL to explore your business’ payments and revenue data, build and run custom reports, get insights, and more.</p>
                    </a>

                    <a
                        class="common-Link globalFooterCard card-documentation"
                        href="https://stripe.com/docs"
                        data-analytics-action="documentation"
                        data-analytics-source="card_link"
                    >
                        <img src={bank}  alt="piggy bank"/>
                        <h2 class="common-UppercaseText common-Link--arrow">Explore the docs</h2>
                        <p class="common-BodyText">Start building your integration and accept your first payment in minutes. Stripe libraries are available in every language from Ruby to Go.</p>
                    </a>


                </Container>
            </section>
            );
       }
        
export default FooterAction;