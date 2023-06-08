// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularClassCard from '../../components/PopularClassCard/PopularClassCard';

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        axios('http://localhost:5000/popularClasses')
            .then(data => {
                setPopularClasses(data.data);
            })
    }, [])
    return (
        <section className='w-[95%] md:w-[90%] 2xl:w-[70%] mx-auto my-20'>
            <h2 className='text-3xl font-bold mt-10 mb-7 text-center'>Popular Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    popularClasses.map(popularClass => <PopularClassCard key={popularClass._id} popularClass={popularClass} />)
                }
            </div>
        </section>
    );
};

export default PopularClasses;