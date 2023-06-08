// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navOptions = <>
        <li><NavLink className={({ isActive }) => isActive ? "bg-transparent text-black underline underline-offset-8" : "bg-transparent text-black"} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "bg-transparent text-black underline underline-offset-8" : "bg-transparent text-black"} to='/login'>Instructors</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "bg-transparent text-black underline underline-offset-8" : "bg-transparent text-black"} to='/registration'>Classes</NavLink></li>
    </>
    return (
        <nav className='border border-b-slate-700'>
            <div className="navbar bg-transparent dark:bg-transparent dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-50">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Shutter Safari</a>
                </div>
                <div className="navbar-center hidden bg-transparent lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='btn' to='/login'>Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;