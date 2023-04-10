import React from 'react';

const Category = ({categoryData}) => {
    
    return (
        <div className='bg-gray-100 rounded-md p-4 lg:p-10'>
            <img className='h-16 w-16 rounded' src={categoryData.logo} alt="" />
            <h3 className='font-semibold my-2'>{categoryData.jobCategory}</h3>
            <p className='text-gray-500'>{categoryData.jobsAvailable} Jobs Available</p>
        </div>
    );
};

export default Category;