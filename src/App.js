import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
