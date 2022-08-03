import React from 'react';
import SignUp from '../Login.js/Signup';
import Payment from '../Payemnt/Payment';
import arrow from '../../images/arrow.png'
const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
                <SignUp></SignUp>
                <Payment></Payment>
            </div>
            <div className='flex items-center justify-between mt-10'>
                <div className='flex items-center justify-center'>
                    <img className='h-6 w-12' src={arrow} alt="" />
                    <p className='font-bold'>Back</p>
                </div>
                <div>
                    <button class="btn btn-wide bg-white rounded-full text-black">CONTINUE SHOPPING</button>
                    <button class="btn btn-wide bg-green-300 border-0 text-white mx-10 rounded-full "> PROCEED TO PAYMENT</button>

                </div>
            </div>
        </div>
    );
};

export default Home;