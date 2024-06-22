import React from 'react';
import MaxwidthWrapper from './MaxwidthWrapper';
import HeadingTitle from './HeadingTitle';
import Marquee from "react-fast-marquee";

const Brands = () => {
    const brands = ["Gucci", "Burberry", "Armani", "Dolce & Gabbana", "Fendi", "Givenchy", "Balenciaga", "Yves Saint Laurent"];

    return (
        <div className='py-10 text-center'>
            <MaxwidthWrapper>
                <div className='flex justify-center items-center  flex-wrap flex-row'>

                    {brands.map((brand, index) => (
                        <span
                            key={index}
                            className="text-2xl  font-semibold mx-4   whitespace-nowrap"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </MaxwidthWrapper>
        </div>
    );
}

export default Brands;
