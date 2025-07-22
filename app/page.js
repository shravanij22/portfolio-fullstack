'use client'
import React, { useState, useEffect, useRef } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { use } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {

  }, [isDarkMode]);


  return (
  <>
  <Navbar/>
  <Header/>
  <About/>
  <Services/>
  <Work/>
  <Contact/>
  <Footer/>
 
  </>
  );
}
