import React from 'react';
import Banner from '../HomePage/Banner/Banner';
import Game_word from '../HomePage/Game_word/Game_word';
import Video from '../HomePage/Video/Video';
import Upcomming from '../HomePage/Upcomming/Upcomming';
// import Blog from '../HomePage/Blog/Blog/Blogshome';
import ContackWhite from '../../ContackWhite/ContackWhite';
import About from '../HomePage/About/About';
import GameMeet from '../HomePage/GameMeet/GameMeet';
import Blogshome from '../HomePage/Blog/Blog/Blogshome';




const Home = () => {
    return (
        <div className='px-3 lg:px-0'>
            <Banner></Banner>
            <Game_word></Game_word>
            <About></About>
            <Video></Video>
            <GameMeet></GameMeet>
            <Upcomming></Upcomming>
            <Blogshome></Blogshome>
           <ContackWhite></ContackWhite>
        </div>
    );
};

export default Home;