import 'react-rater/lib/react-rater.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MostPopular.css'

import React from 'react'
import Container from 'react-bootstrap/Container';
import Badge  from 'react-bootstrap/Badge';
import Rater from 'react-rater'
import Slider from "react-slick";


const MostPopular = (props) => {
    const sliderOptions ={
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    }
    return ( 
        <section id="mostPopular">

            <Container>
                <h1 className="text-center ">Most Popular Brands</h1>
                <Slider {...sliderOptions} >
                    {
                        props.top_partners.map((t, index) => {
                            const {
                                average_rating,
                                partner_category,
                                partner_name,
                                partner_profile_image
                            } = t
                            return (
                                <div className="cards" key={index}>
                                    <img className="box-img" src={partner_profile_image} alt={partner_name} />
                                    <div className="cards-content">
                                        <h1 className="common-BodyTitle">{partner_name}</h1>
                                        <div className="type"> {partner_category}</div>
                                        <div className="common-BodyText">
                                            <Rater rating={parseInt(average_rating)} total={5} interactive={false} />
                                            <p><Badge variant="warning">10%</Badge></p>
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
 
export default MostPopular;