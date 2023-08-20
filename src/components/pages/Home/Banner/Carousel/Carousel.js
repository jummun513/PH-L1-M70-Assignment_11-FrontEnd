import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';

const Carousel = ({ data }) => {
    const timeref = useRef(null);

    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    useEffect(() => {
        timeref.current = setTimeout(() => {
            nextSlide();
        }, 3000);
    });

    return (
        <div id='carousel' className="flex px-2 xsm:px-0 justify-center items-center relative -top-14 xsm:top-0 sm:top-14 md:top-24 xl:top-40 max-w-[380px] xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto">
            <button type="button" className='px-2 py-1 rounded-sm md:rounded bg-primary hover:bg-secondary ease-linear duration-150' onClick={prevSlide}>
                <LiaLongArrowAltLeftSolid className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white font-semibold" />
            </button>
            <div className='carousel-image'>
                {data.map((item, idx) => {
                    return (
                        <div key={idx} className='flex flex-col justify-center items-center'>
                            <h1 className={slide === idx ? "block text-base text-center xsm:text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 sm:pb-3 md:pb-4 lg:pb-6 font-bold text-white" : "hidden"}>{item.heading}</h1>
                            <p className={slide === idx ? "block text-xs text-center sm:text-sm md:text-base pb-2 sm:pb-3 lg:pb-5 font-medium text-white" : "hidden"}><span className='text-[#faa03f]'>$395 Per Months</span> 0% ARP Representative</p>
                            <div className={slide === idx ? "flex pb-10" : "hidden"}>
                                <button type='button' className='btn-style border-2 text-white border-primary  bg-primary hover:bg-transparent hover:text-primary mr-2 sm:mr-3 md:mr-4'>Buy Now</button>
                                <button type='button' className='btn-style border-2 text-primary xxl:text-white xxl:border-white border-primary bg-transparent hover:bg-primary xxl:hover:bg-white hover:text-white xxl:hover:text-primary'>Learn More</button>
                            </div>
                            <img loading='lazy'
                                src={item.src}
                                alt={item.alt}
                                key={idx}
                                className={slide === idx ? "block slide" : "slide hidden"}
                            />
                        </div>
                    );
                })}
            </div>
            <button type="button" className='px-2 py-1 rounded-sm md:rounded bg-primary hover:bg-secondary ease-linear duration-150' onClick={nextSlide}>
                <LiaLongArrowAltRightSolid className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white font-semibold" />
            </button>
        </div>
    );
};

export default Carousel;