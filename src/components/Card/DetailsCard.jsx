import React from 'react';
import { BriefcaseIcon, CurrencyDollarIcon, PhoneIcon, InboxArrowDownIcon, MapPinIcon } from '@heroicons/react/24/solid'


const DetailsCard = ({ data ,  handleAddToApplied}) => {
    return (
        <div>
            <div className='bg-gray-100 p-3 rounded'>
                <div>
                    <h2 className='font-bold my-5'>Job Details</h2> <hr />
                    <div className='flex items-center mt-5'>
                        <CurrencyDollarIcon className="h-4 w-4 text-indigo-500" />
                        <h3 className='text-gray-500'><span className='font-semibold text-black ms-1'>Salary: </span>{data.salary}</h3>
                    </div>
                    <div className='flex items-center'>
                        <BriefcaseIcon className="h-4 w-4 text-indigo-500" />
                        <h3 className='text-gray-500'><span className='font-semibold text-black ms-1'>Job Title: </span>{data.jobTitle}</h3>
                    </div>

                </div>
                <div>
                    <h2 className='font-bold my-5'>Contact Information</h2> <hr />
                    <div className='flex items-center mt-5'>
                        <PhoneIcon className="h-4 w-4 text-indigo-500" />
                        <h3 className='text-gray-500'><span className='font-semibold text-black ms-1'>Phone: </span>{data?.contactInformation?.phone}</h3>
                    </div>
                    <div className='flex items-center'>
                        <InboxArrowDownIcon className="h-4 w-4 text-indigo-500" />
                        <h3 className='text-gray-500'><span className='font-semibold text-black ms-1'>Email: </span>{data?.contactInformation?.email}</h3>
                    </div>
                    <div className='flex items-center'>
                        <MapPinIcon className="h-4 w-4 text-indigo-500" />
                        <h2 className='text-gray-500'><span className='font-semibold text-black ms-1'>Address: </span>{data.location}</h2>
                    </div>
                </div>
            </div>
                <button onClick={() =>handleAddToApplied(data.id)} className='btn w-full mt-4'>Apply Now</button>
        </div>
    );
};

export default DetailsCard;