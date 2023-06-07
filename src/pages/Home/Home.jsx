// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import HomePageSlider from '../../components/HomePageSlider/HomePageSlider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';

const Home = () => {
    return (
        <main role='main'>
            <HomePageSlider />
            <PopularInstructors />
            <PopularClasses />
        </main>
    );
};

export default Home;