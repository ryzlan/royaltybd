import React, { Component } from 'react'

import './Hero.css'

const Hero = () => {
    return (
        <section>
            <header>
                <div id="stripes" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <section id="intro">
                    <div className="container-lg">
                    
                        <h1>
                            The new standard in online payments
                        </h1>
                        <p className="common-BodyText">
                            Stripe is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                        </p>
                        <ul>
                            <li>
                                <a href="https://dashboard.stripe.com/register"
                                    className="common-Button" >
                                    Start Now
                                </a>
                            </li>
                            <li>
                                <a href="https://stripe.com/en-US/contact/sales"
                                    className="common-Button">
                                    Contact Sales
                                 </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>
        </section>
    );
}

export default Hero;
