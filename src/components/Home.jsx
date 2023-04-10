import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Home = () => {
    const category = useLoaderData()
    return (
        <div>
            <section className=' bg-gray-100 px-4 py-5 mx-auto sm:max-w-full md:max-w-full  lg:max-w-full'>
                <div className='flex flex-col-reverse h-816px lg:max-w-screen-xl mx-auto gap-16 md:flex-col-reverse lg:flex-row'>
                    <div className='lg:w-[50%] w-full'>
                        <h1 className='font-bold text-4xl mt-14 lg:text-6xl'>
                            One Step <br /> Closer To Your <br /> <span className='bg-gradient-to-r from-indigo-400 to-violet-500 inline-block text-transparent bg-clip-text'>Dream Job</span>
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

            <section className='my-32 lg:max-w-screen-xl mx-auto'>
                <h1 className='text-4xl lg:text-5xl font-bold text-center'>Job Category List</h1>
                <p className='text-gray-500 my-6 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='gap-3 lg:gap-6 grid grid-cols-2 lg:grid-cols-4 my-12'>
                    {
                        category.map(categoryData => <Category
                            key={categoryData.id}
                            categoryData={categoryData}
                        ></Category>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;