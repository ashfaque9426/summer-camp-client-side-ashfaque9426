// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import useAdmin from '../../../hooks/useAdmin';
import { NavLink, useNavigate } from 'react-router-dom';
import useInstructor from '../../../hooks/useInstructor';
import useStudent from '../../../hooks/useStudent';

const DashboardNavigation = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    const navigate = useNavigate();
    const hangleLogout = () => {
        logOut()
        .then(() => {
            toast('logout successfull');
            navigate('/', {replace: true});
        })
    }
    const navOptions = <>
        {
            user && isAdmin && <>
                <li className="text-black">
                    <NavLink className={({isActive}) => isActive ? "underline underline-offset-8" : ""} to="/" >Home</NavLink>
                </li>
                <li className="text-black">
                    <NavLink className={({isActive}) => isActive ? "underline underline-offset-8" : ""} to="/dashboard/manageClasses" >Manage Classes</NavLink>
                </li>
                <li className="text-black">
                    <NavLink className={({isActive}) => isActive ? "underline underline-offset-8" : ""} to="/dashboard/manageUsers" >Manage Users</NavLink>
                </li>
            </>
        }
        {
            user && isInstructor && <>
                <li className="text-black">
                    <NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/" >Home</NavLink>
                </li>
                <li className="text-black">
                    <NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/dashboard/addAClass" >Add A Class</NavLink>
                </li>
                <li className="text-black">
                    <NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/dashboard/myClasses" >My Classes</NavLink>
                </li>
            </>
        }
        {
            user && isStudent && <>
                <li className="text-black">
                    <NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/" >Home</NavLink>
                </li>
                <li className="text-black">
                    <NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/dashboard/myEnrolledClasses" >Enrolled Classes</NavLink>
                </li>
                <li className="text-black">
                    <NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/dashboard/mySelectedClasses" >Selected Classes</NavLink>
                </li>
                <li className="text-black">
                    <NavLink className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} to="/dashboard/paymentHistory" >Payment History</NavLink>
                </li>  
            </>
        }
    </>
    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="#">
                            <h2 className="text-2xl font-bold text-black">Shutter Safari</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 text-center">
                            {navOptions}
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            <button
                                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <button
                        onClick={hangleLogout}
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavigation;