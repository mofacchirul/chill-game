import React from 'react';
import { Link } from 'react-router-dom';

const BannerHook = ({titel,descriptions}) => {
    return (
        <div>
            <div
  className="hero  h-[250px]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/CKMjx8TD/gaming-bg1.webp)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
 
    <div className="max-w-md ">
    <h1 className='lg:text-5xl text-3xl font-bold italic'>{titel}</h1>
<div className='flex items-center   gap-2'>
<Link to={'/'}>
<h1 className="mb-5 text-xl font-bold">Home</h1> 
</Link>

      <p className="mb-5 text-[#a712e4] font-bold ">
      <span className='text-2xl text-white'>//</span>
{descriptions} 
      </p>
</div>

    </div>
  </div>
</div>









        </div>
    );
};

export default BannerHook;