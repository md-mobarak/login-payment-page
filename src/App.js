import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login.js/Login';

function App() {
  return (
    <div className='px-8'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
