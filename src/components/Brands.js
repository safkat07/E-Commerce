import React from 'react';
import MaxwidthWrapper from './MaxwidthWrapper';
import HeadingTitle from './HeadingTitle';
import Marquee from "react-fast-marquee";

const Brands = () => {
    const brands = ["Gucci", "Louis Vuitton", "Prada", "Chanel", "Hermès", "Versace", "Dior", "Burberry", "Armani", "Dolce & Gabbana", "Fendi", "Givenchy", "Balenciaga", "Yves Saint Laurent"];

    return (
        <div className='py-10'>
            <MaxwidthWrapper>
                <Marquee
                    pauseOnHover={true}
                    gradient={false}
                    speed={50}
                    className="mt-5"
                >
                    {brands.map((brand, index) => (
                        <span
                            key={index}
                            className="text-2xl font-semibold mx-4 whitespace-nowrap"
                        >
                            {brand}
                        </span>
                    ))}
                </Marquee>
            </MaxwidthWrapper>
        </div>
    );
}

export default Brands;
