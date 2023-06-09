// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClassesPageCard from '../../components/ClassesPageCard/ClassesPageCard';
import useStudent from '../../hooks/useStudent';

const Classes = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [isStudent] = useStudent();

    useEffect(()=> {
        axios('http://localhost:5000/allClasses')
        .then(data => setAllClasses(data.data));
    }, []);

    return (
        <section className='md:w-[90%] 2xl:w-[70%] mx-auto my-20'>
            <h2 className='text-3xl font-bold mt-10 mb-7 text-center'>Our Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-12'>
                {
                    allClasses.map(singleClass => <ClassesPageCard key={singleClass._id} singleClass={singleClass} isStudent={isStudent} />)
                }
            </div>
        </section>
    );
};

export default Classes;