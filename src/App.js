import { Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import Inventory from './components/pages/Inventory/Inventory';
import Blogs from './components/pages/Blogs/Blogs';
import About from './components/pages/About/About';
import NotFound from './components/shared/NotFound/NotFound';
import AddOne from './components/pages/AddOne/AddOne';
import SignIn from './components/pages/SignIn/SignIn';
import Registration from './components/pages/Registration/Registration';
import ManageItem from './components/pages/ManageItem/ManageItem';
import CarDetail from './components/pages/Inventory/CarDetail/CarDetail';
import CarUpdate from './components/pages/Inventory/CarUpdate/CarUpdate';
import StockUpdate from './components/pages/Inventory/StockUpdate/StockUpdate';
import RequireAuth from './components/shared/RequireAuth/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { app } from './firebase.init';
import Wishlist from './components/pages/Wishlist/Wishlist';
import LikedItem from './components/pages/LikedItem/LikedItem';
import Test from './test';
import axios from 'axios';
import useFetchData from './hooks/useFetchData';


const auth = getAuth(app);
export const MyContext = createContext();


function App() {
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [preLoading, setPreLoading] = useState(true);
  const [user] = useAuthState(auth);
  const [displayUser, setDisplayUser] = useState(null);
  const [wishedItem, setWishedItem] = useState({});
  const [postLoading, setLoading] = useState(false);

  useEffect(() => {
    if (user && (displayUser === null)) { setDisplayUser(user) };
  }, [user]);

  useEffect(() => {
    if ((displayUser !== null) && (displayUser?.email !== undefined)) {
      const url = `http://localhost:5000/user/${displayUser?.email}`;
      const fetchUserData = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(url);
          setWishedItem(data);
          setLoading(false);
        }
        catch (error) {
          console.error(error);
          setLoading(false);
        }
      }
      fetchUserData();
    }
  }, [displayUser]);


  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setPreLoading(false);
    }, 3000);
  }

  let hideCross = false;

  return (
    !preLoading &&

    <MyContext.Provider value={{ wishedItem, setWishedItem, openSignInModal, setOpenSignInModal, hideCross, displayUser, setDisplayUser }}>
      <Routes>
        {["/home", "/"].map((path, index) =>
          <Route path={path} element={<Home></Home>} key={index} />
        )}
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<SignIn openSignInModal={true} hideCross={true}></SignIn>}></Route>
        <Route path='/single-car-details/:carId' element={<CarDetail></CarDetail>}></Route>
        <Route path='/user=add-items' element={<RequireAuth><AddOne></AddOne></RequireAuth>}></Route>
        <Route path='/user=manage-all-items' element={<RequireAuth><ManageItem></ManageItem></RequireAuth>}></Route>
        <Route path='/user=manage-all-items/update-item/:carId' element={<RequireAuth><CarUpdate></CarUpdate></RequireAuth>}></Route>
        <Route path='/user=car-stock-manage/:carId' element={<RequireAuth><StockUpdate></StockUpdate></RequireAuth>}></Route>
        <Route path='/user=wishlist' element={<RequireAuth><Wishlist></Wishlist></RequireAuth>}></Route>
        <Route path='/user=liked-items' element={<RequireAuth><LikedItem></LikedItem></RequireAuth>}></Route>
        <Route path='/test' element={<Test></Test>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
