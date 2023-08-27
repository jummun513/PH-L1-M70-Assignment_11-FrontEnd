import React, { useState } from 'react';
import Loading from '../../../shared/Loading/Loading';
import CarCart from '../../Inventory/CarCart/CarCart';
import useFetchData from '../../../../hooks/useFetchData';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Listing = () => {
    const [cars, loading, setCars] = useFetchData('http://localhost:5000/cars');
    const [isLiked, setLiked] = useState(false);
    const showCar = cars.slice(0, 6);

    return (
        <div className='mt-24 md:mt-36 lg:mt-48 lg:mb-48 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto'>
            <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-3xl text-center'>Featured Listing</h1>
            <div id='cart-container' className='gap-7 mt-7 md:mt-14'>
                {
                    loading ? <Loading></Loading> : (showCar.map((data, idx) => <CarCart key={idx} data={data} liked={isLiked} from='listing'></CarCart>))
                }
            </div>
            <Link to='/inventory' className='text-center relative md:top-20 top-10 flex items-center justify-center text-primary hover:text-secondary lg:text-xl ease-linear duration-150 w-fit mx-auto'>See All Cars<BsArrowRight className='ms-2'></BsArrowRight></Link>
        </div>
    );
};

export default Listing;