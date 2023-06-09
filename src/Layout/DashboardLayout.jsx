// eslint-disable-next-line no-unused-vars
import React from 'react';
import DashboardNavigation from '../components/Shared/DashboardNavigation/DashboardNavigation';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const DashboardLayout = () => {
    return (
        <>
            <DashboardNavigation />
            <Outlet />
            <Footer />
        </>
    );
};

export default DashboardLayout;