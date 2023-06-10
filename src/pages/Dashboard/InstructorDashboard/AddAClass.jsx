// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddAClass = () => {
    return (
        <main role='main'>
            <Helmet>
                <title>Dashboard | Add Class</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-20'>Add A Class</h2>
        </main>
    );
};

export default AddAClass;