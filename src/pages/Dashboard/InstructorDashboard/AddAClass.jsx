// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AddAClassForm from '../../../components/AddAClassForm/AddAClassForm';

const AddAClass = () => {
    return (
        <main role='main'>
            <Helmet>
                <title>Dashboard | Add Class</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-20'>Add A Class</h2>
            <section className='mb-28 md:mb-72 md:px-20'>
                <AddAClassForm />
            </section>
        </main>
    );
};

export default AddAClass;