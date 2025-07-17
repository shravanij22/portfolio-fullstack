import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';


const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I have worked on a variety of projects that showcase my skills in web development. 
        From building responsive websites to developing complex web applications, I take pride in delivering high-quality work that meets the needs of my clients.
        Below are some of the projects I have completed recently. Each project reflects my commitment to excellence.
      </p>

      <div className='grid grid-cols-auto gap-5 my-10'>
        {workData.map((project, index) => (
          <div key={index} className='aspect-square bg-no-repeat bg-cover' style={{ backgroundImage: `url(${project.bgImage})` }}>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div>
              <Image src={assets.send_icon} alt='send icon' className='w-5'/>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
