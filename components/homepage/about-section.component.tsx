import React, { useState, FunctionComponent, useEffect } from 'react'
import { CustomSecondaryHeader } from '../custom-header.component'
import {Image} from 'cloudinary-react';
import Link from 'next/link';

const CLOUDNAME = process.env.NEXT_PUBLIC_ANALYTICS_CLOUDNAME

const images = [
    'v1638358003/Starjen%20international/IMG-20211201-WA0005_gdeowd.jpg',
    'v1638358000/Starjen international/IMG-20211201-WA0025_nyvrxp.jpg',
    'v1638358000/Starjen international/IMG-20211201-WA0031_napun4.jpg'
]


const AboutSection: FunctionComponent<{initial?: number}> = ({ initial = 0 }) =>  {

    const [currentSlide, setCurrentSlide] = useState(initial)

    const setCurrentSlideFunction = () => {
            setCurrentSlide(previousSlide => {
                if( previousSlide === 2) {
                    return 0
                } else {
                    return previousSlide + 1
                }
            })
    }
    useEffect(() => {
        setInterval(setCurrentSlideFunction, 4000)
    }, [])

    return (
        <section className="section-about " >
        <CustomSecondaryHeader title="Why Choose Us?"/>
            <div className="section-about__content">
                <h3 className="header-3 u-margin-bottom-small">
                    State-Of-The-Art Facilities 
                </h3>  
                <p className="paragraph">
                    The facilities in our hotel are of high standards and maintained constantly.
                    The rooms are cleaned on a frequent basis and are quite spacious for the comfort of guests.
                </p>
                <h3 className="header-3 u-margin-bottom-small">
                    Alluring Cuisine
                </h3>  
                <p className="paragraph">
                    All the meals that are prepared by the hotel’s restaurant meet the highest standards as far as taste and nutrition are concerned. Furthermore, a wide selection of meals is served ranging from local Nigerian foods such as Egusi, to international treats such as  pizza.
                </p>
                <Link href="/about">
                    <a 
                        className={
                        `btn btn--medium
                    `} >
                        Learn more
                    </a>
                </Link>
            </div>
            <div className="section-about__picture">
                <div className='composition'>
                {
                    images.map((image, index) => (
                        <div 
                            key={index}
                            className={`
                                composition__photo composition__photo--p${index + 1}
                                ${currentSlide === index ? 
                                    'active' :
                                    ''
                                }
                            `}>
                                 <Image 
                                    cloudName={CLOUDNAME}
                                    publicId={image} 
                                    width="auto" 
                                    responsive
                                    crop="scale"
                                    className="composition__image"
                                />
                            <div className="composition__background"/>
                        </div>
                        
                    ))
                }
            </div>
            </div>
        </section>
    )
}

export default  AboutSection;