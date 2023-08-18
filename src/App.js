import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import Inventory from './components/pages/Inventory/Inventory';
import Blogs from './components/pages/Blogs/Blogs';
import About from './components/pages/About/About';
import NotFound from './components/shared/NotFound/NotFound';
import AddOne from './components/pages/AddOne/AddOne';
import Loading from './components/shared/Loading/Loading';


function App() {
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
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/add-items' element={<AddOne></AddOne>}></Route>
      <Route path='/loading' element={<Loading></Loading>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
