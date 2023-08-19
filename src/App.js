import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import Inventory from './components/pages/Inventory/Inventory';
import Blogs from './components/pages/Blogs/Blogs';
import About from './components/pages/About/About';
import NotFound from './components/shared/NotFound/NotFound';
import AddOne from './components/pages/AddOne/AddOne';
import Loading from './components/shared/Loading/Loading';
import SignIn from './components/pages/SignIn/SignIn';


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


  return (
    !preLoading &&
    <Routes>
      <Route path='/' element={<modalToggleContext.Provider value={{ openModal, setOpenModal }}><Home></Home></modalToggleContext.Provider>}></Route>
      <Route path='/inventory' element={<modalToggleContext.Provider value={{ openModal, setOpenModal }}><Inventory></Inventory></modalToggleContext.Provider>}></Route>
      <Route path='/blogs' element={<modalToggleContext.Provider value={{ openModal, setOpenModal }}><Blogs></Blogs></modalToggleContext.Provider>}></Route>
      <Route path='/about' element={<modalToggleContext.Provider value={{ openModal, setOpenModal }}><About></About></modalToggleContext.Provider>}></Route>
      <Route path='/add-items' element={<AddOne></AddOne>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
