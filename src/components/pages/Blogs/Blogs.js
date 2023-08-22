import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import { MyContext } from '../../../App';
import SingIn from '../SignIn/SignIn';

const Blogs = () => {
    const { openModal, setOpenModal } = useContext(MyContext);

    return (
        <div className={openModal ? 'modal-parent-height svg-container' : 'svg-container'}>
            <div className='absolute w-full z-50'>
                {
                    openModal
                    &&
                    <SingIn setOpenModal={setOpenModal} openModal={openModal}></SingIn>
                }
            </div>
            <div><Navbar></Navbar></div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Blogs;