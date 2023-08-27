import React, { useContext, useEffect, useState } from 'react';
import './CarCart.css';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../../App';
import axios from 'axios';

const CarCart = ({ data, liked, deleteBtn, from }) => {
    const { displayUser, wishedItem, setWishedItem } = useContext(MyContext);
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState(false);
    const [postLoading, setLoading] = useState(false);
    const [isButtonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        if (displayUser !== null) {
            wishedItem.wishedItemId?.find(id => id == data._id) && setWishlist(true);
        }
    }, [data._id, displayUser])

    const handleWishlist = (id) => {
        setButtonClicked(true);
        const remaining = wishedItem.wishedItemId?.filter(_id => _id !== id);
        setWishlist(!wishlist);
        if (displayUser !== null) {
            if (wishlist === false) {
                setWishedItem(prevData => ({
                    ...prevData,
                    wishedItemId: [...remaining, id]
                }));
            }
            else {
                setWishedItem(prevData => ({
                    ...prevData,
                    wishedItemId: [...remaining]
                }));
            }
        }
        else {
            navigate('/login');
        }
    }

    useEffect(() => {
        if (isButtonClicked) {
            if ((Object.keys(wishedItem).length !== 0)) {
                const url = `http://localhost:5000/users`;

                const postData = async () => {
                    try {
                        setLoading(true);
                        const { data } = await axios.post(url, wishedItem)
                        setLoading(false);
                    } catch (error) {
                        console.error(error);
                        setLoading(false);
                    }
                }
                postData();
            }
        }
    }, [wishlist])


    const singleCarPage = id => {
        navigate(`/single-car-details/${id}`);
    }

    const navigateToUpdate = id => {
        navigate(`/user=manage-all-items/update-item/${id}`);
    }

    return (
        <div id='cart' className='p-3 pb-5 mx-3 xsm:mx-0'>
            <div className="cart-img-container max-w-80">
                <img loading='lazy' className='cart-img max-w-80' src={data.img} alt={data.car + 'car picture'} />
            </div>
            <div className="flex flex-col justify-between">
                <div className="cart-text pt-5 px-3">
                    <h2 className='text-lg font-semibold text-gray-700'>Manufacturer: {data.car}</h2>
                    <h3 className='text-base font-semibold text-gray-500 pt-3'>Model: {data.car_model}</h3>
                    <h3 className='text-base font-semibold text-gray-500 pt-1'>Color: {data.car_color}</h3>
                    <h3 className='text-base font-semibold text-gray-500 pt-1'>Release Year: {data.car_model_year}</h3>
                    <h3 className='text-base font-semibold text-gray-500 pt-1'>Price: <span className='text-gray-800 text-lg'>{data.price}</span></h3>
                </div>
                {
                    ((from === 'manage') &&
                        <div className='flex justify-between items-center mt-5'>
                            <button onClick={() => deleteBtn(data._id, data.car)} type="button" className='btn-style text-white bg-red-600 hover:bg-red-700'>Delete</button>
                            <button onClick={() => navigateToUpdate(data._id)} type="button" className='btn-style border-2 border-primary text-white bg-primary hover:bg-transparent hover:text-primary'>Update</button>
                        </div>)
                    ||
                    ((from === 'inventory' || 'listing' || 'wishlist') &&
                        <div className='flex justify-between items-center mt-5'>
                            <div className='flex justify-between items-center'><AiFillLike title='Like' className='h-8 w-8 mr-3 cursor-pointer' fill={liked ? '#88C123' : '#87c12361'}></AiFillLike> <BsFillBookmarkPlusFill onClick={() => handleWishlist(data._id)} title='Add to wish-list.' fill={wishlist ? '#88C123' : '#87c12361'} className='h-7 w-7 cursor-pointer'></BsFillBookmarkPlusFill></div>
                            <button onClick={() => singleCarPage(data._id)} type="button" className='btn-style border-2 border-primary text-white bg-primary hover:bg-transparent hover:text-primary'>See Details</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default CarCart;