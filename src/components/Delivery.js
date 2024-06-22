import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandHoldingHand } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";

const data = [
    {
        "title": "Free Shipping",
        "icons": <CiDeliveryTruck />,
        "btitle": "Free shipping on all US order or order abobe $200"

    },
    {
        "title": "24X7 Support",
        "icons": <FaHandHoldingHand />,
        "btitle": "Contact us 24 hours a day, 7 days a week"

    },
    {
        "title": "30 Days Return",
        "icons": <IoTimerOutline />,
        "btitle": "Simply return it within 30 days for an exchange"

    },
    {
        "title": "Payment Secure",
        "icons": <RiSecurePaymentFill />,
        "btitle": "Contact us 24 hours a day, 7 days a week"

    },

]

export const DeliveryCards = ({
    title, icons, btitle
}) => {
    return (
        <div className='h-full w-full border flex text-center py-10 cursor-pointer p-4 flex-col justify-center items-center hover:shadow-xl bg-neutral-50'>
            <p className='text-6xl'>
                {icons}
            </p>

            <p className='font-semibold text-xl'>
                {title}
            </p>
            <p className='text-neutral-400'>
                {btitle}
            </p>
        </div>
    )
}


const Delivery = () => {
    return (
        <div className='py-10'>
            <MaxwidthWrapper>
                <div className=' grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-5 justify-center items-center'>
                    {
                        data.map((item, index) =>
                            <DeliveryCards key={index} {...item}></DeliveryCards>
                        )
                    }
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default Delivery