import React from 'react';
import './CarCart.css';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';

const CarCart = ({ data, liked, wished, user }) => {
    return (
        <div id='cart' className='p-3 pb-5 mx-3 xsm:mx-0'>
            <div className="cart-img-container max-w-80">
                <img className='cart-img max-w-80' src={data.img} alt={data.car + 'car picture'} />
            </div>
            <div className="flex flex-col justify-between">
                <div className="cart-text pt-5 px-3">
                    <h2 className='text-lg font-semibold text-gray-700'>Manufacturer: {data.car}</h2>
                    <h3 className='text-base font-semibold text-gray-500 pt-3'>Model: {data.car_model}</h3>
                    <h3 className='text-base font-semibold text-gray-500 pt-1'>Color: {data.car_color}</h3>
                    <h3 className='text-base font-semibold text-gray-500 pt-1'>Release Year: {data.car_model_year}</h3>
                    <h3 className='text-base font-semibold text-gray-500 pt-1'>Price: <span className='text-gray-800 text-lg'>{data.price}</span></h3>
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <div className='flex justify-between items-center'><AiFillLike title='Like' className='h-8 w-8 mr-3 cursor-pointer' fill={liked ? '#88C123' : '#87c12361'}></AiFillLike> <BsFillBookmarkPlusFill title='Add to wish-list.' fill={wished ? '#88C123' : '#87c12361'} className='h-7 w-7 cursor-pointer'></BsFillBookmarkPlusFill></div>
                    {
                        user ? <button type="button" className='btn-style border-2 border-[#88C123] text-white bg-[#88C123] hover:bg-transparent hover:text-[#88C123]'>Update</button> : <button type="button" className='btn-style border-2 border-[#88C123] text-white bg-[#88C123] hover:bg-transparent hover:text-[#88C123]'>Buy Now</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default CarCart;