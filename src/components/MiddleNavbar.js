"use client"


import React, { useState } from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import Link from 'next/link';

const MiddleNavbar = () => {
    const [click, setClick] = useState(false)
    const showUserBox = () => {
        setClick(!click)
    }
    return (
        <div className='py-7 relative border-b'>
            <MaxwidthWrapper>
                <div className='flex md:flex-row flex-col md:gap-y-0 gap-y-3.5 justify-between items-center'>
                    <div className='lg:text-5xl text-3xl font-semibold text-neutral-600'>
                        Elevate Mart
                    </div>
                    <div className='md:w-1/3 w-full relative'>
                        <input type='text' placeholder='search prodcuts...' className='w-full focus:outline-none pl-5 rounded-md py-2.5 border border-blue-500' />
                        <IoSearchOutline className='absolute text-neutral-600 text-2xl right-[5%] top-[25%]' />
                    </div>
                    <div className='flex relative  text-3xl gap-7 font-semibold'>
                        <FiUser onClick={showUserBox} className='cursor-pointer' />

                        <FaRegHeart />
                        <IoBagHandleOutline />
                        {
                            click && <div className='size-40 flex  rounded-lg flex-col justify-center border border-gray-500 items-center px-5 text-lg text-center  bg-white/90 backdrop-blur-md shadow-xl text-black right-0 left-0 top-10 z-[99] absolute'>
                                <Link href="/login">Login</Link>
                                <div className='border-b border-2 border-gray-700 w-full my-2.5'>

                                </div>
                                <Link href="/signup">Sign-up</Link>
                            </div>
                        }
                    </div>
                </div>
            </MaxwidthWrapper>

        </div>
    )
}

export default MiddleNavbar