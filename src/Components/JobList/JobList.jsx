import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobList = () => {
      const [jobs,setJobs] = useState([]);
      useEffect(() =>{
        fetch('jobList.json')
        .then(res => res.json())
        .then(data => setJobs(data))
      },[])


    return (
        <div>
            <p className='text-4xl font-semibold text-center p-4'>Job Category List</p>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-12 gap-2 p-5'>
                {
                    jobs.map(job => <JobCategory 
                        job={job}
                        key={job.id}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobList;