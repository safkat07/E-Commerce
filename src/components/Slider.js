"use client"

import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Image from 'next/image';

const Slider = ({ products, sliderTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    return (
        <div className="w-full mx-auto p-4">
            <div className='flex justify-between items-center'>
                <h2 className="text-2xl font-bold mb-4">{sliderTitle}</h2>
                <div className='flex py-5 gap-5'>
                    <button onClick={handlePrev} className="bg-gray-800 text-white px-2 py-1 rounded">
                        prev
                    </button>
                    <button onClick={handleNext} className="bg-gray-800 text-white px-2 py-1 rounded">
                        next
                    </button>
                </div>
            </div>
            <div className="relative w-full h-auto overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {products.map((product) => (
                        <div key={product.id} className="w-full text-neutral-500 py-10 px-5 flex-shrink-0 bg-white border rounded shadow grid md:grid-cols-2 gap-4">
                            <div className="w-full h-80  flex items-center justify-center">
                                <Image src={product.image} alt='product' />
                            </div>
                            <div className="w-full flex flex-col justify-center">
                                <h3 className="text-xl font-semibold">{product.title}</h3>
                                <div className="flex items-center my-2">
                                    <Rating style={{ maxWidth: 100 }} value={product.reviews} />
                                    <span className="ml-2 text-gray-500">({product.reviews} Review)</span>
                                </div>
                                <div className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</div>
                                <div className="text-2xl font-bold text-neutral-500">${product.price.toFixed(2)}</div>
                                <div className="flex items-center my-4">
                                    <div className="text-center px-2">
                                        <div className="text-xl font-bold">{product.countdown.days}</div>
                                        <div className="text-sm text-gray-500">Days</div>
                                    </div>
                                    <div className="text-center px-2">
                                        <div className="text-xl font-bold">{product.countdown.hours}</div>
                                        <div className="text-sm text-gray-500">Hours</div>
                                    </div>
                                    <div className="text-center px-2">
                                        <div className="text-xl font-bold">{product.countdown.minutes}</div>
                                        <div className="text-sm text-gray-500">Min</div>
                                    </div>
                                    <div className="text-center px-2">
                                        <div className="text-xl font-bold">{product.countdown.seconds}</div>
                                        <div className="text-sm text-gray-500">Sec</div>
                                    </div>
                                </div>
                                <p className="text-gray-500 mb-4">
                                    Lorem Ipsum is simply dummy text the printing and typesetting.
                                </p>
                                <span className="block text-gray-600 mb-2">Total Booking: {product.bookings}</span>
                                <div>
                                    <button className="bg-gray-800 text-white px-4 py-2 rounded mr-2">Remind Me</button>
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
