import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import HeadingTitle from './HeadingTitle'

const NewArrivals = () => {
    return (
        <div className='border-2 py-5'>
            <MaxwidthWrapper >
                <HeadingTitle title={"New Arrival"} />
            </MaxwidthWrapper>
        </div>
    )
}

export default NewArrivals