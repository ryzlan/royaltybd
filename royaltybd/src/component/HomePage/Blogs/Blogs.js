import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Blogs.css'

import React from 'react'
import Container from 'react-bootstrap/Container';
import { FiExternalLink } from "react-icons/fi";
import Slider from "react-slick";


const Blogs = (props) => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        
      };



    return (  
        <section id="blogs">
            <Container>
                <h1 className="text-center" >Blogs</h1>
                <Slider {...settings}>
                    {
                        props.news_feed.map((n , index)=>{
                            const{ image_url ,
                                caption ,
                                posted_on , 
                                post_link ,
                                header ,
                                like }= n;
                            return(
                                <div className="blog-item" key={index*67}>
                                    <a href={post_link} target="_blank">
                                        <div className="icon">
                                            <img src={image_url} alt={header} />
                                        </div>
                                        <div className="content">
                                            <div className="title">{header}  <span className="blog-date">{posted_on}</span></div>
                                            <div className="rounded"></div>

                                            <p>
                                                {caption}
                                            </p>
                                        </div>

                                        <div className="item-arrow">
                                            <FiExternalLink />
                                        </div>
                                    </a>

                                </div>
                            )
                        })
                    }
                </Slider>
            </Container>
        </section>
    );
}
 
export default Blogs;