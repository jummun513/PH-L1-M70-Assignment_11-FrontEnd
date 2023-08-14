import React from 'react';
import './Banner.css';
// import useFetchData from '../../../../hooks/fetchData';
import data from '../../../../data/carouselData.json';
import Carousel from './Carousel/Carousel';
import Navbar from '../../../shared/Navbar/Navbar';


const Banner = () => {
    // const [carData, setCarData] = useFetchData('carData.json');
    // console.log(carData);
    return (
        <div className='svg-container'>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                {/* <Carousel data={data.slides}></Carousel> */}
            </div>
        </div>
    );
};

export default Banner;