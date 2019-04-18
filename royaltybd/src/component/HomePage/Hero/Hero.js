import React, { Component } from 'react'

import hero from '../../../assets/img/hero/16541.svg'
import './Hero.css'
import Container from 'react-bootstrap/Container'


const Hero = () => {
    return (
        <section id="hero">


            <Container fluid>
                <div className="hero-wrapper">
                    <div className="hero-content">
                        <h1>
                            Experience Life With Royalty
                        </h1>
                        <p className="common-BodyText">
                            The first ever dedicated privilege card platform of the country, where you can avail amazing discounts and offers at your desired places with our membership card.
                        </p>
                        <ul>
                            <li>
                                <a href="#whyus"
                                    className="common-Button" >
                                    Learn More
                                </a>
                            </li>
                            <li>
                                <a href="/"
                                    className="common-Button">
                                    Sign Up
                                 </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hero-img">
                        <img src={hero} alt="Hero img" />
                    </div>

                </div>

            </Container>

            <div id="stripes">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>


        </section>
    );
}

export default Hero;
