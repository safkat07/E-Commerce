import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdCurrencyExchange } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";


const TopNavbarPart = () => {
    return (
        <div className='w-full  p-2 border-b border-gray-300'>
            <MaxwidthWrapper>
                <div className='flex lg:flex-row flex-col lg:gap-y-0 gap-y-1.5 items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <BiLogoFacebook className='size-6 cursor-pointer bg-neutral-100/65 border rounded-full text-gray-500  ' />
                        <TiSocialTwitter className='size-6 cursor-pointer bg-neutral-100/65  border rounded-full text-gray-500  ' />
                        <IoLogoInstagram className='size-6 cursor-pointer p-0.5 bg-neutral-100/65  border rounded-full text-gray-500  ' />
                        <TiSocialLinkedin className='size-6 cursor-pointer  bg-neutral-100/65  border rounded-full text-gray-500  ' />
                    </div>
                    <div className='text-xs text-gray-500/90 uppercase'>
                        free shipping this week order over -$75
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-500/90 uppercase'>
                        <p className='flex items-center gap-0.5 cursor-pointer'><span>
                            <MdCurrencyExchange />
                        </span>Currency</p>
                        <p className='flex items-center gap-0.5 cursor-pointer'><span>
                            <LuLanguages />
                        </span> language</p>
                    </div>
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default TopNavbarPart