import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
        toast.success("WoW Successfully Sign Up")

    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content ">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="card-body">
                                <h1 className='uppercase text-center text-2xl'>Login</h1>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                        placeholder="email"
                                        {...register("email", { required: true })}
                                        class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="text"
                                        placeholder="password"
                                        {...register("password", { required: true })}
                                        class="input input-bordered" />
                                    <label class="label">
                                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;