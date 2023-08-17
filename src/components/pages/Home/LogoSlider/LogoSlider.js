import React from 'react';
import './LogoSlider.css';


const LogoSlider = ({ data }) => {
    const shortData = data.slice(0, 8);

    return (
        <div id='logo-slider' className='md:mt-20 px-2 xsm:px-0 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='w-8/12'>
                    <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-3xl md:pb-5'>
                        Search By Car Brands
                    </h1>
                    <p className='text-xs sm:text-sm md:text-md lg:text-base text-gray-600'>We source our vehicle around the world. We take extra care while buying a vehicle to ensure you get only the best one.</p>
                </div>
                <div>
                    <button type='button' className='btn-style border-2 border-[#88C123] text-white bg-[#88C123] hover:bg-transparent hover:text-[#88C123]'>More Brands</button>
                </div>
            </div>
            <div id='container' className='my-4 md:my-10 py-3 md:py-5'>
                <div className="logos-slide">
                    {
                        shortData.map((item, idx) => {
                            return (
                                <img className='mx-1 xsm:mx-3 md:mx-5 xl:mx-8' loading='lazy' src={item.src} alt={item.alt} key={idx} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default LogoSlider;