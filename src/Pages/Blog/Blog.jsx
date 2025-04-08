import React from 'react';
import BannerHook from '../../Hook/BannerHook/BannerHook';
import Blogshome from '../HomePage/Blog/Blog/Blogshome';
import ContackWhite from '../../ContackWhite/ContackWhite';

const Blog = () => {
    return (
        <div>
               <BannerHook   titel={"Blog"}
                descriptions={"Blog"}>
                         </BannerHook>

                         <Blogshome></Blogshome>
                         <ContackWhite></ContackWhite>

                         
        </div>
    );
};

export default Blog;