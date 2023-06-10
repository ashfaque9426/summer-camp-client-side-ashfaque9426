// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DashBoardHome = () => {
    return (
        <main role='main'>
            <Helmet>
                <title>Dashboard | Home</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-20'>Simple Dashboard Home Page</h2>
        </main>
    );
};

export default DashBoardHome;