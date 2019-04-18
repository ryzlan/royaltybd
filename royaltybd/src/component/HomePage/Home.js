import React, { Component } from 'react';

import {connect } from 'react-redux'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import HowDoesITWork from './HowDoesITWork/HowDoesITWork'
import Hero from './Hero/Hero'
import WhyRoyalty from './WhyRoyalty/WhyRoyalty'
import TypeCard from './TypeCards/TypeCard'
import Catagories from './Catagories/Catagories';
import Trending from './Trending/Trending';
import TopBrand from './TopBrands/TopBrands';
import MostPopular from './MostPopular/MostPopular';
import Blogs from './Blogs/Blogs';
import FooterAction from './FooterAction/FooterAction';


class Home extends Component {
    state = {  }
    
    render() {
        const {trending ,top_brands ,top_partners ,news_feed} = this.props;
        
        return ( 
            <Container>
               
                    {/* <HowDoesITWork /> */}
                    <Hero />
                    {/* <WhyRoyalty /> */}
                    {/* <TypeCard /> */}
                    {/* <Catagories /> */}
                    {/* <Trending trending={trending}/> */}
                    {/* <TopBrand top_brands={top_brands}/> */}
                    {/* <MostPopular top_partners={top_partners}/> */}
                    {/* <Blogs news_feed={news_feed}/> */}

                    {/* <FooterAction /> */}
            </Container>
         );
    }
}
const mapStateToProps = state=>{
    
    return {
        trending:state.home.trending,
        top_brands:state.home.top_brands,
        top_partners:state.home.top_partners,
        news_feed:state.home.news_feed
    }
} 


export default connect(mapStateToProps)(Home);