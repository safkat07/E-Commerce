"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import img from '../../public/undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import Link from 'next/link';
import MaxwidthWrapper from './MaxwidthWrapper';

const SignUpForm = () => {
    const [isShow, setIsShow] = useState(false)
    const toggleShowPass = () => {
        setIsShow(!isShow)
    }
    return (
        <div className='w-full bg-neutral-200 min-h-dvh'>
            <MaxwidthWrapper>
                <Link href='/' className='md:text-5xl mt-5 text-3xl text-left font-bold text-blue-500'>
                    Elevate Mart
                </Link>
                <div className='w-full flex lg:flex-row flex-col justify-center lg:gap-5 gap-2 lg:py-36 items-center  h-full lg:p-5'>
                    <Image className='xl:size-1/3  lg:size-1/2 size-96 ' src={img} alt='loginimg' />

                    <div>
                        <p className='lg:text-5xl text-4xl font-semibold py-10  text-orange-400'>
                            Sign-Up Now
                        </p>

                        <form class="flex flex-col gap-10">
                            <div className='relative'>
                                <input type="text" placeholder=" " class="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
                                <label for="floatingInput" class="absolute left-0 top-3 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">Your Name</label>
                            </div>
                            <div className='relative'>
                                <input type="email" placeholder=" " class="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
                                <label for="floatingInput" class="absolute left-0 top-3 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">Email Address</label>
                            </div>
                            <div className='relative '>
                                <input type={`${isShow ? "text" : "password"}`} placeholder=" " class="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
                                <label for="floatingInput" class="absolute left-0 top-3 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">Password</label>
                                <div onClick={toggleShowPass}>
                                    {
                                        isShow ? <IoEyeOffOutline className='absolute top-1/4 shrink-0 cursor-pointer  right-0' /> : <IoEyeOutline className='absolute top-1/4 shrink-0 cursor-pointer  right-0' />
                                    }
                                </div>
                            </div>
                            <div>
                                <input className='w-full border text-xl py-2.5 bg-orange-600 text-white  font-semibold cursor-pointer' type='submit' value="Sing-Up" />
                            </div>
                        </form>

                        <p className='text-center py-1.5'>
                            or
                        </p>
                        <p className='text-center'>
                            Already have an account? <Link href='/login' className='text-blue-600 '>Login Now</Link>
                        </p>
                    </div>
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default SignUpForm