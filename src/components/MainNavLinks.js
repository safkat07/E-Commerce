"use client"

import React, { useState } from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import { HiOutlineViewGrid } from "react-icons/hi";
import Link from 'next/link';
import { FaSortAmountDown } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";


const MainNavLinks = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className='py-2 z-[10] relative'>
            <MaxwidthWrapper>
                <div className='flex justify-between items-center'>
                    <div onClick={toggleOpen} className='text-4xl cursor-pointer'>
                        <HiOutlineViewGrid />
                    </div>
                    <div className='lg:block hidden '>
                        <ul className='flex items-center gap-5'>
                            <Link className=' font-medium hover:text-blue-500 transition-all uppercase' href="/">
                                Home
                            </Link>
                            <Link className=' font-medium hover:text-blue-500 transition-all uppercase' href="/">
                                Categories
                            </Link>
                            <Link className=' font-medium hover:text-blue-500 transition-all uppercase' href="/">
                                products
                            </Link>
                            <Link className=' font-medium hover:text-blue-500 transition-all uppercase' href="/">
                                pages
                            </Link>
                            <Link className=' font-medium hover:text-blue-500 transition-all uppercase' href="/">
                                others
                            </Link>
                            <Link className=' font-medium hover:text-blue-500 transition-all uppercase' href="/">
                                blog
                            </Link>
                            <Link className=' font-medium hover:text-blue-500 transition-all uppercase' href="/">
                                elements
                            </Link>
                            <Link className=' font-medium hover:text-blue-500 transition-all uppercase' href="/">
                                hot offer
                            </Link>
                        </ul>
                    </div>
                    <div className='text-3xl cursor-pointer'>
                        <FaSortAmountDown />
                    </div>
                </div>
            </MaxwidthWrapper>

            <div className={`h-screen  top-0 lg:w-2/6 w-3/4 fixed transition-all duration-700 bg-neutral-200 text-black/50 ${open ? "left-0" : "-left-full"}`}>
                <div className='p-10 '>
                    <div className='flex justify-between items-center'>
                        <p className='text-2xl'>
                            Category
                        </p>
                        <RiCloseLargeFill onClick={toggleOpen} className='size-5 cursor-pointer font-semibold text-black' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNavLinks