// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { saveUser } from '../../apis/authFuncs';
import { toast } from 'react-toastify';

const Registration = () => {
    const [error, setError] = useState("");
    const { createUser, updateUserProfile, logOut } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_KEY}`;
        setError("");

        fetch(url, {method: "POST", body: formData})
        .then(res => res.json())
        .then(imgData => {
            const imgUrl = imgData.data.display_url;
            const registerToServer = {
                image: imgUrl,
                name: data.name || 'unknown name',
                email: data.email,
                numberOfClasses: 0,
                nameOfClasses: [],
                numberOfStudents: 0,
                role: "student"
            }
            console.log(registerToServer, data);
            createUser(data.email, data.password)
            .then(result => {
                if(result) {
                    updateUserProfile(data.name, imgUrl)
                    .then(() => {
                        toast('User created and user profile updated');
                    })
                    // bellow function is for posting user to the mongodb server
                    saveUser(registerToServer);
                    logOut()
                    .then(() => navigate('/login', { replace: true }));
                }
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message);
        });
    };

    return (
        <main className='mt-36 mb-48 2xl:my-0  2xl:pb-16 h-[calc(100vh-10vh)]'>
            <Helmet>
                <title>Shutter Safari | Registration</title>
            </Helmet>
            <section className='flex flex-col justify-center items-center h-[100%]'>
                <h2 className='text-2xl text-center my-5 font-bold'>Please Register Here</h2>
                <div className='card md:w-1/2 max-w-sm shadow-2xl mx-auto py-10 px-7 border border-gray-500 rounded-xl'>
                    <h2 className='card-title font-bold mb-5'>Register your Account</h2>
                    <form className='flex flex-col space-y-8 dark:bg-base-100' onSubmit={handleSubmit(onSubmit)}>
                        {/* name bellow */}
                        <section className='flex flex-col space-y-2 h-20'>
                            <label className='font-bold' htmlFor="name">Your Name</label>
                            <input className='bg-white text-black px-3 py-2 border border-gray-500 rounded-md' type='text' placeholder='Your Name' id='name' defaultValue="" {...register("name")} />
                        </section>

                        {/* email bellow */}
                        <section className='flex flex-col space-y-2 h-20'>
                            <label className='font-bold' htmlFor="email">Your Email</label>
                            <input className='bg-white text-black px-3 py-2 border border-gray-500 rounded-md' type='email' placeholder='email' id='email' defaultValue="" {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-500'>You must provide your email address</span>}
                        </section>

                        {/* password */}
                        <section className='flex flex-col space-y-2   h-24'>
                            <label className='font-bold' htmlFor="password">Password</label>
                            <input name='password' className='bg-white text-black px-3 py-2 border border-gray-500 rounded-md' type='password' placeholder='password' id='password' {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})/ })} />
                            {errors.password && errors.password.type === 'required' && <span>Password is required</span>}
                            {errors.password && errors.password.type === 'minLength' && (
                                <span className='text-red-500'>Password must be at least 6 characters long</span>
                            )}
                            {errors.password && errors.password.type === 'pattern' && (
                                <span className='text-red-500'>
                                    Password must have at least one capital letter and one special character
                                </span>
                            )}
                        </section>

                        {/* confirm password  */}
                        <section className='flex flex-col space-y-2 h-20'>
                            <label className='font-bold' htmlFor="confirmPassword">Confirm Password</label>
                            <input name='confirmPassword' className='bg-white text-black px-3 py-2 border border-gray-500 rounded-md' type='password' placeholder='password' id='confirmPassword' {...register("confirmPassword", { required: true, validate: value => value === getValues('password') || 'The Passwords doesnot match' })} />
                            {errors.confirmPassword?.type === 'required' && <span className='text-red-500'>Password Confimation is required</span>}
                            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                        </section>

                        {/* upload image */}
                        <section className='flex flex-col space-y-2 h-28'>
                            <label className='font-bold' htmlFor="upload">Upload Image</label>
                            <input name='image' type='file' className="file-input w-full max-w-xs text-white" id='upload' {...register("image", { required: true })} />
                            {errors.image && <span>Image File is required</span>}
                        </section>

                        <p>Already have an account? <Link to='/login' className='underline'>Please Login</Link></p>

                        <input className='btn' type="submit" value="register" />
                    </form>
                    {/* errors */}
                    {
                        error && <p className='text-red-500 my-10'>{error}</p>
                    }
                </div>
            </section>
        </main>
    );
};

export default Registration;