import Image from 'next/image';
import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";

const MainProductCard = ({ name, old_price, new_price, discount, rating, badge, image }) => {
    return (
        <div className='w-full cursor-pointer group h-full p-4 border rounded-lg'>
            <div className='relative overflow-hidden'>
                <div className='relative w-full h-[500px]'>
                    <Image
                        src={image}
                        layout='fill'
                        objectFit='cover'
                        className='border group-hover:brightness-75 rounded-md transition-all duration-500'
                        alt='product image'
                    />
                </div>

                <div className='absolute right-5 group-hover:bottom-5 -bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <ul className='text-xl flex flex-col p-2.5 rounded-t-lg gap-y-1 text-neutral-500'>
                        <div className='cursor-pointer border bg-neutral-300 p-2 rounded-lg'>
                            <BsCart3 />
                        </div>
                        <div className='cursor-pointer border bg-neutral-300 p-2 rounded-lg'> <IoHeartOutline /></div>
                        <div className='cursor-pointer border bg-neutral-300 p-2 rounded-lg'> <BsEye /></div>
                    </ul>
                </div>

                {badge && (
                    <div className='absolute text-sm uppercase font-semibold rounded-sm rotate-90 right-0 px-1.5 top-10 bg-yellow-300'>
                        {badge}
                    </div>
                )}
                {discount && (
                    <div className='absolute top-7 border-none px-2 rounded-r-md left-0 bg-blue-400 font-semibold'>
                        {discount}
                    </div>
                )}
            </div>
            <p className='text-neutral-500 font-semibold text-lg'>
                {name}
            </p>
            <Rating
                style={{ maxWidth: 100 }}
                value={rating}
            />
            <div className='flex font-semibold items-center gap-x-2'>
                {old_price && (
                    <p className='text-neutral-500 line-through'>
                        {old_price}
                    </p>
                )}
                <p className='text-neutral-500'>
                    {new_price}
                </p>
            </div>
        </div>
    );
};

export default MainProductCard;
