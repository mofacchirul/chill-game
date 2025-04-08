import React from 'react';
import PublicAxios from '../../../../Axios/PublicAxios/PublicAxios';
import Loading from '../../../../Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Blogshome = () => {
    const axios=PublicAxios();
    const {data:blogs,loading}=useQuery({
        queryKey:['blogs'],
        queryFn:async()=>{
            const res= await axios.get('/blog')
            return res.data;
        }
    })
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='lg:py-16 md:py-12 max-w-5xl mx-auto  py-8'>
            <div className='text-center w-[500px] mx-auto py-4'>
            <h1 className='text-center uppercase text-xl pb-3 md:text-2xl lg:text-3xl font-bold'>
            Latest Blog
           </h1>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna
           </p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-2 space-y-3'>
                {
                    blogs?.map(blog=>
                       (
                        <div key={blog._id} className="card border-2 border-solid border-[#a712e4] p-3 items-center card-side gap-2  ">
                        <figure>
                          <img
                            src={blog.image}
                            alt="Movie"
                            className='w-60 h-36 rounded-lg'
                            />
                        </figure>
                        <div className="">
                            <p className='flex items-center  gap-1 '> <span className='text-[#a712e4]'><MdOutlineDateRange /></span>{blog.releaseDate}  </p>
                          <h2 className="text-xl">{blog.title}</h2>

                           <div className='mt-3 flex items-center gap-2'>
                            <span className='border-2 border-solid w-10 block border-[#a712e4] '></span>
                          <Link to={`/blog/${blog._id}`}>
                          <button className='uppercase'>
                                Read More <span className='text-[#a712e4]'>
                                .......
                                </span>
                            </button>
                          </Link>
                           </div>
                        </div>
                      </div>
                       )
                    )
                }
            </div>
            
        </div>
    );
};

export default Blogshome;