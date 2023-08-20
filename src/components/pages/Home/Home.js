import React, { useContext } from 'react';
import Banner from './Banner/Banner';
import LogoSlider from './LogoSlider/LogoSlider';
import url from '../../../data/logoData.json';
import Listing from './Listing/Listing';
import Footer from '../../shared/Footer/Footer';
import Subscribe from './Subscribe/Subscribe';
import SingIn from '../SignIn/SignIn';
import { modalToggleContext } from '../../../App';


const Home = () => {
    const { openModal, setOpenModal } = useContext(modalToggleContext);

    return (
        <div className={openModal ? 'modal-parent-height' : ''}>
            <div className='absolute w-full z-50'>
                {
                    openModal
                    &&
                    <SingIn setOpenModal={setOpenModal} openModal={openModal}></SingIn>
                }
            </div>
            <div>
                <Banner></Banner>
                <LogoSlider data={url.items}></LogoSlider>
                <Listing></Listing>
                <Subscribe></Subscribe>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;