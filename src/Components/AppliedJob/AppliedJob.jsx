import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedDetails from '../AppliedDetails/AppliedDetails';


const AppliedJob = () => {

    const [jobInfos,setJobInfos] =useState([]);
    const [appliedJobs,setAppliedJobs] = useState([]);
 

    useEffect(() =>{
        fetch('jobDescription.json')
        .then (res => res.json())
        .then(data => setJobInfos(data))
    },[]);
    
    useEffect(()=>{
    
        const storedJobs = getShoppingCart();
        let savedJobs = [];
        for(const id in storedJobs){
            const addedJobs = jobInfos.find(job => job.id == id);
            console.log(addedJobs);
               if(addedJobs){
                savedJobs.push(addedJobs);
               }
            }
        
        setAppliedJobs(savedJobs);
    },[jobInfos]);

    
    console.log(jobInfos);
 console.log(appliedJobs);
    return (
        <div>
    
               <h2 className='text-5xl font-semibold bg-slate-300 p-28 text-center'>Applied Jobs</h2>
                <div>
                    {
                        appliedJobs.map(job=> <AppliedDetails 
                                          job={job}
                                          key={job.id}> </AppliedDetails>)
                    }
                </div>
    
        </div>
    );
};

export default AppliedJob;