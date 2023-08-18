import React, { useState } from 'react';
import Banner from './Banner/Banner';
import LogoSlider from './LogoSlider/LogoSlider';
import url from '../../../data/logoData.json';
import Listing from './Listing/Listing';
import Loading from '../../shared/Loading/Loading';
import Footer from '../../shared/Footer/Footer';
import Subscribe from './Subscribe/Subscribe';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <LogoSlider data={url.items}></LogoSlider>
            <Listing></Listing>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;