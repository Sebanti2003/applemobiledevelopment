import React from 'react'
import { appleImg,searchImg,bagImg } from '../utils/index'
import { navLists } from '../constants'
const Navbar = () => {
    return (
        <>
            <div>
                <div className='min-h-[10vh] flex justify-center'>
                    <div className=' md:w-[80%] w-full transition-all flex justify-between items-center'>
                        <div className='mx-10'>
                            <img src={appleImg} width={18} height={18} alt="" />
                        </div>
                        <div className='max-sm:hidden flex  h-full w-[60%] text-lg justify-center items-center gap-16  transition-all '>
                            {navLists.map((item,i)=>{
                                return(
                                    <div key={i}>
                                        <div className='hover:text-gray-100 cursor-pointer transition-all duration-500'>{item}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex mx-10 items-center  justify-center gap-5'>
                            <img width={18} className=' cursor-pointer' height={18} src={searchImg} alt="" />
                            <img width={18} className=' cursor-pointer' height={18} src={bagImg} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
