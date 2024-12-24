import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Header = ({ id }) => {
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user data from localStorage
        navigate('/'); // Navigate to the login page (or any other page you want)
    };

    return (
        <>
            <nav className="container w-full bg-black py-3 px-3 text-white flex justify-between items-center">
                <h5>Grading Application</h5>
                <form onSubmit={(e) => { e.preventDefault(); handleLogout(); }}>
                    <button type="submit" className="text-sm bg-red-900 text-white py-2 px-2">
                        Logout
                    </button>
                </form>
            </nav>
            <nav className="bg-gray-200 mt-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 py-3">
                <ul className="list-none flex justify-end gap-5 px-3">
                    <li>
                        <button 
                            onClick={() => navigate(`/profile/${id}`)} 
                            className="bg-white py-2 px-2 rounded-sm hover:bg-red-900 hover:text-white transition-colors duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => navigate(`/feedback/${id}`)} 
                            className="bg-white py-2 px-2 rounded-sm hover:bg-red-900 hover:text-white transition-colors duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
