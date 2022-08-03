import React from 'react';
import SignUp from '../Login.js/Signup';
import Payment from '../Payemnt/Payment';

const Home = () => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            <SignUp></SignUp>
            <Payment></Payment>
        </div>
    );
};

export default Home;