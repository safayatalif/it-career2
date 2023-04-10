import React, { useEffect, useState } from 'react';
import Featured from './Featured';
import { useLoaderData } from 'react-router-dom';

const HomeFeaturedSection = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const loaderJobs = async () => {
            const res = await fetch('jobs.json');
            const data = await res.json();
            setJobs(data.slice(0, 4))
        }
        loaderJobs()
    }, []);
    return (
        <div className='mt-16'>
            <h1 className='text-3xl font-bold py-4 text-center '>Featured Jobs</h1>
            <p className='text-center mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-12'>
                {
                    jobs.map(job => <Featured
                        job={job}
                        key={job.id}
                    ></Featured>)
                }
            </div>
            <div className='text-center mt-12'>
                <button  className='my-btn'>See All Jobs</button>
            </div>
        </div>
    );
};

export default HomeFeaturedSection;