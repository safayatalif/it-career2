import React, { useEffect, useState } from 'react';
import Category from './Category';

const HomeCategorySection = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const loaderData = async () => {
            const res = await fetch('category.json');
            const data = await res.json();
            setCategory(data)
        }
        loaderData()
    }
        , [])
    console.log(category)
    return (
        <div className='mt-16'>
            <h1 className='text-3xl font-bold py-4 text-center '>Job Category List</h1>
            <p className='text-center mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-12'>
                {
                    category.map(categoryItem =><Category 
                        categoryItem={categoryItem}
                        key={categoryItem.id}
                         ></Category>)
                }
            </div>
        </div>
    );
};

export default HomeCategorySection;