import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import Slider from './Slider'
import limimg1 from '../../public/limited3.jpg'
import limimg2 from '../../public/limited4.jpg'
import limimg3 from '../../public/limitied1.jpg'
import limimg4 from '../../public/limited2.jpg'
import img1 from '../../public/bagssCategory.jpg'
import img2 from '../../public/chuttersnap-4JHMt29fvj8-unsplash.jpg'
import img3 from '../../public/shoesCategory.jpg'
const products = [
    {
        id: 1,
        title: 'Baby Toy Teddybear',
        price: 480.00,
        originalPrice: 540.00,
        reviews: 4,
        bookings: 25,
        image: limimg3,
        countdown: {
            days: 456,
            hours: 23,
            minutes: 58,
            seconds: 28,
        },
    },
    {
        id: 2,
        title: 'Stuffed Animal Elephant',
        price: 300.00,
        originalPrice: 350.00,
        reviews: 5,
        bookings: 15,
        image: limimg4,
        countdown: {
            days: 300,
            hours: 12,
            minutes: 40,
            seconds: 10,
        },
    },
    {
        id: 3,
        title: 'Stuffed Animal Elephant',
        price: 300.00,
        originalPrice: 350.00,
        reviews: 5,
        bookings: 15,
        image: img1,
        countdown: {
            days: 300,
            hours: 12,
            minutes: 40,
            seconds: 10,
        },
    },
    {
        id: 4,
        title: 'Stuffed Animal Elephant',
        price: 300.00,
        originalPrice: 350.00,
        reviews: 5,
        bookings: 15,
        image: img2,
        countdown: {
            days: 300,
            hours: 12,
            minutes: 40,
            seconds: 10,
        },
    },
    {
        id: 5,
        title: 'Stuffed Animal Elephant',
        price: 300.00,
        originalPrice: 350.00,
        reviews: 5,
        bookings: 15,
        image: img3,
        countdown: {
            days: 300,
            hours: 12,
            minutes: 40,
            seconds: 10,
        },
    },
];
const limitedOffer = [
    {
        id: 1,
        title: 'Rolex Watch',
        price: 480.00,
        originalPrice: 540.00,
        reviews: 4,
        bookings: 25,
        image: limimg1,
        countdown: {
            days: 456,
            hours: 23,
            minutes: 58,
            seconds: 28,
        },
    },
    {
        id: 2,
        title: 'Premium Watch',
        price: 300.00,
        originalPrice: 350.00,
        reviews: 5,
        bookings: 15,
        image: limimg2,
        countdown: {
            days: 300,
            hours: 12,
            minutes: 40,
            seconds: 10,
        },
    },
];

const LimitedOffers = () => {
    return (
        <div>
            <MaxwidthWrapper>

                <div className='flex xl:flex-row flex-col justify-between items-center'>
                    <Slider sliderTitle={"Limited Offer"} products={products} />
                    <Slider sliderTitle={"Featured Items"} products={limitedOffer} />
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default LimitedOffers
