import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div className="flex items-center justify-center min-h-screen px-6 py-12 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto">
            <div>
                <p className="text-sm font-medium text-primary">404 error</p>
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">We can’t find that page</h1>
                <p className="mt-4 text-gray-500">Sorry, the page you are looking for doesn't exist or has been moved.</p>

                <div className="flex items-center mt-6 gap-x-3">
                    <button className="btn-style flex items-center justify-center text-gray-700 transition-colors duration-200 bg-white border border-primary gap-x-2 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 md:w-5 md:h-5 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                        <span>Go back</span>
                    </button>

                    <button className="btn-style text-white transition-colors duration-200 bg-primary hover:bg-[#76a524]">
                        <Link to='/'>Take me home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;