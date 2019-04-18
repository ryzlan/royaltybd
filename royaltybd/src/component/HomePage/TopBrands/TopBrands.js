import 'react-rater/lib/react-rater.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TopBrands.css'
import sign from '../../../assets/img/benefits/animat-sign-post-color.gif'
import React from 'react'
import Container from 'react-bootstrap/Container';
import  Badge  from 'react-bootstrap/Badge';
import Rater from 'react-rater'
import Slider from "react-slick";

const TopBrand = (props) => {
    const sliderOptions ={
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    }
    console.log(props);
    if(props.top_brands){
        return ( 
            <section id="topBrands">
                <Container>
                    <h1 className="text-center ">Top Brand Offers</h1>
                    
                    <Slider {...sliderOptions} >
    
                        {
                            props.top_brands.map((t, index) => {
                                const {
                                    average_rating,
                                    partner_category,
                                    partner_name,
                                    partner_profile_image
                                } = t
                                return (
                                    <div className="box-wrapper" key={index}>
                                        <img src={partner_profile_image} alt={partner_name} />
                                        <div className="box-content">
                                            <div className="title">{partner_name}</div>
                                            <div className="desc">{partner_category}</div>
                                            <span className="price">
                                            10% OFF
                                            </span>
                                            <div className="footer">
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
         return null;
    }
    
}
 
export default TopBrand;