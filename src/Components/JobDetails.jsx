import React from 'react';
import {EnvelopeIcon , PhoneIcon , BriefcaseIcon, CurrencyDollarIcon , MapPinIcon} from '@heroicons/react/24/solid'

import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from './Utilities/fakeDb';

const JobDetails = () => {
    const { jobId } = useParams();
    const jobsAll = useLoaderData();
    const jobData = jobsAll.find(job => job.id === jobId);
    const { job_description, job_responsibility, educational_requirements, experiences, phone, salary, email, location, job_title , id} = jobData
    return (
        <>
            <div className='text-center text-4xl font-bold bg-violet-100 py-12'>
                <p>Job Details</p>
            </div>
            <div className='md:flex gap-4 p-8'>
                <div className='md:w-2/3'>
                    <p className='mb-6'><span className='font-bold'>Job Description:</span> {job_description}</p>
                    <p className='mb-6'><span className='font-bold'>Job Responsibility:</span> {job_responsibility}</p>
                    <p className='mb-6'><span className='font-bold'>Educational Requirements:</span> <br />
                        {educational_requirements}
                    </p>
                    <p className='mb-6'><span className='font-bold'>Experiences:</span> <br />
                        {experiences}
                    </p>
                </div>
                <div className='bg-violet-100 rounded-lg h-80 md:w-2/6 p-4'>
                    <h3 className='font-bold py-4'>Job Details</h3>
                    <hr className='border border-violet-300' />
                    <p className='mt-4'><BriefcaseIcon className='h-4 w-6 inline-block'></BriefcaseIcon><span className='font-semibold'>Job Title: </span>{job_title}</p>
                    <p><CurrencyDollarIcon className='h-4 w-6 inline-block'></CurrencyDollarIcon><span className='font-semibold'>Salary: </span>{salary}</p>
                    <h3 className='font-bold py-4'>Contact Information</h3>
                    <hr className='border border-violet-300' />
                    <p className='mt-4'><PhoneIcon className='h-4 w-6 inline-block'></PhoneIcon><span className='font-semibold'>Phone: </span>{phone}</p>
                    <p><EnvelopeIcon className='h-4 w-6 inline-block'></EnvelopeIcon><span className='font-semibold'>Email: </span>{email}</p>
                    <p><MapPinIcon className='h-4 w-6 inline-block'></MapPinIcon><span className='font-semibold'>Address: </span>{location}</p>
                </div>
            </div>
            <div className='text-center md:text-right'>
                <button onClick={()=>addToDb(id)} className='my-btn md:w-1/4 mx-20'><Link >Apply Now</Link></button>
            </div>
        </>
    );
};

export default JobDetails;