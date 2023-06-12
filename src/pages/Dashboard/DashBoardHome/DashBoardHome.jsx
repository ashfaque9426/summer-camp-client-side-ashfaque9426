// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import dashboardCover from '../../../assets/dashboardImages/dashboardCover.jpg';

const DashBoardHome = () => {
    const {user} = useAuth();
    return (
        <main role='main' className=' 2xl:h-[calc(100vh-38vh)] mb-20'>
            <Helmet>
                <title>Dashboard | Home</title>
            </Helmet>
            <section style={{ backgroundImage: `url(${dashboardCover})`}} className='h-1/2 py-5 lg:py-0 border bg-cover flex flex-col justify-center items-center'>
                <img className="w-36 h-36 rounded-full shadow-lg object-cover" src={user?.photoURL} alt="User Image" />
                <h2 className='text-3xl font-semibold text-center mt-5'>Hello! {user?.displayName}</h2>
            </section>
            <section className='w-[90%] md:w-3/4 mx-auto flex flex-col lg:flex-row mt-9 lg:space-x-9 justify-center items-center'>
                <div className='"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In Our Website every user has different role.</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">In this Dashboard section we are providing different functionality for our users based on their role</p>
                </div>
                <div className='"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No need to worry. Your activities only belongs to you</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here, If user is an Admin or Instructor or Student, Your privacy our concern. Your activities are in safe hands</p>
                </div>
                <div className='"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Explore different features that, you can work on with</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">In this section you can explore and figure out as a admin or normal user what you can do according to your preferrence</p>
                </div>
            </section>
            
        </main>
    );
};

export default DashBoardHome;