import axios from 'axios';
import React from 'react';

const PublicAxios = () => {
          
    const PublicAxios = axios.create({
        baseURL:"http://localhost:5000"
    })

    return PublicAxios;
};

export default PublicAxios;