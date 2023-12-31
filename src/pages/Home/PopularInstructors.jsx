// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularInstructorCard from '../../components/PopularInstructorCard/PopularInstructorCard';

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(()=> {
        axios('https://b7a12-summer-camp-server-side-ashfaque9426.vercel.app/popularInstructors')
            .then(data => setPopularInstructors(data.data));
    }, [])
    return (
        <section className='md:w-[90%] 2xl:w-[70%] mx-auto my-20'>
            <h2 className='text-3xl font-bold mt-10 mb-7 text-center'>Popular Instructors</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-16'>
                {
                    popularInstructors.map(popularInstructor => <PopularInstructorCard key={popularInstructor._id} popularInstructor={popularInstructor} />)
                }
            </div>
        </section>
    );
};

export default PopularInstructors;