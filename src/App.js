import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import Inventory from './components/pages/Inventory/Inventory';
import Blogs from './components/pages/Blogs/Blogs';
import About from './components/pages/About/About';
import NotFound from './components/shared/NotFound/NotFound';
import AddOne from './components/pages/AddOne/AddOne';
import SignIn from './components/pages/SignIn/SignIn';
import Registration from './components/pages/Registration/Registration';


export const modalToggleContext = createContext();
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [preLoading, setPreLoading] = useState(true);
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
    <Routes>
      <Route path='/' element={<modalToggleContext.Provider value={{ openModal, setOpenModal, hideCross }}><Home></Home></modalToggleContext.Provider>}></Route>
      <Route path='/inventory' element={<modalToggleContext.Provider value={{ openModal, setOpenModal, hideCross }}><Inventory></Inventory></modalToggleContext.Provider>}></Route>
      <Route path='/blogs' element={<modalToggleContext.Provider value={{ openModal, setOpenModal, hideCross }}><Blogs></Blogs></modalToggleContext.Provider>}></Route>
      <Route path='/about' element={<modalToggleContext.Provider value={{ openModal, setOpenModal, hideCross }}><About></About></modalToggleContext.Provider>}></Route>
      <Route path='/user=items-add' element={<modalToggleContext.Provider value={{ openModal, setOpenModal, hideCross }}><AddOne></AddOne></modalToggleContext.Provider>}></Route>
      <Route path='/register' element={<Registration></Registration>}></Route>
      <Route path='/login' element={<SignIn openModal={true} hideCross={true}></SignIn>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
