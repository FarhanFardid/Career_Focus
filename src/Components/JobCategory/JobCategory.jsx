import React from 'react';

const JobCategory = ({job}) => {
    const {jobTitle, jobVacancy,jobIconLink} = job;
    return (
        <div className='p-8 md:col-span-3 col-span-6 text-center bg-slate-100'>
            <img  className='w-12 h-12 mx-auto bg-slate-200' src={jobIconLink} alt=""/>
            <p className='text-sm font-bold py-2'>{jobTitle}</p>
            <p className='text-xs'>{jobVacancy} Jobs Available</p>
        </div>
    );
};

export default JobCategory;