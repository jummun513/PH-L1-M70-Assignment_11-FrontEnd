import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchData from '../../../../hooks/useFetchData';
import Loading from '../../../shared/Loading/Loading';
import Footer from '../../../shared/Footer/Footer';
import { MyContext } from '../../../../App';
import SingIn from '../../SignIn/SignIn';
import Navbar from '../../../shared/Navbar/Navbar';
import './CarDetail.css';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';

const CarDetail = ({ liked, wished, user }) => {
    const { openSignInModal, setOpenSignInModal } = useContext(MyContext);
    const { carId } = useParams();
    const [car, loading, serCar] = useFetchData(`https://server-auto-hive.vercel.app/car/${carId}`);

    const navigate = useNavigate();
    const StockPage = id => {
        navigate(`/user=car-stock-manage/${id}`);
    }



    return (
        <div className={openSignInModal ? 'modal-parent-height svg-container' : 'svg-container'} >
            <div className='absolute w-full z-50'>
                {
                    openSignInModal
                    &&
                    <SingIn setOpenSignInModal={setOpenSignInModal} openSignInModal={openSignInModal}></SingIn>
                }
            </div>
            <div className='relative'><Navbar></Navbar></div>
            <div className='-mb-20 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto relative z-20 top-40 md:top-72'>
                {
                    loading ? <Loading></Loading> :
                        <div>
                            <h1 className='text-primary text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-5xl text-center'>{car.car}</h1>
                            <div id='cart-detail' className='p-3 pb-5 mx-3 xsm:mx-0 mt-20'>
                                <div className="cart-img-container">
                                    <img loading='lazy' className='cart-img' src={car.img} alt={car.car + 'car picture'} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="cart-text border border-gray-200 rounded-lg mt-10">
                                        <table className='w-full text-left'>
                                            <tbody>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Dealer :</th>
                                                    <td className='text-xs md:text-base px-3'>{car.car}</td>
                                                </tr>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Model :</th>
                                                    <td className='text-xs md:text-base px-3'>{car.car_model}</td>
                                                </tr>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Year :</th>
                                                    <td className='text-xs md:text-base px-3'>{car.car_model_year}</td>
                                                </tr>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Color :</th>
                                                    <td className='text-xs md:text-base px-3'>{car.car_color}</td>
                                                </tr>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Quantity :</th>
                                                    <td className='text-xs md:text-base px-3'>{car.quantity}</td>
                                                </tr>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Price :</th>
                                                    <td className='text-xs md:text-base px-3'>{car.price}</td>
                                                </tr>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Manufacturer :</th>
                                                    <td className='text-xs md:text-base px-3'>{car.car}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='flex justify-center items-center mt-10'>
                                        {/* <div className='flex justify-between items-center'><AiFillLike title='Like' className='h-8 w-8 mr-3 cursor-pointer' fill={liked ? '#88C123' : '#87c12361'}></AiFillLike> <BsFillBookmarkPlusFill title='Add to wish-list.' fill={wished ? '#88C123' : '#87c12361'} className='h-7 w-7 cursor-pointer'></BsFillBookmarkPlusFill></div> */}
                                        <button onClick={() => StockPage(car._id)} type="button" className='btn-style w-full md:w-2/3 border-2 border-primary text-white bg-primary hover:bg-transparent hover:text-primary'>Manage Stock</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
            <Footer></Footer>
        </div >
    );
};

export default CarDetail;