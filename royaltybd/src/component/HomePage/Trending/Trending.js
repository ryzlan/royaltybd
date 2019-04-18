import 'react-rater/lib/react-rater.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Trending.css'

import React from 'react';
import Container from 'react-bootstrap/Container';
import Rater from 'react-rater'
import Slider from "react-slick";


const Trending = (props) => {
    console.log(props);
    
    const sliderOptions ={
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    }

    if(props.trending_offer){
    return (
    <section id="trending">
        <Container> 
            <h1 className="text-center ">Trending Offers</h1>
           
            
            <Slider {...sliderOptions} >

                {
                    props.trending_offer.map((t,index )=>{
                        const{
                            average_rating,
                            partner_category,
                            partner_name,
                            partner_profile_image
                        } = t
                        return (
                            <div className="cards" key={index}>
                                <img className="box-img" src={partner_profile_image} alt={partner_name}/>
                                <div className="cards-content">
                                <h1 className="common-BodyTitle">{partner_name}</h1>
                                <div className="type"> {partner_category}</div>
                                 <div className="common-BodyText">
                                 <Rater rating={parseInt(average_rating)} total={5} interactive={false} />

                                
                                </div>
                                </div>
                                
            
                            </div>
                        )
                    })
                }

            </Slider>
            
        </Container>
    </section> 
    );
            }
            return null;
}
 
export default Trending;