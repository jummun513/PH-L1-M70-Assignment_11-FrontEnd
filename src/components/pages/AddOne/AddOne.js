import React, { useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';

const AddOne = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className='svg-container'>
            <Navbar></Navbar>
            <div className='xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto relative top-40 md:top-72 pb-20'>
                <h1 className='text-[#88C123] text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-5xl text-center'>Add One Item In Inventory</h1>
                <div className='mt-10 md:mt-20'>
                    <form action="#" className='flex flex-col px-5 py-10 bg-[#fafafa] rounded-lg'>
                        <div class="mb-6">
                            <label for="manufacturer" class="md:text-base block mb-2 text-sm font-semibold text-gray-900">Manufacturer or Dealer Name</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="manufacturer" id="manufacturer" required placeholder='Tesla' />
                        </div>
                        <div class="mb-6">
                            <label for="car_model" class="md:text-base block mb-2 text-sm font-semibold text-gray-900">Car Model</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="car_model" id="car_model" placeholder='X series' required />
                        </div>
                        <div class="mb-6">
                            <label for="car-color" class="md:text-base block mb-2 text-sm font-semibold text-gray-900">Car Color</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="car_color" id="car_color" placeholder='Blue' required />
                        </div>
                        <div class="mb-6">
                            <label for="release" class="md:text-base block mb-2 text-sm font-semibold text-gray-900">Release Year</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="number" name="release" id="release" placeholder='2019' required />
                        </div>
                        <div class="mb-6">
                            <label for="car_price" class="md:text-base block mb-2 text-sm font-semibold text-gray-900">Single Item Price. (In US Dollar - $)</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="number" name="car_price" id="car_price" placeholder='1265.12' required />
                        </div>
                        <div class="mb-6">
                            <label for="quantity" class="md:text-base block mb-2 text-sm font-semibold text-gray-900">Available Quantity</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="number" name="quantity" id="quantity" placeholder='10' required />
                        </div>
                        <div class="mb-6">
                            <label for="img_link" class="md:text-base block mb-2 text-sm font-semibold text-gray-900">Image Hosting Link</label>
                            <input className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="img_link" id="img_link" placeholder='https://i.ibb.co/ZBwN1QS/bmw.png' />
                        </div>
                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input onClick={() => { setChecked(!checked) }} id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900">This will change on our store Database. Do you Agree?</label>
                        </div>
                        <button disabled={!checked} type="submit" class={!checked ? 'text-white bg-[#87c123e3] font-semibold rounded-lg text-sm md:text-base w-full sm:w-auto px-5 py-2.5 text-center' : 'hover:bg-[#77a823] text-white bg-[#88c123] font-semibold rounded-lg text-sm md:text-base w-full sm:w-auto px-5 py-2.5 text-center'}>{checked ? 'Submit' : 'Disabled'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddOne;