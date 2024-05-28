import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const ScrollTriggerComponent = () => {
  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create the spin animation
    gsap.to('.box4', {
      rotation: 360,
      borderRadius: '50%',
      // gap: 10,
      margin: 10,
      scrollTrigger: {
        trigger: '.box4',
        start: 'top 50%', // Animation starts when the top of the box hits 80% of the viewport height
        end: 'bottom 10%', // Animation ends when the bottom of the box hits 20% of the viewport height
        scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers: true // Enable markers for debugging purposes
      }
    });

    gsap.to('.box7', {
      rotation: 720,
      duration: 1,
      scale:  .8,
      scrollTrigger: {
        // trigger: '.box7',
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: 1,
      }
    })



    ScrollTrigger.refresh();
  }, []);

  return (
    <div className=' flex flex-col justify-around bg-slate-900 p-10 space-y-28' >
      <h1 className='text-4xl text-center font-bold underline text-white'>ScrollTrigger</h1>
      <div className="flex">

        <div className='box4 h-40 w-40 bg-gradient-to-br from-blue-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box4 h-40 w-40 bg-gradient-to-br from-green-500 to-teal-300 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box4 h-40 w-40 bg-gradient-to-br from-yellow-500 to-orange-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box4 h-40 w-40 bg-gradient-to-br from-red-500 to-pink-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box4 h-40 w-40 bg-gradient-to-br from-pink-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box4 h-40 w-40 bg-gradient-to-br from-white to-gray-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box4 h-40 w-40 bg-gradient-to-br from-amber-700 to-slate-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box4 h-40 w-40 bg-gradient-to-br from-yellow-500 to-green-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box4 h-40 w-40 bg-gradient-to-br from-pink-500 to-blue-700 shadow-lg shadow-slate-800 rounded-lg'></div>

      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='box7 h-60 w-60 bg-gradient-to-br from-green-500 to-teal-300 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box7 h-40 w-40 bg-gradient-to-br from-blue-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box7 h-40 w-40 bg-gradient-to-br from-yellow-500 to-orange-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box7 h-40 w-40 bg-gradient-to-br from-red-500 to-pink-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box7 h-40 w-40 bg-gradient-to-br from-pink-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box7 h-60 w-60 bg-gradient-to-br from-white to-gray-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box7 h-40 w-40 bg-gradient-to-br from-amber-700 to-slate-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box7 h-40 w-40 bg-gradient-to-br from-yellow-500 to-green-700 shadow-lg shadow-slate-800 rounded-lg'></div>
        <div className='box7 h-60 w-60 bg-gradient-to-br from-pink-500 to-blue-700 shadow-lg shadow-slate-800 rounded-lg'></div>
      </div>
    </div>
  );
}

export default ScrollTriggerComponent;
