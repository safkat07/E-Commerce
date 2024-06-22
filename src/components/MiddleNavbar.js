import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const MiddleNavbar = () => {
    return (
        <div className='py-7 border-b'>
            <MaxwidthWrapper>
                <div className='flex md:flex-row flex-col md:gap-y-0 gap-y-3.5 justify-between items-center'>
                    <div className='lg:text-5xl text-3xl font-semibold text-neutral-600'>
                    Elevate Mart
                    </div>
                    <div className='md:w-1/3 w-full relative'>
                        <input type='text' placeholder='search prodcuts...' className='w-full focus:outline-none pl-5 rounded-md py-2.5 border border-blue-500' />
                        <IoSearchOutline className='absolute text-neutral-600 text-2xl right-[5%] top-[25%]' />
                    </div>
                    <div className='flex  text-3xl gap-7 font-semibold'>
                        <FiUser />
                        <FaRegHeart />
                        <IoBagHandleOutline />
                    </div>
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default MiddleNavbar