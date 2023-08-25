import React, { useContext, useEffect, useState } from 'react';
import './AddOne.css';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import SingIn from '../SignIn/SignIn';
import { MyContext } from '../../../App';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import axios from 'axios';
import ErrorModal from '../../shared/ErrorModal/ErrorModal';
import SuccessModal from '../../shared/SuccessModal/SuccessModal';
import Processing from '../../shared/Processing/Processing';

const AddOne = () => {
    const [checked, setChecked] = useState(false);
    const { openSignInModal, setOpenSignInModal } = useContext(MyContext);
    const [dealer, setDealer] = useState();
    const [model, setModel] = useState();
    const [price, setPrice] = useState();
    const [year, setYear] = useState();
    const [image, setImage] = useState();
    const [quantity, setQuantity] = useState();
    const [color, setColor] = useState();
    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [formData, setFormData] = useState({});
    const [postLoading, setLoading] = useState(false);

    const handleOnClick = () => {
        setFormData({
            car: dealer,
            car_model: model,
            car_model_year: year,
            car_color: color,
            quantity: quantity,
            price: `$ ${price}`,
            img: image,
        });
    };

    const targetLockelement = document.querySelector('#openConfirm');
    const successComponentDidMount = () => {
        setSuccessModal(true);
        disableBodyScroll(targetLockelement);
    };

    const errorComponentDidMount = () => {
        setErrorModal(true);
        disableBodyScroll(targetLockelement);
    };

    const componentWillUnmount = () => {
        setErrorModal(false);
        setSuccessModal(false);
        clearAllBodyScrollLocks();
    };

    useEffect(() => {
        // check if the object is empty or not
        if (Object.keys(formData).length !== 0) {
            const url = `http://localhost:5000/cars`;

            const postData = async () => {
                try {
                    setLoading(true);
                    const { data } = await axios.post(url, formData);
                    setLoading(false);
                    successComponentDidMount();
                }
                catch (error) {
                    console.error(error);
                    setLoading(false);
                    errorComponentDidMount();
                }
            }
            postData();
        }
    }, [formData]);

    return (
        <div id='openConfirm' className={openSignInModal ? 'modal-parent-height svg-container' : 'svg-container'}>
            <div className='absolute w-full z-50'>
                {
                    openSignInModal
                    &&
                    <SingIn setOpenSignInModal={setOpenSignInModal} openSignInModal={openSignInModal}></SingIn>
                }
            </div>
            <div className='relative'><Navbar></Navbar></div>
            <div className='z-20 md:-mb-20 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto relative top-36 -mb-20 md:top-72'>
                <h1 className='text-primary text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-5xl text-center'>Add One Item In Inventory</h1>
                <div className='mt-10 md:mt-20'>
                    <form action="#" className='flex flex-col px-5 py-10 bg-[#fafafa] rounded-lg'>
                        <div className="mb-6">
                            <label htmlFor="manufacturer" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Manufacturer or Dealer Name</label>
                            <input onChange={e => setDealer(e.target.value)} className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="manufacturer" id="manufacturer" placeholder='Tesla' />
                            {
                                !dealer && <p className='text-xs mt-1 sm:text-sm text-red-600'>This field is required.</p>
                            }
                        </div>
                        <div className="mb-6">
                            <label htmlFor="car_model" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Car Model</label>
                            <input onChange={e => setModel(e.target.value)} className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="car_model" id="car_model" placeholder='X series' />
                            {
                                !model && <p className='text-xs mt-1 sm:text-sm text-red-600'>This field is required.</p>
                            }
                        </div>
                        <div className="mb-6">
                            <label htmlFor="car-color" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Car Color</label>
                            <input onChange={e => setColor(e.target.value)} className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="car_color" id="car_color" placeholder='Blue' />
                            {
                                !color && <p className='text-xs mt-1 sm:text-sm text-red-600'>This field is required.</p>
                            }
                        </div>
                        <div className="mb-6">
                            <label htmlFor="release" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Release Year</label>
                            <input onChange={e => setYear(e.target.value)} className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="number" name="release" id="release" placeholder='2019' />
                            {
                                !year && <p className='text-xs mt-1 sm:text-sm text-red-600'>This field is required.</p>
                            }
                        </div>
                        <div className="mb-6">
                            <label htmlFor="car_price" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Single Item Price. (In US Dollar - $)</label>
                            <input onChange={e => setPrice(e.target.value)} className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="number" step={0.01} name="car_price" id="car_price" placeholder='1265.12' />
                            {
                                !price && <p className='text-xs mt-1 sm:text-sm text-red-600'>This field is required.</p>
                            }
                        </div>
                        <div className="mb-6">
                            <label htmlFor="quantity" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Available Quantity</label>
                            <input onChange={e => setQuantity(e.target.value)} className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="number" name="quantity" id="quantity" placeholder='10' />
                            {
                                !quantity && <p className='text-xs mt-1 sm:text-sm text-red-600'>This field is required.</p>
                            }
                        </div>
                        <div className="mb-6">
                            <label htmlFor="img_link" className="md:text-base block mb-2 text-sm font-semibold text-gray-900">Image Hosting Link</label>
                            <input onChange={e => setImage(e.target.value)} className='md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="img_link" id="img_link" placeholder='https://i.ibb.co/ZBwN1QS/bmw.png' />
                            {
                                !image && <p className='text-xs mt-1 sm:text-sm text-red-600'>This field is required.</p>
                            }
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input style={{ color: '#88c123' }} onClick={() => { setChecked(!checked) }} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">This will change on our store Database. Do you Agree?</label>
                        </div>
                        {
                            postLoading ? <div className=''><Processing></Processing></div> : <button onClick={handleOnClick} disabled={!checked || !dealer || !model || !year || !color || !quantity || !image || !price} type="button" className={(!checked || !dealer || !model || !year || !color || !quantity || !image || !price) ? 'text-white bg-[#87c123e3] font-semibold rounded-lg text-sm md:text-base w-full sm:w-auto px-5 py-2.5 text-center' : 'hover:bg-[#77a823] text-white bg-primary font-semibold rounded-lg text-sm md:text-base w-full sm:w-auto px-5 py-2.5 text-center'}>{(!checked || !dealer || !model || !year || !color || !quantity || !image || !price) ? 'Disabled' : 'Submit'}</button>
                        }
                    </form>
                </div>
                {
                    (successModal && <div><SuccessModal componentWillUnmount={componentWillUnmount} from={'addItem'}></SuccessModal></div>) ||
                    (errorModal && <div><ErrorModal componentWillUnmount={componentWillUnmount} from={'addItem'}></ErrorModal></div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddOne;