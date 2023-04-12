import React from 'react';
import { useLoaderData } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDollar, faLocationDot, faCalendar,faMessage,faPhone} from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data);

    const {id,jobDescription,jobResponsibility,experience,educationalRequirements,salaryRange,jobTitle,location,email,phone} = data;

    const addApplied =(job)=>{
        console.log(job);
        addToDb(job.id);
    }
 
    return (
        <div>
            <h2 className='text-5xl font-semibold bg-slate-300 p-28 text-center'>Job Details</h2>

            <div className='grid grid-cols-12 gap-2 items-center bg-slate-200 p-2'>
                <div className='col-span-8 p-20 text-lg'>
                    <p className='py-2'> <span className='font-bold text-lg'>Job Description:</span> {jobDescription}  </p>
                    <p className='py-2' > <span className='font-bold text-lg'>Job Responsibility:</span> {jobResponsibility}  </p>
                    <p className='py-2'> <span className='font-bold text-lg'>Educational Requirements:</span>  <p>{educationalRequirements} </p> </p>
                    <p className='py-2'> <span className='font-bold text-lg'>Experience:</span> <p>{experience} </p> </p>
                    </div>
                <div className='col-span-4 p-16'>
                   <div className='bg-blue-100 p-4 rounded-md'>
                    <div>
                        <p className='text-xl font-semibold py-3 '>Job Details</p>
                        <hr className='border-b-2 border-blue-200'></hr>
                        <p className='py-1'><FontAwesomeIcon className='pr-1 text-sm text-blue-700' icon={faCommentDollar} />  <span className='font-semibold'>Salary: </span> {salaryRange} (Per Month)</p>
                        <p className='py-1'><FontAwesomeIcon className='pr-1 text-sm text-blue-700' icon={faCalendar} /><span className='font-semibold'> Job Title:</span> {jobTitle}</p>

                    </div>
                    <div>
                          <p className='text-xl font-semibold py-3'>Contact Information</p>
                          <hr  className='border-b-2 border-blue-200' />
                          <p className='py-1'><FontAwesomeIcon className='pr-1 text-sm text-blue-700' icon={faPhone} /> <span className='font-semibold'>  Phone: </span> {phone}</p>
                          <p className='py-1'> <FontAwesomeIcon className='pr-1 text-sm text-blue-700' icon={faMessage} /> <span className='font-semibold'>  Email:</span> {email}</p>
                         <p className='py-1'><FontAwesomeIcon className='pr-1 text-sm text-blue-700' icon={faLocationDot} /> <span className='font-semibold'>  Location: </span> {location}</p>
                    </div>
                   </div>
                   <button  onClick={() => addApplied(data)} className='border-2 bg-blue-800 text-white rounded-lg w-full py-3 font-bold mt-3 hover:bg-blue-600'> Apply Now</button>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;