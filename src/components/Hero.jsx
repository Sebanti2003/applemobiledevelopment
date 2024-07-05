import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { FaAngleDown } from "react-icons/fa6";
const Hero = () => {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.wrapp');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const [videoSrc, setvideosrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const handlevideosource = () => {
        if (window.innerWidth < 760) {
            setvideosrc(smallHeroVideo)
        } else {
            setvideosrc(heroVideo)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handlevideosource);
        return (() => {
            window.removeEventListener('resize', handlevideosource);
        })
    }, [window.innerWidth])
    useGSAP(() => {
        gsap.fromTo('.herohead', {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 1.5,
        })
        gsap.fromTo('#pricetags', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            delay: 1.5,
            stagger: 0.5
        })
        gsap.fromTo('#buybutton', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            delay: 1.5,
        })

    }, [])

    return (
        <div className='w-full nav-height   relative'>
            <div className='h-5/6 w-full mt-10 flex-center flex-col'>
                <p className=" herohead  text-[2rem]  text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10">
                    iPhone 15 Pro
                </p>
                <div className='md:w-10/12 w-9/12'>
                    <video className=' pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <button id='pricetags' className='p-2 bg-blue rounded-xl px-4 m-3'>Buy</button>
                </div>
                <div id='pricetags' className=' text-gray-100  text-md'>
                    From $199/month or $999
                </div>
                <div onClick={scrollToNextSection} className='flex p-3 cursor-pointer animate-bounce justify-center items-center mt-5 rounded-full border-2 text-white border-slate-100'>
                    <FaAngleDown/>
                </div>

            </div>
        </div>
    )
}

export default Hero
