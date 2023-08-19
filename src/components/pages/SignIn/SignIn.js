import React from 'react';
import './SignIn.css';

const SingIn = ({ openModal, setOpenModal, hideCross }) => {

    return (
        <div id='login-modal' className={openModal ? 'active' : 'hidden'}>
            <div className='modal-container w-auto lg:w-[50rem]'>
                <div className="relative">
                    <div className="relative bg-white rounded-lg shadow-2xl">
                        <button type="button" onClick={() => { setOpenModal(false) }} className={hideCross ? 'hidden' : "absolute top-3 right-2.5 text-secondary bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900">Sign in to our platform</h3>
                            <form className="space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" required />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input style={{ color: '#88c123' }} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary" required />
                                        </div>
                                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                                    </div>
                                    <a href="#" className="text-sm text-secondary hover:underline">Lost Password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-semibold rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                                <div className="text-sm font-medium text-gray-500">
                                    Not registered? <a href="#" className="text-secondary hover:underline">Create account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;