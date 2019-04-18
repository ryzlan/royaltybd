import './TypeCard.css'

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from './Card'



const TypeCard = () => {
    return (
        <section>
            <Container>
                <div className="wrapper">
                    <div className="card-desc">
                        <div className="box">
                            <h1 className="common-BodyTitle">Platinum Card</h1>
                            <Badge variant="warning">Most Popular</Badge>
                            <Badge pill variant="dark">
                               $1499
                            </Badge>
                            <p className="common-BodyText">Premium credit cards, often referred to as black or purple credit cards, are cards which charge an annual fee but offer cardholders a range of exclusive benefits in return.</p>
                            <Button className="box-button"> Buy Now</Button>
                                
                            
                            
                        </div>

                    </div>
                    <div className="card-img"><Card /></div>

                    <div className="card-desc">
                        <div className="box">
                            <h1 className="common-BodyTitle">Gold Card</h1>
                            <Badge variant="warning">Basic</Badge>
                            <Badge pill variant="dark">
                               $999
                            </Badge>
                            <p className="common-BodyText">A credit card  used to buy things and pay for them later that allows you to spend a lot of money before you pay it back and is usually given to people with high incomes</p>
                            
                            <Button className="box-button"> Buy Now</Button>
                            
                            
                            
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}

export default TypeCard;