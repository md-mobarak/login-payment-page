import React from 'react';

const Login = () => {
    return (
        <div>
            <h3 className="font-semibold text-xl ml-4 my-10">Shipping and Payment</h3>
            <form >
                <div className='flex mb-3 ml-[-25px]'>
                    <button className='text-white mx-10 rounded-full bg-green-300 px-5 py-2 bordered '>LOG IN</button>
                    <button className='text-white rounded-full bg-green-300 px-5 py-2 bordered'>SIGN UP</button>
                </div>
                <p className='my-3 ml-4'>Shipping Information</p>
                <div className='grid grid-cols-2 gap-x-0 gap-y-4 '>

                    <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs rounded-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs rounded-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs rounded-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs rounded-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs rounded-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs rounded-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs rounded-full" />
                    <select id="cars" className='input input-bordered input-md w-full max-w-xs rounded-full'>
                        <option value="volvo">Bangladesh</option>
                        <option value="saab">India</option>
                        <option value="opel">Pakistan</option>
                        <option value="audi">Sri Lanka</option>
                    </select>

                </div>
            </form>
        </div>
    );
};

export default Login;