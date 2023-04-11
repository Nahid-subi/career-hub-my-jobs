import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const JobsCard = ({ data }) => {
    const { companyLogo, companyName, id, fullTime, remote, jobTitle, location, salary } = data

    return (
        <div className='border rounded p-7'>
            <img className='w-36 h-14' src={companyLogo} alt="" />
            <h3 className='font-bold mt-7 text-xl'>{jobTitle}</h3>
            <h3 className='text-gray-500 my-2'>{companyName}</h3>
            <div className='flex gap-2'>
                <p className='py-1 px-4 border border-indigo-500 rounded text-color font-semibold'>{remote ? 'Remote' : 'Onsite'}</p>
                <p className='py-1 px-4 border border-indigo-500 rounded text-color font-semibold'>{fullTime ? 'Full Time' : 'Part Time'}</p>
            </div>
            <div className='flex gap-3 my-4 text-xs lg:text-base'>
                <div className='flex justify-center items-center text-gray-500'>
                    <MapPinIcon className="h-4 w-4" />
                    <p className='ms-1'>{location}</p>
                </div>
                <div className='flex justify-center items-center text-gray-500'>
                    <CurrencyDollarIcon className="h-4 w-4" />
                    <p className='ms-1'>{salary}</p>
                </div>
            </div>
            <Link to={`/jobsdetails/${id}`}>
                <button className='btn'>View Details</button>
            </Link>

        </div>
    );
};

export default JobsCard;