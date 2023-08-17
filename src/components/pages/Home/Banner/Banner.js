import './Banner.css';
import data from '../../../../data/carouselData.json';
import Carousel from './Carousel/Carousel';
import Navbar from '../../../shared/Navbar/Navbar';

const Banner = () => {
    return (
        <div className='svg-container'>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Carousel data={data.slides}></Carousel>
            </div>
        </div>
    );
};

export default Banner;