import Navbar from '../../shared/Navbar/Navbar';
import useFetchData from '../../../hooks/useFetchData';
import Loading from '../../shared/Loading/Loading';

const Inventory = () => {
    const [cars, loading, setCars] = useFetchData('http://localhost:5000/cars');

    return (
        <div className='svg-container'>
            <Navbar></Navbar>
            {
                loading && <Loading></Loading>
            }
            <h1 className='text-5xl top-36 text-white'>This is Inventory - {cars.length}</h1>
        </div>
    );
};

export default Inventory;