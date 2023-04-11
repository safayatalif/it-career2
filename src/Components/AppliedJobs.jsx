import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    console.log(appliedJobs)
    return (
        <div>
            Applied Jobs
        </div>
    );
};

export default AppliedJobs;