import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Inventory from './components/pages/Inventory/Inventory';
import Blogs from './components/pages/Blogs/Blogs';
import About from './components/pages/About/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
  );
}

export default App;
