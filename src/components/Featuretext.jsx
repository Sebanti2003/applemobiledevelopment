import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

function Featuretext() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.feature-text',
                start: 'top 60%',
                end: 'bottom 90%',
                scrub:1
            }
        });
        tl.fromTo('.feature-text', {
            y: -200,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        });

    }, []);

    return (
        <div className='feature-text p-5  bg-slate-200  w-full  text-5xl text-center font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-200 mx-auto mt-10'>
            <p className='text-[3em] '>
                Features
            </p>
        </div>


    );
}

export default Featuretext;
