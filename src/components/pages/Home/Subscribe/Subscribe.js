import React, { useState } from 'react';
import './Subscribe.css';
import { Link } from 'react-router-dom';

const Subscribe = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div id='subscribe-us' className='relative z-30 top-10 mt-24 md:mt-36 lg:mt-60 mb-[48rem] md:mb-54 lg:mb-60 xl:mb-96'>
            <div id='subscribe'>
                <div className='px-2 xsm:px-0 mx-auto xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm'>
                    <div className='flex flex-col-reverse md:flex-row justify-between h-full'>
                        <div id='subscribe-left' className='md:w-1/2 mt-5 md:mt-0 flex md:shadow-2xl flex-col justify-between p-5 md:pr-5'>
                            <h1 className='text-white text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-3xl md:pb-5'>Let's Start Working Together</h1>
                            <div className='pt-5 md:p-5'>
                                <h3 className='text-primary lg:font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Subscribe Your Email htmlFor Newsletter</h3>
                                <p className='text-sm md:text-base text-gray-50 my-5'>Don't worry! we are too much conscious about your privacy. So, no junk email send by us.</p>
                                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-auto sm:flex sm:space-y-0">
                                    <div className="relative w-full">
                                        <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                        <input className="block border-none p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 ring-2 ring-gray-50 focus:ring-primary focus:outline-none" placeholder="Enter your email" type="email" id="email" required="" />
                                    </div>
                                    <div>
                                        <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white bg-primary ring-2 ring-primary hover:bg-secondary ease-linear duration-150">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/2 md:shadow-2xl md:ps-5">
                            <div className='bg-white px-5 py-10 rounded-lg'>
                                <h3 className='text-gray-900 text-3xl'>Send To Us</h3>
                                <div className='mt-8 md:mt-14'>
                                    <span class="uppercase text-sm text-gray-600 font-semibold md:font-bold">Full Name</span>
                                    <input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="" />
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <span class="uppercase text-sm text-gray-600 font-semibold md:font-bold">Email</span>
                                    <input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" />
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <span class="uppercase text-sm text-gray-600 font-semibold md:font-bold">Message</span>
                                    <textarea style={{ resize: 'none' }}
                                        class="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <button
                                        class="uppercase text-sm font-semibold md:font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full hover:bg-secondary focus:outline-none focus:shadow-outline">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;