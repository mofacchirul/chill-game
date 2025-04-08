import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerHook from '../../../../Hook/BannerHook/BannerHook';
import { MdOutlineDateRange } from 'react-icons/md';
import { CiStar } from 'react-icons/ci';
import { GoPaperAirplane } from 'react-icons/go';
import ContackWhite from '../../../../ContackWhite/ContackWhite';

const BlogDetels = () => {
    const datas = useLoaderData()
    console.log(datas);
    
    return (
        <div className=' px-3 lg:px-0'>
          <div>
            <BannerHook
                titel={"BLOG DETAILS"}
                descriptions={"BLOG DETAILS"}
            
            ></BannerHook>
          </div>
          <div className='lg:py-16 space-y-3 md:py-12 max-w-5xl mx-auto  py-8'>
            <img src={datas.image} className='w-full h-96 object-fill rounded-2xl' alt="" />
            <div>
                <h1 className='text-[#a712e4] font-bold text-2xl '>{datas.title}</h1>
                <p>{datas.description}</p>
            </div>
            <div className='flex items-center gap-2'>
                <h1 className='flex items-center gap-2 '> <span className='text-[#a712e4] text-xl'><CiStar /></span> {datas.rating}</h1>
                <p className='flex items-center gap-2 '> <span className='text-[#a712e4] text-xl'><MdOutlineDateRange /></span> {datas.releaseDate}</p>
            </div>
            <ul>
  {datas.features.map((feature, index) => (
    <li key={index} className='flex items-center gap-2 p-2 px-2 pl-4 mt-2 border-gray-700 rounded-3xl border'> <span className='text-[#a712e4] text-xl'><GoPaperAirplane /></span> {feature}</li>
  ))}
</ul>
          </div>
          <ContackWhite></ContackWhite>
        </div>
    );
};

export default BlogDetels;