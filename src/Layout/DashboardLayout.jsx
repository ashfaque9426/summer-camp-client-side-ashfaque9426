// eslint-disable-next-line no-unused-vars
import React from 'react';
import DashboardNavigation from '../components/Shared/DashboardNavigation/DashboardNavigation';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import DashBoardHome from '../pages/Dashboard/DashBoardHome/DashBoardHome';

const DashboardLayout = () => {
    const location = useLocation();
    return (
        <>
            <Helmet>
                <title>Shutter Suffari | Dashboard</title>
            </Helmet>
            <DashboardNavigation />
            {
                location.pathname.includes('dashboard') && !location.pathname.includes('dashboard/') && <DashBoardHome />
            }
            <Outlet />
            <Footer />
        </>
    );
};

export default DashboardLayout;