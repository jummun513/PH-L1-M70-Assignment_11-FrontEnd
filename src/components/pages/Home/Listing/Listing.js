import React, { useState } from 'react';
import Loading from '../../../shared/Loading/Loading';
import CarCart from '../../Inventory/CarCart/CarCart';
import useFetchData from '../../../../hooks/useFetchData';

const Listing = () => {
    const [cars, loading, setCars] = useFetchData('http://localhost:5000/cars');
    const [isLiked, setLiked] = useState(false);
    const [isWished, setWished] = useState(false);
    const user = false;
    return (
        <div className='mt-32 md:mt-48 lg:mt-60 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto'>
            <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-3xl text-center'>Featured Listing</h1>
            <div id='cart-container' className='gap-7 mt-7 md:mt-14'>
                {
                    loading ? <Loading></Loading> : (cars.map((data, idx) => <CarCart key={idx} data={data} liked={isLiked} wished={isWished} user={user}></CarCart>))
                }
            </div>
        </div>
    );
};

export default Listing;