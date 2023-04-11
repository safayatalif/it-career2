import React from 'react';
import { Link } from 'react-router-dom';
import {CurrencyDollarIcon , MapPinIcon} from '@heroicons/react/24/solid'

const Featured = ({ job }) => {
    const {id, job_title, company_name, remote_or_onsite, location, salary, fulltime_or_part_time, company_logo } = job;
    return (
        <div className='border border-violet-600 px-6 bg-violet-50 rounded-md'>
            <img className='h-12 w-32 my-4' src={company_logo}></img>
            <h3 className='text-2xl font-semibold'>{job_title}</h3>
            <p>{company_name}</p>
            <div className='flex gap-4 my-4'>
                <p className='py-1 px-2 rounded-md text-violet-600 font-bold border-2 border-violet-600'>{remote_or_onsite}</p>
                <p className='py-1 px-2 rounded-md text-violet-600 font-bold border-2 border-violet-600'>{fulltime_or_part_time}</p>
            </div>
            <div className='md:flex gap-4'>
                <p><MapPinIcon className='h-4 w-6 inline-block'></MapPinIcon> {location}</p>
                <p><CurrencyDollarIcon className='h-4 w-6 inline-block'></CurrencyDollarIcon> salary:{salary}</p>
            </div>
            <button className='my-btn my-4'><Link to={`../details/${id}`}>View Details</Link></button>
        </div>
    );
};

export default Featured;