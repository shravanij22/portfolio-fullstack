import Image from 'next/image';
import { assets } from '@/assets/assets';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Decorative header background (light mode only) */}
      <div className='fixed right-0 top-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition duration-300 
      ${isScroll 
    ? "bg-white dark:bg-darkTheme bg-opacity-50 backdrop-blur-lg shadow-sm" 
    : "bg-white dark:bg-darkTheme bg-opacity-50 shadow-sm"}`}>
        <a href="#top">
          <Image src={assets.logo} alt="logo" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
        ${isScroll ? "" : "bg-white dark:bg-darkTheme shadow-sm bg-opacity-50"} 
        shadow-sm bg-opacity-50`}>
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About Me</a></li>
          <li><a className="font-Ovo" href="#services">My Services</a></li>
          <li><a className="font-Ovo" href="#work">My Projects</a></li>
          <li><a className="font-Ovo" href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="darkmode"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
             dark:border-white/50"
          >Contact<Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menublack" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen 
          bg-rose-50 dark:bg-darkTheme transition duration-500 dark:bg-darkHover dark:"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="closeblack" className="w-5 cursor-pointer" />
          </div>

          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About Me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Projects</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#resume">Resume</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
