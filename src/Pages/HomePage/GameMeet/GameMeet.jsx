import React from 'react';

const GameMeet = () => {
    const teams = [
        {id:1, name:"tasia mancuso", img:"https://i.ibb.co.com/rRmdMQtG/team1.webp", descriptions:"CES & Founder"},
        {id:2, name:"Rosaline emmons", img:"https://i.ibb.co.com/hFR8Y33K/team2.webp", descriptions:"Team Leader"},
        {id:3, name:"Wilburn Behrens", img:"https://i.ibb.co.com/35rr9XLq/team3.webp", descriptions:"Team Member"}
    ]
    return (
        <div >
               <div className='text-center w-[500px] mx-auto py-4'>
            <h1 className='text-center uppercase text-xl pb-3 md:text-2xl lg:text-3xl font-bold'>
            MEET GAMER TEAM
           </h1>
           <p>
           When unknown printer took type and scrambled it to make
           type specimen book centuries, 
           </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
               {
                teams.map((team) => (
                    <div key={team.id} className='   rounded-2xl w-96 mx-auto text-center '>
                        <img className=' mx-auto' src={team.img} alt="" />
                        <div className='bg-[#000435] hover:bg-[#a712e4] py-3 border-t-4 border-orange-300 rounded-4xl border-solid'>
                            <h1 className='text-xl uppercase font-bold'>{team.name}</h1>
                            <p className='text-[#a712e4] hover:text-white'>{team.descriptions}</p>
                        </div>
                    </div>
                ))  
               }
            </div>
        </div>
    );
};

export default GameMeet;