import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center px-2 md:px-8 py-4 rounded-md shadow-sm'>
            <Link className='text-2xl font-bold' to='/'>IT Career</Link>
            <ul className='md:flex gap-8 hidden'>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/statistics">Statistics</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/applied">Applied Jobs</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/blog">Blog</NavLink></li>
            </ul>
            <div className="dropdown dropdown-hover md:hidden">
                <label tabIndex={0} className="font-bold text-4xl">...</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto">
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/blog">Blog</NavLink></li>
                    <li><NavLink className={`w-36 ${({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')}`} to="/applied">Applied Jobs</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/statistics">Statistics</NavLink></li>
                </ul>
            </div>
            <Link to="/applied" className='btn bg-gradient-to-r from-violet-800 to-indigo-500 rounded-md'>Star Applying</Link>
        </nav>
    );
};

export default Header;