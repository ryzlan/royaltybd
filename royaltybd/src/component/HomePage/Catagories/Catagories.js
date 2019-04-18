import './Catagories.css'

import React from 'react';
import Container from 'react-bootstrap/Container';

const Catagories = () => {
    const data = [
        {title:"Food & Drinks" , img:"https://s3-ap-southeast-1.amazonaws.com/royalty-bd/static-images/home-page/cat_img1.png"},
        {title:"Health & Fitness" , img:"https://s3-ap-southeast-1.amazonaws.com/royalty-bd/static-images/home-page/cat_img2.png"},
        {title:"Lifestyle" , img:"https://s3-ap-southeast-1.amazonaws.com/royalty-bd/static-images/home-page/cat_img3.png"},
        {title:"Beauty & Spa" , img:"https://s3-ap-southeast-1.amazonaws.com/royalty-bd/static-images/home-page/cat_img6.png"},
        {title:"Entertainment" , img:"https://s3-ap-southeast-1.amazonaws.com/royalty-bd/static-images/home-page/cat_img5.png"},
        {title:"Getaways" , img:"https://s3-ap-southeast-1.amazonaws.com/royalty-bd/static-images/home-page/cat_img4.png"},
    ]

    return ( 
        <section id="catagories">
            <Container>
                <h1 className="text-center header-text">CATAGORIES</h1>
                <div className="wrapper">
                        {data.map((d, index )=>{
                            return(
                                <div className="card " key={index*64} >
                                    <div className="card_image">
                                        <img src={d.img} alt={d.title} />
                                    </div>
                                    <div className="card_title title-white">
                                        <p>{d.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                    
                </div>
            </Container>

        </section>
     );
}
 
export default Catagories;