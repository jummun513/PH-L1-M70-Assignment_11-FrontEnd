import React, { useContext, useState } from 'react';
import './AddOne.css';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import SingIn from '../SignIn/SignIn';
import { modalToggleContext } from '../../../App';

const AddOne = () => {
    const [checked, setChecked] = useState(false);
    const { openModal, setOpenModal } = useContext(modalToggleContext);

    return (
        <div className={openModal ? 'modal-parent-height svg-container' : 'svg-container'}>
            <div className='absolute w-full z-50'>
                {
                    openModal
                    &&
                    <SingIn setOpenModal={setOpenModal} openModal={openModal}></SingIn>
                }
            </div>
            <div className='relative'><Navbar></Navbar></div>
            <div className='z-20 md:-mb-20 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto relative top-56 md:top-72'>
                <h1 className='text-primary text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-5xl text-center'>Add One Item In Inventory</h1>
                <div className='mt-10 md:mt-20'>
                    <form action="#" className='flex flex-col px-5 py-10 bg-[#fafafa] rounded-lg'>
                        <div className="mb-6">
                            <label htmlFor="manufacturer" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Manufacturer or Dealer Name</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="manufacturer" id="manufacturer" required placeholder='Tesla' />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="car_model" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Car Model</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="car_model" id="car_model" placeholder='X series' required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="car-color" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Car Color</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="car_color" id="car_color" placeholder='Blue' required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="release" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Release Year</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="number" name="release" id="release" placeholder='2019' required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="car_price" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Single Item Price. (In US Dollar - $)</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="number" name="car_price" id="car_price" placeholder='1265.12' required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="quantity" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Available Quantity</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="number" name="quantity" id="quantity" placeholder='10' required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="img_link" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Image Hosting Link</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="img_link" id="img_link" placeholder='https://i.ibb.co/ZBwN1QS/bmw.png' />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input style={{ color: '#88c123' }} onClick={() => { setChecked(!checked) }} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">This will change on our store Database. Do you Agree?</label>
                        </div>
                        <button disabled={!checked} type="submit" className={!checked ? 'text-white bg-[#87c123e3] font-semibold rounded-lg text-sm md:text-base w-full sm:w-auto px-5 py-2.5 text-center' : 'hover:bg-[#77a823] text-white bg-primary font-semibold rounded-lg text-sm md:text-base w-full sm:w-auto px-5 py-2.5 text-center'}>{checked ? 'Submit' : 'Disabled'}</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddOne;