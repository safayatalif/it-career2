import React, { useState } from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const AppliedJob = ({ appliedJob }) => {
    const { id, job_title, company_name, remote_or_onsite, location, salary, fulltime_or_part_time, company_logo } = appliedJob;
    return (
        <div className='border rounded-md px-2 md:px-6 py-3 md:flex justify-between items-center bg-violet-50'>
            <div className='md:flex gap-8'>
                <div>
                    <img className='h-12 w-32 md:h-32 md:w-40' src={company_logo} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>{job_title}</h3>
                    <p>{company_name}</p>
                    <div className='flex gap-4 my-4'>
                        <p className='py-1 px-1 rounded-md text-violet-600 font-bold border-2 border-violet-600'>{remote_or_onsite}</p>
                        <p className='py-1 px-1 rounded-md text-violet-600 font-bold border-2 border-violet-600'>{fulltime_or_part_time}</p>
                    </div>
                    <div className='md:flex gap-4'>
                        <p><MapPinIcon className='h-4 w-6 inline-block'></MapPinIcon> {location}</p>
                        <p><CurrencyDollarIcon className='h-4 w-6 inline-block'></CurrencyDollarIcon> salary:{salary}</p>
                    </div>
                </div>
            </div>
            <button className='my-btn my-4'><Link to={`../details/${id}`}>View Details</Link></button>
        </div>
    );
};

export default AppliedJob;