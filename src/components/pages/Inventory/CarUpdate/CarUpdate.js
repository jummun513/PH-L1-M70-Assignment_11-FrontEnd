import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchData from '../../../../hooks/useFetchData';
import Loading from '../../../shared/Loading/Loading';
import Footer from '../../../shared/Footer/Footer';
import { MyContext } from '../../../../App';
import SingIn from '../../SignIn/SignIn';
import Navbar from '../../../shared/Navbar/Navbar';
import axios from 'axios';
import ConfirmModal from '../../../shared/ConfirmModal/ConfirmModal';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Processing from '../../../shared/Processing/Processing';

const CarUpdate = () => {
    const { openSignInModal, setOpenSignInModal } = useContext(MyContext);
    const { carId } = useParams();
    const [car, loading, serCar] = useFetchData(`https://server-auto-hive.vercel.app/car/${carId}`);
    const dealer = useRef();
    const model = useRef();
    const price = useRef();
    const year = useRef();
    const image = useRef();
    const manufacturer = useRef();
    const quantity = useRef();
    const color = useRef();
    const [confirmModal, setConfirmModal] = useState(false);
    const [formData, setFormData] = useState({});
    const [postLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const cost = (car.price !== undefined) && car?.price.split(' ');

    useEffect(() => {
        if (Object.keys(formData).length !== 0) {
            const url = `https://server-auto-hive.vercel.app/update-car/${carId}`;

            const postData = async () => {
                try {
                    setLoading(true);
                    const { data } = await axios.post(url, formData)
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                    setLoading(false);
                }
            }
            postData();
            navigate('/user=manage-all-items');
        }
    }, [formData]);


    const targetLockelement = document.querySelector('#openConfirm');
    const componentDidMount = () => {
        setConfirmModal(true);
        disableBodyScroll(targetLockelement);
    };
    const componentWillUnmount = () => {
        setConfirmModal(false);
        clearAllBodyScrollLocks();
    };

    const handleOnClick = () => {
        setFormData({
            car: dealer.current.value,
            car_model: model.current.value,
            car_model_year: year.current.value,
            car_color: color.current.value,
            quantity: quantity.current.value,
            price: `$ ${price.current.value}`,
            img: image.current.value
        });
    };

    return (
        <div id='openConfirm' className={(openSignInModal) ? 'modal-parent-height svg-container' : 'svg-container'} >
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
                    (loading) ? <Loading></Loading> :
                        <div>
                            <h1 className='text-primary text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-5xl text-center'>{car.car}</h1>
                            <div id='cart-detail' className='p-3 pb-5 mx-3 xsm:mx-0 mt-20'>
                                <div className="cart-img-container">
                                    <img loading='lazy' className='cart-img' src={car.img} alt={car.car + 'car picture'} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="cart-text md:px-4 md:py-5 rounded-lg mt-10">
                                        <table className='w-full text-left'>
                                            <tbody>
                                                <tr className='flex justify-between items-center'>
                                                    <th className='text-xs py-3 md:py-5 md:text-base w-[49%] md:w-[48%] border border-gray-200 px-3'>Dealer :</th>
                                                    <td className='w-[50%]'><input ref={dealer} type="text" defaultValue={car.car} id="dealer" name="dealer" className='h-full w-full text-xs md:text-base py-3 md:py-5 px-3 border text-gray-950 border-gray-200 hover:border-primary focus:border-gray-50 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary' /></td>
                                                </tr>
                                                <tr className='flex justify-between items-center mt-2 sm:mt-4'>
                                                    <th className='text-xs py-3 md:py-5 md:text-base w-[49%] md:w-[48%] border border-gray-200 px-3'>Model :</th>
                                                    <td className='w-[50%]'><input ref={model} type="text" defaultValue={car.car_model} id="model" name="model" className='h-full w-full text-xs md:text-base py-3 md:py-5 px-3 border text-gray-950 border-gray-200 hover:border-primary focus:border-gray-50 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary' /></td>
                                                </tr>
                                                <tr className='flex justify-between items-center mt-2 sm:mt-4'>
                                                    <th className='text-xs py-3 md:py-5 md:text-base w-[49%] md:w-[48%] border border-gray-200 px-3'>Year :</th>
                                                    <td className='w-[50%]'><input ref={year} type="number" defaultValue={car.car_model_year} id="year" name="year" className='h-full w-full text-xs md:text-base py-3 md:py-5 px-3 border text-gray-950 border-gray-200 hover:border-primary focus:border-gray-50 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary' /></td>
                                                </tr>
                                                <tr className='flex justify-between items-center mt-2 sm:mt-4'>
                                                    <th className='text-xs py-3 md:py-5 md:text-base w-[49%] md:w-[48%] border border-gray-200 px-3'>Color :</th>
                                                    <td className='w-[50%]'><input ref={color} type="text" defaultValue={car.car_color} id="color" name="color" className='h-full w-full text-xs md:text-base py-3 md:py-5 px-3 border text-gray-950 border-gray-200 hover:border-primary focus:border-gray-50 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary' /></td>
                                                </tr>
                                                <tr className='flex justify-between items-center mt-2 sm:mt-4'>
                                                    <th className='text-xs py-3 md:py-5 md:text-base w-[49%] md:w-[48%] border border-gray-200 px-3'>Quantity :</th>
                                                    <td className='w-[50%]'><input ref={quantity} type="number" defaultValue={car.quantity} id="quantity" name="quantity" className='h-full w-full text-xs md:text-base py-3 md:py-5 px-3 border text-gray-950 border-gray-200 hover:border-primary focus:border-gray-50 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary' /></td>
                                                </tr>
                                                <tr className='flex justify-between items-center mt-2 sm:mt-4'>
                                                    <th className='text-xs py-3 md:py-5 md:text-base w-[49%] md:w-[48%] border border-gray-200 px-3'>Price :</th>
                                                    <td className='w-[50%] relative'><span className='absolute top-[30%] left-3'>$</span>
                                                        <input ref={price} type="number" defaultValue={cost[1]} id="price" name="price" className='h-full w-full text-xs md:text-base py-3 md:py-5 px-2 ps-5 md:ps-10 md:px-3 border text-gray-950 border-gray-200 hover:border-primary focus:border-gray-50 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary' /></td>
                                                </tr>
                                                <tr className='flex justify-between items-center mt-2 sm:mt-4'>
                                                    <th className='text-xs py-3 md:py-5 md:text-base w-[49%] md:w-[48%] border border-gray-200 px-3'>Manufacturer :</th>
                                                    <td className='w-[50%]'><input ref={manufacturer} type="text" defaultValue={car.car} id="manufacturer" name="manufacturer" className='h-full w-full text-xs md:text-base py-3 md:py-5 px-3 border text-gray-950 border-gray-200 hover:border-primary focus:border-gray-50 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary' /></td>
                                                </tr>
                                                <tr className='flex justify-between items-center mt-2 sm:mt-4'>
                                                    <th className='text-xs py-3 md:py-5 md:text-base w-[49%] md:w-[48%] border border-gray-200 px-3'>Image Link :</th>
                                                    <td className='w-[50%]'><input ref={image} type="text" defaultValue={car.img} id="image" name="image" className='h-full w-full text-xs md:text-base py-3 md:py-5 px-3 border text-gray-950 border-gray-200 hover:border-primary focus:border-gray-50 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary' /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='flex justify-center items-center mt-10'>
                                        {
                                            postLoading ? <div className='w-1/2'><Processing></Processing></div> :
                                                <input onClick={componentDidMount} type="submit" className='cursor-pointer w-1/2 btn-style border-2 border-primary text-white bg-primary hover:bg-transparent hover:text-primary' value='Update' />}
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                {
                    confirmModal && <div><ConfirmModal componentWillUnmount={componentWillUnmount} okAction={handleOnClick} from={'update'}></ConfirmModal></div>
                }
            </div>
            <Footer></Footer>
        </div >
    );
};

export default CarUpdate;