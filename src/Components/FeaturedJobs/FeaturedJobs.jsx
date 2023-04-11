import React, { useEffect, useState } from 'react';
import FeaturedList from '../FeaturedList/FeaturedList';
import JobDetails from '../JobDetails/JobDetails';

const FeaturedJobs = () => {

    const [jobinfos,setJobinfos] = useState([]);
    const [detailedjob,setDetailedjob] = useState([]);

    useEffect(() =>{
        fetch('JobDescription.json')
        .then (res => res.json())
        .then(data => setJobinfos(data))
    },[]);



    const showDetails = (id) =>{
    let addDetails =[];
         let detailsJob = jobinfos.find(job=> job.id === id);
         addDetails =[...detailedjob,detailsJob];
       
        setDetailedjob(addDetails);
         {
            <JobDetails detailedjob={detailedjob}></JobDetails>
         }
         console.log(detailedjob);

console.log(id);
    }
    return (
        <div className='p-3'>
              <p className='text-4xl font-semibold text-center p-4'>Featured Jobs</p>
            <p className='text-center'> Detailed information about the job, including responsibilities, qualifications, and any special requirements</p>
            <div className='grid grid-cols-12 gap-3 p-5'>
                {
                   jobinfos.map(jobinfo=> <FeaturedList 
                    jobinfo={jobinfo}
                    key={jobinfo.id}
                    showDetails={showDetails}
                   ></FeaturedList>  )
                }
  </div>
               <div className='text-center'>
                <button className='border-2 bg-blue-900 text-white font-bold rounded-lg  p-2 mx-auto w-32'>See All Jobs</button>
             </div>
          
            
        </div>
    );
};

export default FeaturedJobs;