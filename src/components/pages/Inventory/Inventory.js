import Navbar from '../../shared/Navbar/Navbar';
import useFetchData from '../../../hooks/useFetchData';
import Loading from '../../shared/Loading/Loading';
import CarCart from './CarCart/CarCart';
import './Inventory.css';
import { useState } from 'react';
import Footer from '../../shared/Footer/Footer';

const Inventory = () => {
    const [cars, loading, setCars] = useFetchData('http://localhost:5000/cars');
    const [isLiked, setLiked] = useState(false);
    const [isWished, setWished] = useState(false);
    const user = false;

    return (
        <div className='svg-container'>
            <div className='relative'><Navbar></Navbar></div>
            <div className='xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto relative top-40 md:top-72'>
                <h1 className='text-[#88C123] text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-5xl text-center'>All Listing Cars</h1>
                <div id='cart-container' className='gap-7 mt-10 md:mt-20'>
                    {
                        loading ? <Loading></Loading> : (cars.map((data, idx) => <CarCart key={idx} data={data} liked={isLiked} wished={isWished} user={user}></CarCart>))
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;