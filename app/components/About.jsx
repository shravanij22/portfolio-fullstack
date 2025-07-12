import React from 'react';
import Image from 'next/image'; // ✅ Required for using <Image />
import { assets } from '@/assets/assets';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div>
          <Image 
            src={assets.user_image} 
            alt='My photo' 
            className='w-full rounded-3xl' 
            width={400} // ✅ add width & height
            height={400}
          />
        </div>
        <div className='flex-1'>
          {/* You can add bio/description text here */}
        </div>
      </div>
    </div>
  );
};

export default About;
