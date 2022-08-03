import React from 'react';
import shipping from '../../images/shipping-icon.png'
const Cart = () => {
    return (
        <div>
            <section className='flex justify-around items-center'>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src="https://www.nicepng.com/png/detail/73-733597_guy-png-picture-ok-man-png.png" />
                    </div>
                    <h5 className='font-semibold ml-3'>T-shirt <br /> Summer Vibes</h5>
                </div>
                <h2 className='font-semibold '>$20</h2>
            </section>
            <section className='flex justify-around items-center mt-4'>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src="https://p.kindpng.com/picc/s/502-5027934_black-tshirt-model-png-transparent-png.png" />
                    </div>
                    <h5 className='font-semibold ml-3'>Basic slim <br /> Summer Vibes</h5>
                </div>
                <h2 className='font-semibold '>$20</h2>
            </section>
            <div className='flex justify-center mt-10'>
                <div className='flex justify-center ' style={{ backgroundColor: '#C0C0C0', width: '75%', borderRadius: '20px', padding: '10px 15px' }}>
                    <p>Total Cost</p>
                    <p className='ml-6'>$40</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <img className='w-7 h-5' src={shipping} alt="" />
                <h4 className='ml-8 font-semibold'>You Are $30.9 away <br /> from free Shipping</h4>
            </div>
        </div>
    );
};

export default Cart;