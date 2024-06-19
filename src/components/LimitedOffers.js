import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import Slider from './Slider'

const LimitedOffers = () => {
    return (
        <div>
            <MaxwidthWrapper>
                <div className='flex xl:flex-row flex-col justify-between items-center '>
                    <Slider />
                    <Slider />
                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default LimitedOffers