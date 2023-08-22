import { Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
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
import Processing from './components/shared/Processing/Processing';

export const MyContext = createContext();

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [preLoading, setPreLoading] = useState(true);
  const [displayUser, setDisplayUser] = useState(null);

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

    <MyContext.Provider value={{ openModal, setOpenModal, hideCross, displayUser, setDisplayUser }}>
      <Routes>
        {["/home", "/"].map((path, index) =>
          <Route path={path} element={<Home></Home>} key={index} />
        )}
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/user=items-add' element={<AddOne></AddOne>}></Route>
        <Route path='/user=manage-all-items' element={<ManageItem></ManageItem>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<SignIn openModal={true} hideCross={true}></SignIn>}></Route>
        <Route path='/process' element={<Processing></Processing>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
