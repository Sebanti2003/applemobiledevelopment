import React from 'react'
import { IoIosPlay } from "react-icons/io";
import { FaPhotoVideo } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Videocarousal from './Videocarousal';

const Highlights = () => {
  const tl = gsap.timeline()
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    tl.fromTo('.stag',{
      opacity: 0,
      y: 100
      },{
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger:0.3,
        scrollTrigger:{
          trigger: '.stag',
          start: 'top 80%',
          end: 'bottom center',
          scrub: 1,
        }
    })

  })
  return (
    <div className='w-full bg-gray-900 min-h-[100vh] px-5'>
      <div className=' flex max-sm:flex-col justify-between gap-2 items-center p-3'>
        <div className=' text-7xl text-transparent stag bg-clip-text  bg-gradient-to-t from-slate-500 my-2 mukta-font h-full font-bold to-slate-600'>Get the Highlights</div>
        <div className='flex max-sm:flex-col max-sm:items-start  max-sm:w-full gap-3 text-lg items-center justify-center'>
          <div className='stag text-blue flex items-center gap-1 hover:underline-offset-1 hover:underline cursor-pointer'><p>Watch the video </p><div className=''><IoIosPlay /></div></div>
          <div className='stag text-blue flex items-center gap-1 hover:underline hover:underline-offset-1 cursor-pointer'>
            <div>Photos</div>
            <div><FaPhotoVideo /></div>
          </div>
        </div>

      </div>
      <Videocarousal/>

    </div>
  )
}

export default Highlights
