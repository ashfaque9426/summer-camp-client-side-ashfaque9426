// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import HomePageSlider from '../../components/HomePageSlider/HomePageSlider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import { Helmet } from 'react-helmet-async';
import MyCustomSection from './MyCustomSection';

const Home = () => {
    return (
        <main role='main'>
            <Helmet>
                <title>Shutter Safari | Home</title>
            </Helmet>
            <HomePageSlider />
            <PopularInstructors />
            <PopularClasses />
            <MyCustomSection />
        </main>
    );
};

export default Home;