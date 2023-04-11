import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import { ProductContext } from '../App';
import JobsCard from './Card/JobsCard';

const Home = () => {
    const products = useContext(ProductContext)
    const category = useLoaderData()
    const [showAllJobs, setShowAllJobs] = useState(false)

    const handleSeeAllJobs = () => {
        setShowAllJobs(true)
    }

    return (
        <div>
            {/* header banner section*/}
            <section className=' bg-gray-100 px-4 py-5 mx-auto sm:max-w-full md:max-w-full  lg:max-w-full'>
                <div className='flex flex-col-reverse h-816px lg:max-w-screen-xl mx-auto gap-16 md:flex-col-reverse lg:flex-row'>
                    <div className='lg:w-[50%] w-full'>
                        <h1 className='font-bold text-4xl mt-14 lg:text-6xl'>
                            One Step <br /> Closer To Your <br /> <span className='text-color'>Dream Job</span>
                        </h1>
                        <p className='text-gray-500 mt-6'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className='btn my-8'>Get Started</button>
                    </div>
                    <div className='lg:w-[50%] w-full'>
                        <img className='w-full' src="/src/assets/manphoto.png" alt="" />
                    </div>
                </div>
            </section>
            {/* category section */}
            <section className='my-32 lg:max-w-screen-xl mx-auto'>
                <h1 className='text-4xl lg:text-5xl font-bold text-center'>Job Category List</h1>
                <p className='text-gray-500 my-6 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='gap-3 lg:gap-6 grid grid-cols-2 lg:grid-cols-4 my-12'>
                    {
                         Array.isArray(category) && category.map(categoryData => <Category
                            key={categoryData.id}
                            categoryData={categoryData}
                        ></Category>)
                    }
                </div>
            </section>
            {/* Featured Jobs section */}
            <section className='mt-32 lg:max-w-screen-xl mx-auto'>
                <h1 className='text-4xl lg:text-5xl font-bold text-center'>Featured Jobs</h1>
                <p className='text-gray-500 my-6 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:max-w-screen-xl mx-auto gap-4'>
                    {
                        products.slice(0, showAllJobs ? products.length : 4).map(data => <JobsCard
                            key={data.id}
                            data={data}
                        ></JobsCard>)
                    }
                </div>
            </section>
            <div className='flex justify-center items-center my-9'>
                {!showAllJobs && <button className='btn' onClick={handleSeeAllJobs}>See All Jobs</button>}
            </div>
        </div>
    );
};

export default Home
