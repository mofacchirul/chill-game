import React from 'react';
import BannerHook from '../../Hook/BannerHook/BannerHook';

const Contack = () => {
  
    

    return (
        <div>
            <BannerHook   titel={"Contack Us"}
                descriptions={"Contack Us"}>
              
            </BannerHook>
            <div class=" py-12 ">
  <div class="max-w-6xl mx-auto grid grid-cols-1   md:grid-cols-3 gap-8 px-4 text-white">
    {/* <!-- Email --> */}
    <div class="bg-[#160c35] w-96 lg:w-full mx-auto  rounded-lg p-6 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-24 rounded-b-full "></div>
      <div class="relative z-10">
        <div class="flex justify-center mb-4">
          <div class="bg-[#1f144a] p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m0 0l4-4m-4 4l4 4" />
            </svg>
          </div>
        </div>
        <h2 class="text-xl font-bold mb-2">EMAIL:</h2>
        <p>gamestudio@gmail.com</p>
        <p>support24@gmail.com</p>
      </div>
    </div>

    {/* <!-- Location --> */}
    <div class="bg-[#160c35] w-96 lg:w-full mx-auto rounded-lg p-6 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-24 rounded-b-full "></div>
      <div class="relative z-10">
        <div class="flex justify-center mb-4">
          <div class="bg-[#1f144a] p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
            </svg>
          </div>
        </div>
        <h2 class="text-xl font-bold mb-2">LOCATION:</h2>
        <p>100 N Aurora Ave #APT 19</p>
        <p>Oakland, Nebraska(NE), 68045</p>
      </div>
    </div>

    {/* <!-- Phone --> */}
    <div class="bg-[#160c35] w-96 lg:w-full mx-auto rounded-lg p-6 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-24 rounded-b-full "></div>
      <div class="relative z-10">
        <div class="flex justify-center mb-4">
          <div class="bg-[#1f144a] p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h2l3.5 7-1.5 2c1.5 3 4.5 6 7.5 7l2-1.5L19 19l2 2h2v-5c-1-2-4-6-6-7h-5l-1-3H5l-2-2z" />
            </svg>
          </div>
        </div>
        <h2 class="text-xl font-bold mb-2">PHONE:</h2>
        <p>(402) 685-5964</p>
        <p>+88 (00) 4568 457 437</p>
      </div>
    </div>


   
  </div>

<div className='py-6 lg:py-12 w-96 text-center mx-auto'>
  <h1 className='text-xl lg:text-3xl text-center font-bold '>
  GET IN TOUCH
  </h1>
  <p>
  When unknown printer took type and scrambled it to make
  type specimen book centuries,
  </p>
</div>



  <div className='  px-3  max-w-5xl mx-auto'>
   <div className='grid lg:grid-cols-2 gap-2'>
   <fieldset className="fieldset">
  <legend className="fieldset-legend text-white text-xl font-bold">Name</legend>
  <input type="text" className="border border-solid p-2 rounded-xl" placeholder="Type here" />
 
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend text-white text-xl font-bold">Email</legend>
  <input type="email" className="border border-solid p-2 rounded-xl" placeholder="Type here" />
 
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend text-white text-xl font-bold">Number</legend>
  <input type="number" className="border border-solid p-2 rounded-xl" placeholder="Type here" />
 
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend text-white text-xl font-bold">Address</legend>
  <input type="text" className="border border-solid p-2 rounded-xl" placeholder="Type here" />
 
</fieldset>
   </div>

<fieldset className="fieldset">
  <legend className="fieldset-legend text-white text-xl font-bold">Write a Reaview From Hete</legend>
  <textarea className="border border-solid p-2 rounded-xl" placeholder="Bio"></textarea>
  <div className="fieldset-label">Optional</div>
</fieldset>

<div className='text-center'>
      <button className="btn bg-[#a712e4] border-4 rounded-3xl text-white border-solid border-orange-300">Submit Now</button>
</div>
    </div>

</div>


        </div>
    );
};

export default Contack;