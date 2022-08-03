import React from 'react';

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
        </div>
    );
};

export default Cart;