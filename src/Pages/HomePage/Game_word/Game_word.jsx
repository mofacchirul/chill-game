import React from 'react';

const Game_word = () => {
    const games=[
        {
            id:1,
            img:"https://i.ibb.co.com/w1dz4Z7/gaming-world3.webp",
            titel:'Live Streaming',
            descriptions: 'When unknown printer took type and scrambled it to make type specimen book centuries,'
        },
        {
            id:2,
            img:"https://i.ibb.co.com/s9j2db7p/gaming-world2.webp",
            titel:'Game News',
           descriptions: 'When unknown printer took type and scrambled it to make type specimen book centuries,'
        },
        {
            id:3,
            img:"https://i.ibb.co.com/5hGLfb3Q/gaming-world1-1.webp",
            titel:'Game Tournaments',
            descriptions: 'When unknown printer took type and scrambled it to make type specimen book centuries,'
        },
    ]
    return (
        <div className='lg:py-16 md:py-12 max-w-5xl mx-auto  py-8 '>
            <h1 className='text-center text-xl pb-3 md:text-2xl lg:text-3xl font-bold'>
            YOU ARE MOST WELCOME <br />
            IN GAMING WORLD.
            </h1>
         <div className='grid grid-cols-1  gap-2.5 lg:grid-cols-3'>
         {
            games.map(game=>
                <div>
                    <div key={game.id} className="card w-[340px] border solid border-orange-300 mx-auto rounded-2xl  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={game.img}
      alt={game.titel}
      className="rounded-xl bg-white" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{game.titel}</h2>
    <p>
        {
            game.descriptions
        }
    </p>
   
  </div>
</div>
                </div>
            )
         }
         </div>
        </div>
    );
};

export default Game_word;