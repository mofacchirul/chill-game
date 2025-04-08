import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Banner = () => {
    return (
        <div>
            <div
  className="hero  h-[340px] relative lg:h-screen bg-top min-h-screen max-w-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/LDTkBj32/hero-position-img.webp)",
        backgroundSize: "cover",
    backgroundPosition: "top"
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center ">
    <div className="max-w-md">
    <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold text-white uppercase tracking-wide drop-shadow-lg neon-text">
        Best Game <br /> Playing Today.
      </h1>
      <p className="mb-5">
      Simply text of the printing and typesetting industry.
      </p>
      <button className="btn bg-[#a712e4] border-4 border-orange-300  text-white ">Play Now 
         <span className='text-xl '>
      <GoArrowRight />
      </span>
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;