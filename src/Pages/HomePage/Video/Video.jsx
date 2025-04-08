import React from 'react';

const Video = () => {
    return (
        <div className=' lg:py-16 md:py-12 max-w-5xl mx-auto  py-8 mx-auto'>
            <h1>
            <h1 className='text-center uppercase text-xl pb-3 md:text-2xl lg:text-3xl font-bold'>
            watch live Streamineg
            </h1>
            </h1>
            <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full ">
  <iframe width="1100" height="315" src="https://www.youtube.com/embed/eS9Qm4AOOBY?si=2sIecnTsm6kIS4oz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn text-white border-2 border-solid border-orange-300 bg-[#a712e4]">❮</a>
      <a href="#slide2" className="btn text-white border-2 border-solid border-orange-300 bg-[#a712e4]">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <iframe width="1100" height="315" src="https://www.youtube.com/embed/eS9Qm4AOOBY?si=2sIecnTsm6kIS4oz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn text-white border-2 border-solid border-orange-300 bg-[#a712e4]">❮</a>
      <a href="#slide3" className="btn text-white border-2 border-solid border-orange-300 bg-[#a712e4]">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <iframe width="1100" height="315" src="https://www.youtube.com/embed/eS9Qm4AOOBY?si=2sIecnTsm6kIS4oz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn text-white border-2 border-solid border-orange-300 bg-[#a712e4]">❮</a>
      <a href="#slide4" className="btn text-white border-2 border-solid border-orange-300 bg-[#a712e4]">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <iframe width="1100" height="315" src="https://www.youtube.com/embed/eS9Qm4AOOBY?si=2sIecnTsm6kIS4oz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn text-white border-2 border-solid border-orange-300 bg-[#a712e4]">❮</a>
      <a href="#slide1" className="btn text-white border-2 border-solid border-orange-300n bg-[#a712e4]">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Video;