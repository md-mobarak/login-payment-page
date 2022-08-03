import React from 'react';
import Cart from './Cart';
import cart from '../../images/cart-icon-png.png'
import shipping from '../../images/shipping-icon.png'
import ideal from '../../images/ideal.jpg'
import visa from '../../images/visa.jpg'
import paypal from '../../images/paypal.png'
import masterCard from '../../images/mastercard.png'
import discover from '../../images/discover_2.png'
import dnl from '../../images/dnl.jpg'
import fedex from '../../images/feedex.png'
import inpost from '../../images/inpost.png'
import dpd from '../../images/dpdpng.png'


const Payment = () => {
    return (
        <div>
            <div className='flex justify-evenly mt-12 mr-16 ml-24'>

                <img className='w-7 h-5 ml-[200px]' src={cart} alt="" />
                <img className='w-7 h-5' src={shipping} alt="" />
            </div>
            <div className='grid grid-cols-2 mt-12 gap-2'>
                <section>
                    <h4 className='font-semibold mb-3'>Payment Method</h4>
                    <div className='grid grid-cols-3 gap-3'>
                        <img className='rounded-lg w-20 h-12' src={paypal} alt="" />
                        <img className='rounded-lg w-20 h-12' src={visa} alt="" />
                        <img className='rounded-lg w-20 h-12' src={masterCard} alt="" />
                        <img className='rounded-lg w-20 h-12' src={masterCard} alt="" />
                        <img className='rounded-lg w-20 h-12' src={discover} alt="" />
                        <img className='rounded-lg w-20 h-12' src={ideal} alt="" />
                    </div>
                    <div className='mt-10'>
                        <h4 className='font-semibold mb-3'>Delivery Method</h4>
                        <div className='grid grid-cols-2 gap-3'>

                            <div className='flex  items-center justify-center' style={{ border: 'solid gray 1px', borderRadius: '15px' }}>
                                <img className='h-12 w-20' src={inpost} alt="" />
                                <h1 className='ml-3 font-semibold'>$20</h1>
                            </div>
                            <div className='flex  items-center justify-center' style={{ border: 'solid gray 1px', borderRadius: '15px' }}>
                                <img className='h-8 w-20' src={dpd} alt="" />
                                <h1 className='ml-3 font-semibold'>$29</h1>
                            </div>
                            <div className='flex  items-center justify-center' style={{ border: 'solid gray 1px', borderRadius: '15px' }}>
                                <img className='h-12 w-20' src={dnl} alt="" />
                                <h1 className='ml-3 font-semibold'>$26</h1>
                            </div>
                            <div className='flex  items-center justify-center' style={{ border: 'solid gray 1px', borderRadius: '15px' }}>
                                <img className='h-6 w-20' src={fedex} alt="" />
                                <h1 className='ml-3 font-semibold'>$99</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h4 className='font-semibold mb-3 ml-16'>Your Cart</h4>
                    <Cart></Cart>
                </section>
            </div>

        </div>
    );
};

export default Payment;