import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchData from '../../../../hooks/useFetchData';
import Loading from '../../../shared/Loading/Loading';
import Footer from '../../../shared/Footer/Footer';
import { MyContext } from '../../../../App';
import SingIn from '../../SignIn/SignIn';
import Navbar from '../../../shared/Navbar/Navbar';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import axios from 'axios';

const StockUpdate = ({ liked, wished, user }) => {
    const { openSignInModal, setOpenSignInModal } = useContext(MyContext);
    const { carId } = useParams();
    const [car, loading, serCar] = useFetchData(`http://localhost:5000/car/${carId}`);
    const [restock, setRestock] = useState(0);
    const [confirmModal, setConfirmModal] = useState(false);
    const [formData, setFormData] = useState({});
    const [postLoading, setLoading] = useState(false);


    const handleDelivered = () => {
        setFormData({
            quantity: (parseInt(car.quantity) - 1),
        });
    }

    const handleRestock = () => {
        setFormData({
            quantity: (parseInt(restock) + parseInt(car.quantity)),
        });
    };

    useEffect(() => {
        if (Object.keys(formData).length !== 0) {
            const url = `http://localhost:5000/update-car/${carId}`;

            const postData = async () => {
                try {
                    setLoading(true);
                    const data = await axios.post(url, formData);
                    serCar(data.data);
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                    setLoading(false);
                }
            }
            postData();
        }
    }, [formData]);


    // For body back ground stack
    // const targetLockelement = document.querySelector('#openConfirm');
    // const componentDidMount = () => {
    //     setConfirmModal(true);
    //     disableBodyScroll(targetLockelement);
    // };
    // const componentWillUnmount = () => {
    //     setConfirmModal(false);
    //     clearAllBodyScrollLocks();
    // };


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
                            <h1 className='text-primary text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-5xl text-center'>{car.car} &#40;Stock Manage&#41;</h1>
                            <div id='cart-detail' className='p-3 pb-5 mx-3 xsm:mx-0 mt-20'>
                                <div className="cart-img-container">
                                    <img loading='lazy' className='cart-img' src={car.img} alt={car.car + 'car picture'} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="cart-text border border-gray-200 rounded-lg mt-10">
                                        <table className='w-full text-left'>
                                            <tbody>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Description</th>
                                                    <td className='text-xs md:text-base px-3'>{car.car} {car.car_model} {car.car_color} {car.car_model_year}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="cart-text border border-gray-200 rounded-lg mt-10">
                                        <table className='w-full text-center'>
                                            <tbody>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Available In Stock</th>
                                                    <th className='text-xs md:text-base w-1/2 px-3 py-5 border-r border-r-gray-200'>Action</th>
                                                </tr>
                                                <tr className='border-b border-b-gray-200'>
                                                    <th rowSpan={2} className='text-xs w-1/2 row-span-2 md:text-base px-3 py-5 border-r border-r-gray-200'>{car.quantity}</th>
                                                    <td className='text-xs w-1/2 md:text-base'><input onClick={() => handleDelivered()} className='px-2 md:px-5 py-2 mx-1 border border-orange-500 cursor-pointer duration-150 ease-linear my-5 bg-orange-500 text-gray-50 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-sm' type="button" value='Delivered One' /></td>
                                                </tr>
                                                <tr className='border-b border-b-gray-200'>
                                                    <td className='text-xs w-1/2 py-5 md:text-base'>
                                                        <div className="relative w-full sm:w-2/3 mx-auto md:block flex flex-col justify-center px-2 md:px-0">
                                                            <input type="number" min={0} step={1} pattern="[0-9]*" onChange={(e) => setRestock((v) => (e.target.validity.valid ? e.target.value : v))} id="restock" value={restock} className="block w-full p-2 md:p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-primary" placeholder='Number only' required />
                                                            <button onClick={() => { handleRestock() }} type="submit" className="text-white mt-2 md:mt-0 md:absolute md:right-2.5 md:bottom-2.5 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2">Re-Stock</button>
                                                        </div></td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default StockUpdate;