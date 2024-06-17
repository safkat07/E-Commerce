import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import { HiOutlineViewGrid } from "react-icons/hi";
import Link from 'next/link';
import { FaSortAmountDown } from "react-icons/fa";

const MainNavLinks = () => {

    return (
        <div className='py-2'>
            <MaxwidthWrapper>
                <div className='flex justify-between items-center'>
                    <div className='text-4xl cursor-pointer'>
                        <HiOutlineViewGrid />
                    </div>
                    <div>
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
        </div>
    )
}

export default MainNavLinks