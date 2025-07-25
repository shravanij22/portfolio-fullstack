import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';


const Contact = () => {
 const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d501005b-13c4-4392-b89f-bebacf10abea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with Me</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get in Touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
       I’m currently working as a Full-Stack Development Intern, where I get to build and improve web applications from both the front and back end.
       I'm always eager to collaborate, learn, and take on exciting tech challenges. 
       Whether you’re interested in working together, have an opportunity to discuss, or just want to chat about web development — 
       feel free to reach out. Let’s build something great!
      </p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
        <input suppressHydrationWarning type="text" placeholder='Enter your Name :' required className='flex-1 p-3 outline-none 
        border-[0.5px] border-gray-400 rounded-md bg-white ' name='name'/>
        <input suppressHydrationWarning type="email" placeholder='Enter your Email :' required className='flex-1 p-3 outline-none 
        border-[0.5px] border-gray-400 rounded-md bg-white 'name='email'/>
        </div>
        <textarea rows={6} placeholder='Enter your message : ' required
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'/>
        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
        text-white rounded-full mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='iconic'
        className='w-4'/></button>
        <p className='mt-4'>{result}</p>

      </form>
    </div>
  )
}

export default Contact
