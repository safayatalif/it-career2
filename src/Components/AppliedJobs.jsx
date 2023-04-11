import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';
import { ChevronDownIcon } from '@heroicons/react/24/solid'


const AppliedJobs = () => {
    const saveAppliedJobs = useLoaderData();
    const [appliedJobs, setApplied] = useState(saveAppliedJobs)
    const remoteJobHandler = () => {
        const remoteJobs = saveAppliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setApplied(remoteJobs);
    }
    const onsiteJobHandler = () => {
        const onsiteJobs = saveAppliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setApplied(onsiteJobs);
    }
    return (
        <div>
            <div className='text-center text-4xl font-bold bg-violet-100 py-12'>
                <h1 className=''>Applied Jobs</h1>
            </div>
            <div className="dropdown dropdown-hover mt-12 mx-4 md:mx-8 w-32">
                <label tabIndex={0} className="border py-2 px-3">Filter By <ChevronDownIcon className='h-4 w-6 inline-block'></ChevronDownIcon></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={remoteJobHandler} >Remote</button></li>
                    <li><button onClick={onsiteJobHandler}>Onsite</button></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 mt-12 mx-4 md:mx-8'>
                {
                    appliedJobs.map(appliedJob =>
                        <AppliedJob
                            key={appliedJob.id}
                            appliedJob={appliedJob}
                        ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;