import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../App';
import DetailsCard from './Card/DetailsCard';


const JobsDetails = () => {
    const { id } = useParams();
    const products = useContext(ProductContext)
    console.log(products)
    const [data, setData] = useState([])

    useEffect(() => {
        const productData = products.find(pData => pData.id == id)
        setData(productData)
    }, [])
    console.log(data)


    return (
        <div>
            <section className='bg-gray-100 h-48 flex justify-center items-center'>
                <h1 className='font-bold text-2xl'>Job Details</h1>
            </section>
            <section className='lg:max-w-screen-xl mx-auto my-32 flex flex-col lg:flex-row gap-4'>
                <div className='w-full lg:w-[60%]'>
                   <p className='text-gray-500 my-5'>
                    <span className='text-black font-bold'>Job Description</span>:{data.jobDescription}
                   </p>
                   <p className='text-gray-500 my-5'>
                    <span className='text-black font-bold'>Job Responsibility</span>:{data.jobResponsibility}
                   </p>
                   <p className='text-gray-500 my-5'>
                    <span className='text-black font-bold'>Educational Requirement</span>:
                    <br />
                    <br />
                    {data.educationalRequirements}
                   </p>
                   <p className='text-gray-500 my-5'>
                    <span className='text-black font-bold'>Experiences</span>:
                    <br />
                    <br />
                    {data.experiences}
                   </p>
                </div>
                <div className='w-full lg:w-[40%]'>
                   <DetailsCard
                   key={data.id}
                   data={data}
                   ></DetailsCard>
                </div>
            </section>
        </div>
    );
};
export default JobsDetails;