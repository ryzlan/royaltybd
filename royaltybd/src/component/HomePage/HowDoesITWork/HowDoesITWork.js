import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React, { Component } from 'react';
import './HowDoesITWork.css'

import { FiGift,FiCreditCard,FiHome,FiStar } from "react-icons/fi";

import Card from 'react-bootstrap/Card'
import Steps, { Step } from 'rc-steps';
import Container from 'react-bootstrap/Container';

import how from '../../../assets/img/hero/how.png'

class HowDoesITWork extends Component {
    state = { 
        currentStep:0
     }

     componentDidMount(){
         this.interval = setInterval(()=>{
            let s = this.state.currentStep +1 ;
            if(s === 4 ){
                s = 0 ;
            }
            this.setState({
                currentStep:s 
            })
         }, 2000)
     }

     componentWillUnmount() {
        clearInterval(this.interval);
      }



    render() { 
        const step1 = 'Purchase our card after a Successful registration'
        const step2 = 'Visit our exclusive partners and show your card'
        const step3 = 'Our Partners will scan your card to apply discount and you also earn points'
        const step4 = 'Redeem your Royalty points for greater rewards';

        const cs = this.state.currentStep;

        return ( 
            <section id="hdw">
            <Container>

            <Card className="HDW-wrapper">
                <Card.Body>
                    <h1 className="header"> How Does it Work ? </h1>
                    <div className="step-wrapper">
                        <Steps labelPlacement="vertical" current={cs}>
                            <Step 
                                title="Step 1" description={step1} icon={<FiCreditCard />} />
                            <Step 
                                title="Step 2" description={step2} icon={<FiHome />} />
                            <Step 
                                title="Step 3" description={step3} icon={<FiStar />} />
                            <Step 
                                title="Step 4" description={step4} icon={<FiGift />} />
                        </Steps>
                    </div>
                </Card.Body>
            </Card>
            {/* <Card className="HDW-wrapper">
                <img src={how} alt="How" />
            </Card> */}

            </Container>
            </section>
         );
    }
}
 
export default HowDoesITWork;
