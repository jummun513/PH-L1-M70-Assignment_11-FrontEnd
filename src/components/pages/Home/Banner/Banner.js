import React from 'react';
import './Banner.css';
// import useFetchData from '../../../../hooks/fetchData';
import data from '../../../../data/carouselData.json';
import Carousel from './Carousel/Carousel';


const Banner = () => {
    // const [carData, setCarData] = useFetchData('carData.json');
    // console.log(carData);
    return (
        <div className='svg-container'>
            <div className="relative bottom-0">
                <Carousel data={data.slides}></Carousel>
            </div>
        </div>
    );
};

export default Banner;