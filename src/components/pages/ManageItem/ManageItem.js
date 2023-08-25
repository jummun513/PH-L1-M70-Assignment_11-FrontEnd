import React, { useContext, useState } from 'react';
import './ManageItem.css';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import SingIn from '../SignIn/SignIn';
import { MyContext } from '../../../App';
import useFetchData from '../../../hooks/useFetchData';
import Loading from '../../shared/Loading/Loading';
import CarCart from '../Inventory/CarCart/CarCart';
import ConfirmModal from '../../shared/ConfirmModal/ConfirmModal';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import axios from 'axios';

const ManageItem = () => {
    const [checked, setChecked] = useState(false);
    const { openSignInModal, setOpenSignInModal } = useContext(MyContext);
    const [cars, loading, setCars] = useFetchData('http://localhost:5000/cars');
    const [confirmModel, setConfirmModal] = useState(false);
    const [targetId, setTargetId] = useState('');
    const [targetTitle, setTargetTitle] = useState('');
    const [postLoading, setLoading] = useState(false);


    const targetLockelement = document.querySelector('#openConfirm');
    const componentDidMount = (id, title) => {
        setTargetId(id);
        setTargetTitle(title);
        setConfirmModal(true);
        disableBodyScroll(targetLockelement);
    };
    const componentWillUnmount = () => {
        setConfirmModal(false);
        clearAllBodyScrollLocks();
    };

    const handleDelete = () => {
        const url = `http://localhost:5000/car/${targetId}`;

        const postData = async () => {
            try {
                setLoading(true);
                const result = await axios.delete(url);
                const remaining = cars.filter(car => car._id !== targetId);
                setCars(remaining);
                setLoading(false);
            }
            catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        postData();

    }



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
            <div className='-mb-20 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto relative z-20 top-40 md:top-72'>
                <h1 className='text-primary text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-5xl text-center'>Manage Your Listing</h1>
                <div id='cart-container' className='gap-7 mt-10 md:mt-20'>
                    {
                        loading ? <Loading></Loading> : (cars.map((data, idx) => <CarCart key={idx} data={data} deleteBtn={componentDidMount} from='manage'></CarCart>))
                    }
                </div>
                {
                    confirmModel && <div><ConfirmModal from='delete' targetTitleFromDelete={targetTitle} componentWillUnmount={componentWillUnmount} okAction={handleDelete}></ConfirmModal></div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageItem;