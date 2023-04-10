import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      
        <div className='grid grid-cols-12 md:p-4 p-5 bg-slate-600 items-center justify-center'>
           
            <div className='md:col-span-3 col-span-12 items-center '>
                <p className='text-4xl font-extrabold text-slate-950 md:ps-8 text-center p-2'>CareerFocus</p>
            
            </div>
            <div className='md:col-span-7 col-span-12 flex  ml-0 items-center justify-evenly font-bold text-white m-4 md:m-0'>
                <Link to="/">Home</Link>
                <Link to="/appliedJobs">Applied Jobs</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div className='col-span-12 md:col-span-2 border-2 bg-blue-600 text-white mx-auto md:px-3  md:py-3 rounded-lg font-semibold hover:bg-slate-700 p-2 m-2'><button>Start Applying</button></div>
        </div>
      
    );
};

export default Navbar;