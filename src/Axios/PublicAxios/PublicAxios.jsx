import axios from 'axios';
import React from 'react';

const PublicAxios = () => {
          
    const PublicAxios = axios.create({
        baseURL:"https://chill-game-server-sigma.vercel.app"
    })

    return PublicAxios;
};

export default PublicAxios;