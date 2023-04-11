import React, { useEffect, useState } from 'react';
import Featured from './Featured';
const HomeFeaturedSection = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(true)
    useEffect(() => {
        const loaderJobs = async () => {
            const res = await fetch('jobs.json');
            const data = await res.json();
            setJobs(data)
        }
        loaderJobs()
    }, []);
    return (
        <div className='mt-16'>
            <h1 className='text-3xl font-bold py-4 text-center '>Featured Jobs</h1>
            <p className='text-center mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            {
                showAll ? (
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5  mx-3 md:mx-12'>
                            {
                                jobs.slice(0, 4).map(job => <Featured
                                    job={job}
                                    key={job.id}
                                ></Featured>)
                            }
                        </div>
                        <div className='text-center mt-12'>
                            <button onClick={() => setShowAll(!showAll)} className='my-btn'>See All Jobs</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-3 md:mx-12'>
                            {
                                jobs.map(job => <Featured
                                    job={job}
                                    key={job.id}
                                ></Featured>)
                            }
                        </div>
                        <div className='text-center mt-12'>
                            <button onClick={() => setShowAll(!showAll)} className='my-btn'>Wrap Jobs</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default HomeFeaturedSection;