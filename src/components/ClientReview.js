"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import MaxwidthWrapper from './MaxwidthWrapper';
import HeadingTitle from './HeadingTitle';
import PragraphText from './PragraphText';
import Image from 'next/image';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


import img1 from '../../public/review1.jpg'
import img2 from '../../public/review2.jpg'
import img3 from '../../public/review3.jpg'
import img4 from '../../public/review4.jpg'


const ClientReview = () => {
    const data = [
        {
            "name": "Alice Johnson",
            "designation": "Marketing Specialist",
            "image": img1,
            "review": "Excellent customer service! Very attentive and helpful. I was really impressed by the level of dedication and care the team showed towards ensuring my needs were met. They went above and beyond to answer all my questions and provided insightful suggestions that really helped me make an informed decision. The quality of the product exceeded my expectations, and I will definitely be coming back for more. Highly recommend!",
            "rating": 5
        },
        {
            "name": "Bob Lee",
            "designation": "Sales Executive",
            "image": img2,
            "review": "The service was good, but the waiting time was too long. While the staff was friendly and professional, the delay in service was quite disappointing. I had to wait over an hour to get my issue resolved, which impacted my schedule significantly. However, once the service was finally provided, it was thorough and efficient. The team clearly knew what they were doing, and the final outcome was satisfactory.",
            "rating": 3
        },
        {
            "name": "Carol White",
            "designation": "HR Manager",
            "image": img3,
            "review": "Unsatisfactory experience. The staff were rude and unprofessional. From the moment I walked in, I felt unwelcome. The receptionist was dismissive, and the service personnel seemed disinterested in assisting me. When I finally got someone to help, they were abrupt and did not seem to care about my concerns. This was one of the worst customer service experiences I’ve had, and I will not be returning.",
            "rating": 1
        },
        {
            "name": "Carol Anchelotti",
            "designation": "Madrid Manager",
            "image": img4,
            "review": "Overall, my experience was mixed. While the product itself was high-quality and met my expectations, the customer service left much to be desired. The staff was not very knowledgeable and seemed more interested in closing the sale quickly rather than ensuring I was satisfied with my purchase. There were also some issues with the billing process, which took longer than necessary to resolve. Despite these challenges, I appreciate the product quality and would consider returning, but only if the service improves.",
            "rating": 4
        }
    ];


    return (
        <div className='py-10 h-full'>
            <div className=' h-full py-16 bg-neutral-300'>
                <MaxwidthWrapper>
                    <HeadingTitle title={"Client Review"} />
                    <PragraphText text={"What Say Client About us"} />
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mt-10"
                    >
                        {data.map((client, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col text-center  items-center p-4 bg-white rounded-lg shadow-md">

                                    <Image
                                        src={client.image}
                                        alt="image"
                                        className="w-24 my-5 h-24 object-cover  rounded-full mb-4"
                                    />
                                    <p className="text-gray-700 mb-2">{client.review}</p>
                                    <h3 className="text-xl text-blue-500 font-semibold">{client.name}</h3>
                                    <p className="text-sm  text-gray-500 mb-2">{client.designation}</p>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={client.rating}
                                        className='pb-5'
                                    />


                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </MaxwidthWrapper>
            </div>
        </div>
    );
};

export default ClientReview;
