import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { jobId } = useParams();
    const jobsAll = useLoaderData();
    const jobData = jobsAll.find(job => job.id === jobId);
    const { job_description, job_responsibility, educational_requirements, experiences, phone, salary, email, location } = jobData
    return (
        <div>
            <div className='text-center text-4xl font-bold bg-violet-100 py-12'>
                <p>Job Details</p>
            </div>
            <div className='md:flex gap-8'>
                <div>
                    <p>Job Description: {job_description}</p>
                    <p >Job Responsibility: {job_responsibility}</p>
                    <p>Educational Requirements: <br />
                    {educational_requirements}
                    </p>
                    <p>Experiences: <br />
                    {experiences}
                    </p>
                </div>
                <div className='bg-violet-300 h-56 w-48'></div>
            </div>
        </div>
    );
};

export default JobDetails;