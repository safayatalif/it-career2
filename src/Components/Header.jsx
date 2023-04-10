import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-container'>
            <Link className='text-xl md:text-3xl font-bold' to='/'>IT.<span className='text-violet-700 underline'>Career</span></Link>
            <ul className='md:flex gap-8 hidden'>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/statistics">Statistics</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/applied">Applied Jobs</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/blog">Blog</NavLink></li>
            </ul>
            <div className="dropdown dropdown-hover md:hidden">
                <label tabIndex={0} className="font-bold text-4xl">...</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto">
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/blog">Blog</NavLink></li>
                    <li><NavLink className={`w-36 ${({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')}`} to="/applied">Applied Jobs</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-400 font-medium' : '')} to="/statistics">Statistics</NavLink></li>
                </ul>
            </div>
            <Link to="/applied" className='my-btn'>Star Applying</Link>
        </nav>
    );
};

export default Header;