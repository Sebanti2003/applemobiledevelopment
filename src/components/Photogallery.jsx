import React, { useEffect } from 'react'
import { image1, image2, image3, image4, image5 } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Featuretext from './Featuretext'
function Photogallery() {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const cards = document.querySelectorAll('.item-photo')
        cards.forEach((card, i) => {
            card.style.zIndex = cards.length - i;
        })
        gsap.set(".item-photo", {
            clipPath: () => {
                return "inset(0px 0px 0px 0px)";
            }
        })
        const animation = gsap.to('.item-photo:not(:last-child)', {
            clipPath: () => {
                return "inset(0px 100% 100% 0px)";
            },
            stagger: 0.5,
            ease: 'none',
        })
        ScrollTrigger.create({
            trigger: '.work',
            start: 'top top',
            end: 'bottom bottom',
            animation: animation,
            scrub: 1
        })




    }, [])
    return (
        < div className="wrapp">
            <Featuretext />
            <div className="work flex">
                <div className="left relative w-[50%] z-[2]  mt-20 ">
                    <div className="work-text m-auto w-[80%]">
                        <div className='work-info  h-[90vh] flex flex-col justify-center outline-1 outline-red-500'>
                            <div className="left-bd ">
                                <p className='text-[2em] font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-200'>
                                    Display
                                </p>
                                <span>The iPhone features a Super Retina XDR display with OLED technology, providing incredible color accuracy, brightness, and contrast.</span>
                            </div>
                        </div>
                        <div className='work-info h-[90vh] flex flex-col justify-center outline-1 outline-red-500'>
                            <div className="left-bd">
                                <p className='text-[2em] font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-200'>
                                    Performance
                                </p>
                                <span>Powered by the A15 Bionic chip, the iPhone delivers exceptional performance and power efficiency, handling demanding tasks with ease.</span>
                            </div>
                        </div>
                        <div className='work-info h-[90vh] flex flex-col justify-center outline-1 outline-red-500'>
                            <div className="left-bd">
                                <p className='text-[2em] font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-200'>
                                    Camera
                                </p>
                                <span>The iPhone comes with a state-of-the-art camera system, featuring Night mode, Deep Fusion, and Smart HDR for stunning photos and videos.</span>
                            </div>
                        </div>
                        <div className='work-info h-[90vh] flex flex-col justify-center outline-1 outline-red-500'>
                            <div className="left-bd">
                                <p className='text-[2em] font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-200'>
                                    Battery Life
                                </p>
                                <span>The iPhone is designed to last all day, with an optimized battery that supports fast charging and wireless charging capabilities.</span>
                            </div>
                        </div>
                        <div className='work-info h-[90vh] flex flex-col justify-center outline-1 outline-red-500'>
                            <div className="left-bd">
                                <p className='text-[2em] font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-200'>
                                    Security
                                </p>
                                <span>The iPhone features advanced security measures, including Face ID and end-to-end encryption, ensuring your data is safe and secure.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right w-[50%] h-auto">
                    <div className="right-bd flex flex-col justify-center sticky w-full h-[100vh] top-0">
                        <div className="work-photo w-[40vw] h-[30vw] relative">
                            <div className=' absolute w-full h-full cursor-pointer rounded-sm overflow-hidden item-photo'>
                                <img className="w-full object-cover h-full block" src={image1} alt="" />
                            </div>
                            <div className=' absolute w-full h-full cursor-pointer rounded-sm overflow-hidden item-photo'>
                                <img className="w-full object-cover h-full block" src={image2} alt="" />
                            </div>
                            <div className=' absolute w-full h-full cursor-pointer rounded-sm overflow-hidden item-photo'>
                                <img className="w-full object-cover h-full block" src={image3} alt="" />
                            </div>
                            <div className=' absolute w-full h-full cursor-pointer rounded-sm overflow-hidden item-photo'>
                                <img className="w-full object-cover h-full block" src={image4} alt="" />
                            </div>
                            <div className=' absolute w-full h-full cursor-pointer rounded-sm overflow-hidden item-photo'>
                                <img className="w-full object-cover block h-full" src={image5} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Photogallery