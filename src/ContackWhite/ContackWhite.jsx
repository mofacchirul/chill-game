import React from 'react';
import { Link } from 'react-router-dom';

const ContackWhite = () => {
    return (
    <div className='px-3 lg:px-0'>
          <div 
          className="relative  bg-[#6f42c1] bg-cover bg-center text-white p-10 rounded-2xl shadow-lg flex items-center justify-between max-w-5xl mx-auto " 

        >
          <div>
            <h2 className="text-3xl font-bold">CONNECT WITH US</h2>
            <p className="text-xl mt-2">FOR GAMING UPDATE.</p>
          </div>
         <Link to={'/contact'}>
         <button className="bg-[#a712e4] text-white font-bold py-3 px-6 rounded-full border-2 border-solid border-orange-300 flex items-center gap-2 shadow-lg transition-all">
            CONNECT NOW <span className="text-xl">➡️</span>
          </button>
         </Link>
        </div>
    </div>
      );
};

export default ContackWhite;