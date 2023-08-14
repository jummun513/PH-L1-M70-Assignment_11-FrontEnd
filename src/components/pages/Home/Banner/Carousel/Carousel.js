import React, { useState } from 'react';
import './Carousel.css';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';

const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    return (
        <div id='carousel' className="flex justify-center items-center relative top-32">
            <button type="button" className='px-2 py-1 rounded bg-red-500 hover:bg-red-600 ease-linear duration-150' onClick={prevSlide}>
                <LiaLongArrowAltLeftSolid className="h-8 w-8 text-white" />
            </button>
            <div className='carousel-image'>
                {data.map((item, idx) => {
                    return (
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className={slide === idx ? "block text-4xl pb-5 font-bold text-white" : "hidden"}>{item.heading}</h1>
                            <p className={slide === idx ? "block pb-5 font-medium text-white" : "hidden"}><span className='text-[#faa03f]'>$395 Per Months</span> 0% ARP Representative</p>
                            <div className={slide === idx ? "flex pb-10" : "hidden"}>
                                <button type='button' className='mr-4 border-2 border-red-500 px-5 py-2 text-sm font-semibold bg-red-500 text-white hover:bg-red-600 ease-linear duration-150 rounded'>Buy Now</button>
                                <button type='button' className='border-2 border-white text-white px-5 py-2 text-sm font-semibold bg-transparent hover:bg-white hover:text-black ease-linear duration-150 rounded'>Learn More</button>
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
            <button type="button" className='px-2 py-1 rounded bg-red-500 hover:bg-red-600 ease-linear duration-150' onClick={nextSlide}>
                <LiaLongArrowAltRightSolid className="h-8 w-8 text-white" />
            </button>
        </div>
    );
};

export default Carousel;