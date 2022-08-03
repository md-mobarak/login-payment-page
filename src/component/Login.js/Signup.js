import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
        console.log(data)
        reset()
        toast.success("WoW Successfully Sign Up")
    }

    return (
        <div>
            <h3 className="font-semibold text-xl ml-4 my-10">Shipping and Payment</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex mb-3 ml-[-25px]'>
                    <button onClick={() => navigate('/login')} className='text-white mx-10 rounded-full bg-green-300 px-5 py-2 bordered '>LOG IN</button>
                    <button className='text-white rounded-full bg-green-300 px-5 py-2 bordered'>SIGN UP</button>
                </div>
                <p className='my-3 ml-4'>Shipping Information</p>
                <div className='grid grid-cols-2 gap-x-0 gap-y-4 '>

                    <input type="text"
                        placeholder="Email"
                        {...register("email", { required: true })}
                        class="input input-bordered input-md w-full max-w-xs rounded-full" />


                    <input type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                        class="input input-bordered input-md w-full max-w-xs rounded-full" />

                    <input type="text"
                        placeholder="First Name"
                        {...register("First Name", { required: true })}
                        class="input input-bordered input-md w-full max-w-xs rounded-full" />

                    <input type="text"
                        placeholder="City"
                        {...register("City", { required: true })}
                        class="input input-bordered input-md w-full max-w-xs rounded-full" />

                    <input type="text"
                        placeholder="Last Name"
                        {...register("Last Name", { required: true })}
                        class="input input-bordered input-md w-full max-w-xs rounded-full" />

                    <input type="text"
                        placeholder="Postal code/ZIP"
                        {...register("Postal code/ZIP", { required: true })}
                        class="input input-bordered input-md w-full max-w-xs rounded-full" />

                    <input type="text"
                        placeholder="Phone Number"
                        {...register("Phone Number", { required: true })}
                        class="input input-bordered input-md w-full max-w-xs rounded-full" />

                    <select id="cars"  {...register("gender", { required: true })}
                        className='input input-bordered input-md w-full max-w-xs rounded-full'>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="india">India</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="sri lanka">Sri Lanka</option>
                    </select>

                </div>
            </form>
        </div>
    );
};

export default SignUp;