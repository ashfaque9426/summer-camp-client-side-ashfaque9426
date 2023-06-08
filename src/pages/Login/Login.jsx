// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, formState: { errors, dirtyFields } } = useForm({ defaultValues: { email: undefined, password: undefined } });
    const onSubmit = data => console.log(data);
    return (
        <main className='mt-32 mb-48 2xl:my-0 h-[calc(100vh-27vh)]'>
            <section className='flex flex-col justify-center items-center h-[100%]'>
                <h2 className='text-2xl text-center my-5 font-bold'>Please Register Here</h2>
                <div className='card md:w-1/2 max-w-sm shadow-2xl mx-auto py-10 px-7 border border-gray-500 rounded-xl'>
                    <h2 className='card-title font-bold mb-5'>Sign in to your account</h2>
                    <form className='flex flex-col space-y-8 dark:bg-base-100' onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <section className='flex flex-col space-y-2 h-20'>
                            <label className='font-bold' htmlFor="email">Your Email</label>
                            <input className='bg-white text-black px-3 py-2 border border-gray-500 rounded-md' type='email' placeholder='email' id='email' defaultValue="" {...register("email", { required: true })} />
                            {errors.email && <span>You must provide your email address</span>}
                        </section>

                        {/* include validation with required or other standard HTML validation rules */}
                        <section className='flex flex-col space-y-2 h-20'>
                            <label className='font-bold' htmlFor="password">Password</label>
                            <input className='bg-white text-black px-3 py-2 border border-gray-500 rounded-md' type='password' placeholder='password' id='password' {...register("password", { required: true, minLength: 6 })} />
                            {errors.password && <span>Password required and must be 6 characters</span>}
                        </section>
                        {/* errors will return when field validation fails  */}
                        
                        <p>New to this site? <Link to='/registration' className='underline'>Register Here</Link></p>

                        <input disabled={!dirtyFields.email || !dirtyFields.password || errors.email || errors.password ? true : false} className='btn' type="submit" value="Login" />
                    </form>
                    <hr className='border mt-5' />
                    <section className='flex justify-center'>
                        <button className="btn btn-circle mt-3">
                            G
                        </button>
                    </section>
                </div>
            </section>
        </main>
        
    );
};

export default Login;