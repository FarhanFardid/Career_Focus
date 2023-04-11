import React, { useEffect, useState } from 'react';
import FeaturedList from '../FeaturedList/FeaturedList';

const FeaturedJobs = () => {

    const [jobinfos,setJobinfos] = useState([]);

    useEffect(() =>{
        fetch('JobDescription.json')
        .then (res => res.json())
        .then(data => setJobinfos(data))
    },[]);
    return (
        <div>
              <p className='text-4xl font-semibold text-center p-4'>Featured Jobs</p>
            <p className='text-center'> Detailed information about the job, including responsibilities, qualifications, and any special requirements</p>
            <div>
                {
                   jobinfos.map(jobinfo=> <FeaturedList 
                    jobinfo={jobinfo}
                    key={jobinfo.id}
                   ></FeaturedList>  )
                }
            </div>
            
        </div>
    );
};

export default FeaturedJobs;