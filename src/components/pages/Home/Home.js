import React, { useContext } from 'react';
import Banner from './Banner/Banner';
import LogoSlider from './LogoSlider/LogoSlider';
import url from '../../../data/logoData.json';
import Listing from './Listing/Listing';
import Footer from '../../shared/Footer/Footer';
import Subscribe from './Subscribe/Subscribe';
import SingIn from '../SignIn/SignIn';
import { MyContext } from '../../../App';
import './Home.css';


const Home = () => {
    const { openSignInModal, setOpenSignInModal } = useContext(MyContext);

    return (
        <div className={openSignInModal ? 'modal-parent-height' : ''}>
            <div className='absolute w-full z-50'>
                {
                    openSignInModal
                    &&
                    <SingIn setOpenSignInModal={setOpenSignInModal} openSignInModal={openSignInModal}></SingIn>
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