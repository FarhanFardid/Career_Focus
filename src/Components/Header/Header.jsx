import React from 'react';
import user from '../../assets/All Images/user.png';
const Header = () => {
    return (
        <div className='grid grid-cols-12 gap-1 bg-slate-200'>
           <div className=' md:col-span-6 col-span-12 md:p-5 md:m-28 p-4 m-2'>

            <p className='md:text-5xl text-4xl font-semibold'>One Step Closer To Your <span className='text-purple-600'> Dream Job</span></p>
            <p className='pt-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

            <button className='bg-blue-600 text-white px-3 rounded-md py-2 mt-2 ms-24 md:ms-0'>Get Started</button>
</div>
           <div className='md:col-span-6  col-span-12 md:p-8 p-4 m-1'>
            <img src={user} alt="user" />
           </div>
        </div>
    );
};

export default Header;