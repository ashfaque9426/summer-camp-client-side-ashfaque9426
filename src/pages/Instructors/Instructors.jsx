// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InstructorPageCard from '../../components/InstructorPageCard/InstructorPageCard';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        axios('http://localhost:5000/instructors')
        .then(data => {
            setInstructors(data.data);
        })
    }, [])
    return (
        <section className='md:w-[90%] 2xl:w-[70%] mx-auto my-20'>
            <h2 className='text-3xl font-bold mt-10 mb-7 text-center'>Our Instructors</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-12'>
              {
                instructors.map(instructor => <InstructorPageCard key={instructor._id} instructor={instructor}  />)
              }
            </div>
        </section>
    );
};

export default Instructors;