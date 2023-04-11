import React from 'react';


  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCommentDollar, faLocationDot} from '@fortawesome/free-solid-svg-icons'
const FeaturedList = ({jobinfo}) => {
    const {companyName,jobTitle,jobType,job_place,location,salaryRange,companyLogo} =jobinfo;

    return (
        <div className='md:col-span-6 col-span-12 md:p-8 p-3 bg-slate-200'>
        <img className='w-3/12 h-16 p-1 border-2 border-white' src={companyLogo} alt="logo" />
        <p className='text-xl font-bold'>{jobTitle}</p>
        <p className='text-sm py-2'>{companyName}</p>
        <div className='py-2'>
            <button className='border-2 text-xs py-1 px-2 mr-1 rounded-md text-blue-900 border-blue-300'>{job_place}</button>
            <button className='border-2 text-xs py-1 px-2 mr-1 rounded-md text-blue-900 border-blue-300'>{jobType}</button>

        </div>
       <div className='flex py-2'>
       <p className='pr-5 text-sm'> <FontAwesomeIcon className='pr-1' icon={faLocationDot} />{location}</p>
        <p className='pr-3 text-sm'><FontAwesomeIcon className='pr-1' icon={faCommentDollar} />Salary: {salaryRange}</p>
       </div>
       <button className='border-2 bg-blue-700 text-white px-3 py-2 rounded-lg text-sm'>View Details</button>
             
        </div>
    );
};

export default FeaturedList;