import React from 'react';
import Lottie from "lottie-react";
import itCareer from "../assets/it-career.json"


const HomeHeaderSection = () => {
    return (
        <div className='md:flex gap-12 bg-violet-100 pb-14 shadow-sm'>
            <div className='w-full lg:w-4/5 lg:ml-auto h-44  md:h-56'>
                <Lottie animationData={itCareer} loop={true} />
            </div>
            <div className='mt-56 md:mt-24 w-4/5 mx-auto'>
                <h1 className='text-5xl font-bold my-4'>One Step <br />Closer To Your<br /><span className='text-violet-600'>Dream Job</span></h1>
                <p className='w-80 my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='my-btn my-4'>Get Started</button>
            </div>
        </div>
    );
};

export default HomeHeaderSection;