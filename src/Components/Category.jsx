import React from 'react';

const Category = ({categoryItem}) => {
    const {category_logo ,category_name ,jobs_available} = categoryItem
    return (
        <div className='bg-violet-100 px-4 py-4 rounded-md cursor-pointer hover:bg-violet-200'>
            <img className='bg-violet-300 p-2 rounded-md' src={category_logo} alt="" />
            <h5 className='font-bold mt-4 mb-2'>{category_name}</h5>
            <p>{jobs_available}+ Jobs Available</p>

        </div>
    );
};

export default Category;