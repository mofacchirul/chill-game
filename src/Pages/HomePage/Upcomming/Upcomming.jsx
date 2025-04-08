import React from 'react';
import UpcommingTan from './UpcommingTan/UpcommingTan';
import Loading from '../../../Loading/Loading';
import { Link } from 'react-router-dom';

const Upcomming = () => {
    const [tournamentes,loading]=UpcommingTan()
   
    if(loading){
      return <Loading></Loading>
    }
    
      
      return (
       <div>
         <div className='text-center w-[500px] mx-auto py-4'>
        <h1 className='text-center uppercase text-xl pb-3 md:text-2xl lg:text-3xl font-bold'>
        Upcoming Match
       </h1>
       <p>
       When unknown printer took type and scrambled it to make
       type specimen book centuries,
       </p>
        </div>
        <div className="min-h-screen  flex flex-col items-center p-10">
          {tournamentes?.map((tournament) => (
            <div
              key={tournament._id}
              className="bg-[#0d0c22] text-white p-6 my-4 rounded-2xl border border-gray-700 shadow-lg lg:flex items-center justify-between w-full max-w-3xl"
            >
              <div className="flex  justify-center  items-center flex-col">
                <p className="text-sm text-gray-400">{tournament.date}</p>
                <h2 className="text-xl pb-3 md:text-2xl lg:text-3xl font-bold">{tournament.title}</h2>
                <p className="text-sm text-purple-400">{tournament.teams_registered} Teams Registered</p>
              </div>
    
              <div className="flex flex-col items-center">
              <a
  href="https://youtu.be/eS9Qm4AOOBY?si=fu_ePo3DV7Uz7vcD"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-purple-600 p-4 rounded-full shadow-lg"
>
  <img
    src="https://i.ibb.co.com/HL2nFyz8/play-btn2.webp"
    alt="Youtube Stream"
    className="w-10 h-10"
  />
</a>
                <p className="text-yellow-400 text-sm mt-2">Youtube Stream</p>
              </div>
    
              <div className="flex items-center justify-center space-x-4">
                <img src={tournament.team1.logo} alt={tournament.team1.name} className="w-16 h-16" />
                <p className="text-3xl font-bold text-purple-500">VS</p>
                <img src={tournament.team2.logo} alt={tournament.team2.name} className="w-16 h-16" />
              </div>
            </div>
          ))}
        </div>
        <div className='text-center'>
        <Link to={'/match'}>
        <button className='border-2 border-solid border-[#a712e4] text-white p-3 font-bold rounded-3xl   mx-auto'>
            Show More
          </button>
        </Link>
        </div>
       </div>
      );
};

export default Upcomming;