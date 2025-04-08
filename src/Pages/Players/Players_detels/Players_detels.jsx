import React from 'react';
import BannerHook from '../../../Hook/BannerHook/BannerHook';
import { Link, useLoaderData } from 'react-router-dom';

const Players_detels = () => {
    const datas = useLoaderData();
    console.log(datas);
    
    return (
        <div className="">
           <BannerHook titel={'Players'} descriptions={'Players'} ></BannerHook>
<div className=' py-8 md:py-12 lg:py-16 px-3 lg:px-0'>
<div key={datas._id} className='grid grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto'>
        <div>
        <img src={datas.img} className=' w-72 mx-auto border-2 border-solid border-gray-400 rounded-3xl' alt="" />
        <div className='bg-[#000435] text-center w-72 mx-auto mt-4   py-3 border-b-4 border-orange-300 rounded-4xl border-solid'>
                               <h1 className='text-xl uppercase font-bold'>{datas.playerName}</h1>
                               <p className='text-[#a712e4]  '>{datas.level}LEVEL COMPLETED</p>
        </div>
        </div>
   <div className='px-3 lg:px-0'>
        <div className='flex items-center gap-5 font-bold text-[#a712e4] text-2xl mt-5'>
            <span className='w-10 h-0  border-2 border-solid border-[#a712e4] block'></span>
            PLAYER PROFILE
        </div>

    <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>
        {datas.title}
    </h1>
    <p>{datas.details}</p>
    <p>{datas.description}</p>
<Link to={'/contack'}>
<button className=" px-7 py-3 font-bold mt-3 bg-[#a712e4] border-4 rounded-3xl text-white border-solid border-orange-300">Contack Now</button>
</Link>
   </div>
   
           </div>
</div>

        </div>
    );
};

export default Players_detels;