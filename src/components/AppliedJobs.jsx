import React, { useContext, useState } from 'react';
import { getStoredCart } from '../utils/fakedDB';
import { ProductContext } from '../App';
import AppliedCard from './Card/AppliedCard';

const AppliedJobs = () => {
  const products = useContext(ProductContext);
  const savedCart = getStoredCart();
  const [showRemote, setShowRemote] = useState(null);

  let cart = [];
  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id == id);
    if (foundProduct) {
      cart.push(foundProduct);
    }
  }

  const remoteCart = cart.filter((data) => data.remote === true);
  const onsiteCart = cart.filter((data) => data.remote === false);

  return (
    <div>
      <section className='bg-gray-100 h-48 flex justify-center items-center'>
        <h1 className='font-bold text-2xl'>Applied Jobs</h1>
      </section>
      <div className='lg:max-w-screen-xl mx-auto my-48'>
        <div className='flex justify-end'>
          <button className='btn' onClick={() => setShowRemote(false)}>
            Onsite Job
          </button>
          <button className='btn ms-3' onClick={() => setShowRemote(true)}>
            Remote Job
          </button>
        </div>
        <div>
          {showRemote === null
            ? cart.map((data) => (
                <AppliedCard key={data.id} data={data}></AppliedCard>
              ))
            : showRemote
            ? remoteCart.map((data) => (
                <AppliedCard key={data.id} data={data}></AppliedCard>
              ))
            : onsiteCart.map((data) => (
                <AppliedCard key={data.id} data={data}></AppliedCard>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
