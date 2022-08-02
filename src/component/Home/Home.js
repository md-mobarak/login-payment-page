import React from 'react';
import Login from '../Login.js/Login';
import Payment from '../Payemnt/Payment';

const Home = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <Login></Login>
            <Payment></Payment>
        </div>
    );
};

export default Home;