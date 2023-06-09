// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { saveUser } from '../../apis/authFuncs';


const Login = () => {
    const [loginErr, setLoginErr] = useState('');
    const { signInWithEP, googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors, dirtyFields } } = useForm({ defaultValues: { email: undefined, password: undefined } });
    const onSubmit = data => {
        // console.log(data);
        setLoginErr("");
        signInWithEP(data.email, data.password)
        .then(userCredential => {
            const loggedUser = userCredential.user;
            if(loggedUser) {
                toast("Login Successfull");
                navigate(from, {replace: true});
            }
        })
        .catch(error => {
            setLoginErr(error.message)
        }) 
    };

    const handleGoogleLogin = () => {
        setLoginErr("");
        googleSignIn()
        .then(result => {
            const signedUser = result.user;
            if(signedUser) {
                const userInfo = {
                    image: signedUser.photoURL || "",
                    name: signedUser.displayName || "Unknown Name",
                    email: signedUser.email,
                    numberOfClasses: 0,
                    nameOfClasses: [],
                    numberOfStudents: 0,
                    role: "student"
                }
                saveUser(userInfo);
                toast("Google Signin Successfull");
                navigate(from, { replace: true });
            }
        })
        .catch(error => setLoginErr(error.message))
    }

    return (
        <main className='mt-32 mb-48 2xl:my-0 h-[calc(100vh-27vh)]'>
            <Helmet>
                <title>Shutter Safari | Login</title>
            </Helmet>
            <section className='flex flex-col justify-center items-center h-[100%]'>
                <h2 className='text-2xl text-center my-5 font-bold'>Please Login Here</h2>
                <div className='card md:w-1/2 max-w-sm shadow-2xl mx-auto py-10 px-7 border border-gray-500 rounded-xl'>
                    <h2 className='card-title font-bold mb-5'>Sign in to your account</h2>
                    <form className='flex flex-col space-y-8 dark:bg-base-100' onSubmit={handleSubmit(onSubmit)}>
                        {/* email */}
                        <section className='flex flex-col space-y-2 h-20'>
                            <label className='font-bold' htmlFor="email">Your Email</label>
                            <input className='bg-white text-black px-3 py-2 border border-gray-500 rounded-md' type='email' placeholder='email' id='email' defaultValue="" {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-500'>You must provide your email address</span>}
                        </section>

                        {/* password */}
                        <section className='flex flex-col space-y-2 h-20'>
                            <label className='font-bold' htmlFor="password">Password</label>
                            <input className='bg-white text-black px-3 py-2 border border-gray-500 rounded-md' type='password' placeholder='password' id='password' {...register("password", { required: true, minLength: 6 })} />
                            {errors.password && <span className='text-red-500'>Password required and must be 6 characters</span>}
                        </section>

                        {/* a path to registration  */}       
                        <p>New to this site? <Link to='/registration' className='underline'>Register Here</Link></p>

                        {/* disable login button to prevent login  */}     
                        <input disabled={!dirtyFields.email || !dirtyFields.password || errors.email || errors.password ? true : false} className='btn' type="submit" value="Login" />
                    </form>
                    <hr className='border mt-5' />
                    <section className='flex justify-center'>
                        <button onClick={handleGoogleLogin} className="btn btn-circle mt-3">
                            G
                        </button>
                    </section>
                </div>
                {
                    loginErr && <p className='text-red-500 my-10'>{loginErr}</p>
                }
            </section>
        </main>
        
    );
};

export default Login;