// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
    return (
        <main role='main'>
            <Helmet>
                <title>Dashboard | My Classes</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-20'>My Classes</h2>
        </main>
    );
};

export default MyClasses;