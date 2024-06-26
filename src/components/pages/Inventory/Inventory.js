import Navbar from '../../shared/Navbar/Navbar';
import useFetchData from '../../../hooks/useFetchData';
import Loading from '../../shared/Loading/Loading';
import CarCart from './CarCart/CarCart';
import './Inventory.css';
import { useContext, useState } from 'react';
import Footer from '../../shared/Footer/Footer';
import { MyContext } from '../../../App';
import SingIn from '../SignIn/SignIn';

const Inventory = () => {
    const [cars, loading, setCars] = useFetchData('https://server-auto-hive.vercel.app/cars');
    const [isLiked, setLiked] = useState(false);
    const [isWished, setWished] = useState(false);
    const user = false;
    const { openSignInModal, setOpenSignInModal } = useContext(MyContext);

    return (
        <div className={openSignInModal ? 'modal-parent-height svg-container' : 'svg-container'} >
            <div className='absolute w-full z-50'>
                {
                    openSignInModal
                    &&
                    <SingIn setOpenSignInModal={setOpenSignInModal} openSignInModal={openSignInModal}></SingIn>
                }
            </div>
            <div className='relative'><Navbar></Navbar></div>
            <div className='-mb-20 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto relative z-20 top-40 md:top-72'>
                <h1 className='text-primary text-base sm:text-lg md:text-xl lg:text-2xl xxl:text-5xl text-center'>All Listing Cars</h1>
                <div id='cart-container' className='gap-7 mt-10 md:mt-20'>
                    {
                        loading ? <Loading></Loading> : (cars.map((data, idx) => <CarCart key={idx} data={data} liked={isLiked} wished={isWished} user={user} from='inventory'></CarCart>))
                    }
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Inventory;