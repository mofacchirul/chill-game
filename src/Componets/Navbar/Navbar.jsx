import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links=
    <>
    <li className='font-bold'><NavLink to={'/'}>Home</NavLink></li>
    <li className='font-bold'><NavLink to={'/match'}>Match</NavLink></li>
    <li className='font-bold'><NavLink to={'/Player'}>Players</NavLink></li>
    <li className='font-bold'><NavLink to={'/blog'}>Blog</NavLink></li>
    <li className='font-bold'><NavLink to={'/contack'}>Contack</NavLink></li>
         
    </>
    return (
        <div className='sticky top-0 z-10 backdrop-blur-sm bg-white/90'>
           <div className="navbar absolute     ">
  
  <div className='navbar-start'>
<img src="https://i.ibb.co.com/Mk1FYjv6/logo.webp" className='w-28 lg:w-60 '  alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end  space-x-3">
<Link to={'/login'}>
<button className="btn bg-[#a712e4] border-4 rounded-3xl text-white border-solid border-orange-300">Sing In</button>
</Link>
    <div className="">
      <div className="dropdown"  onClick={() => setIsOpen(!isOpen)}>
        {/* Menu Button */}
        <div 
          tabIndex={0} 
          role="button" 
          className="btn btn-ghost lg:hidden"
         
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
          </svg>
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-black bg-base-100  rounded-box z-10 mt-3 w-40 -ml-28 p-2 shadow relative"
          >
            {/* Close Button */}
            <button 
              className="absolute top-0 right-2 text-red-500 text-xl" 
              onClick={() => setIsOpen(false)}
            >
              ❌
            </button>

            {
              links
            }
          </ul>
        )}
      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Navbar;