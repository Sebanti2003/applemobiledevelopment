import gsap from 'gsap'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Parallexpractice = () => {
    const wholegallerydiv=useRef(null);
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.to('.square',{
            x: 500,
            duration:2,
            ease:'back.out',
            scrollTrigger:{
                trigger:'.square',
                start:"top 50%",
                end:"bottom 30%",
                toggleActions:'play pause reverse pause',
                markers:true

            }

        })
    },[])
   
  return (
    <div className=''>
        <div className="h-[100vh] bg-green-300"></div>
        <div className="h-[100vh] bg-green-400">
            <div ref={wholegallerydiv} className="square h-32 w-32 bg-white"></div>
        </div>
        <div className="h-[100vh] bg-green-500"></div> 
    </div>
  )
}

export default Parallexpractice
