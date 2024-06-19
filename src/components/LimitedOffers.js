import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'
import Slider from './Slider'

const LimitedOffers = () => {
    return (
        <div>
            <MaxwidthWrapper>
                <HeadingTitle title={"Limited offers & Featured Items"} />
                <div className='flex xl:flex-row flex-col justify-between items-center '>
                    <Slider />
                    <Slider />

                </div>
            </MaxwidthWrapper>
        </div>
    )
}

export default LimitedOffers