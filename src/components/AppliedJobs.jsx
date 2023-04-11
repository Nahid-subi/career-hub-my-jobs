import React, { useContext } from 'react';
import { getStoredCart } from '../utils/fakedDB';
import { ProductContext } from '../App';
import AppliedCard from './Card/AppliedCard';

const AppliedJobs = () => {
    const products = useContext(ProductContext)
    const savedCart = getStoredCart()
    let cart = []
    for(const id in savedCart){
        const foundProduct =  products.find(product => product.id == id)
        if(foundProduct){
            cart.push(foundProduct)
        }
    }
    return (
        <div>
             <section className='bg-gray-100 h-48 flex justify-center items-center'>
                <h1 className='font-bold text-2xl'>Applied Jobs</h1>
            </section>
            <div className='lg:max-w-screen-xl mx-auto my-48'>
                {
                    cart.map(data => <AppliedCard
                    key={data.id}
                    data={data}
                    ></AppliedCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;