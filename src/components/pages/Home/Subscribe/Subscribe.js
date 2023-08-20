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
                        <div className='md:w-1/2 md:shadow-2xl md:ps-5'>
                            <div className='bg-[#87c123dc] px-5 py-10 rounded-lg'>
                                <h3 className='text-white text-3xl'>Get In Touch</h3>
                                <form className='pt-5'>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                        </div>
                                    </div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <input onClick={() => { setChecked(!checked) }} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required />
                                        </div>
                                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Do you Agree with our terms & condition?</label>
                                    </div>
                                    <button disabled={!checked} type="submit" className={!checked ? "text-gray-500 bg-gray-200 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 md:px-8 py-2.5 text-center" : "text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg text-sm w-full sm:w-auto md:px-8 px-5 py-2.5 text-center"}>{checked ? 'Register' : 'Disabled'}</button>
                                    <div className="text-sm font-medium text-gray-900 mt-3">
                                        Already have an account? <Link to='/login' className="text-gray-50 hover:underline ms-2">Login Here.</Link>
                                    </div></form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;