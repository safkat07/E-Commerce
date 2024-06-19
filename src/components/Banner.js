/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import MaxwidthWrapper from './MaxwidthWrapper';

// Import your images
import img1 from '../../public/banner1.jpg';
import img2 from '../../public/banner2.jpg';
import img3 from '../../public/banner3.jpg';

const Banner = () => {
    const data1 = [
        {
            id: 1,
            image: img1,
            heading: 'Nature Beauty',
            description: 'Explore the serene landscapes and majestic mountains that showcase nature at its finest.'
        },
        {
            id: 2,
            image: img2,
            heading: 'Urban Exploration',
            description: 'Discover bustling city streets and iconic landmarks that define the essence of urban life.'
        },
        {
            id: 3,
            image: img3,
            heading: 'Culinary Delights',
            description: 'Indulge in exquisite dishes and culinary adventures that tantalize the taste buds.'
        }
    ];

    return (
        <div className='relative '>

            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper relative lg:h-[80vh]"
            >
                {data1.map((item) => (
                    <SwiperSlide key={item.id} >
                        <Image alt='' className='brightness-50 w-full object-cover object-top' src={item.image} />
                        <MaxwidthWrapper>
                            <div className='absolute text-neutral-200 md:top-1/3 top-10'>
                                <h1 className='lg:text-8xl md:text-5xl text-2xl font-semibold'>
                                    {item.heading}
                                </h1>
                                <h1 className='lg:text-5xl md:text-3xl tracking-wider uppercase py-2 md:py-3.5'>
                                    Sale offer
                                </h1>
                                <p className='md:text-xl text-sm sm:leading-normal leading-none w-2/3'>
                                    {item.description}
                                </p>
                                <div className='border md:w-1/5 w-1/2 py-1.5 md:py-2.5 mt-2 rounded-md cursor-pointer uppercase text-center bg-neutral-700'>
                                    order now
                                </div>
                            </div>
                        </MaxwidthWrapper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;
