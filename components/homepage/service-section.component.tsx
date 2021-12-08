import React, { useEffect, useRef } from 'react';
import { CustomSecondaryHeader } from '../custom-header.component'
import Image from 'next/image'

export default function ServiceSection() {

    
    return (
        <section className="section-service">
            <CustomSecondaryHeader title="Our Quality Services"/>
            <div className='services'>
                <div className='service__description'>
                    <h3 className="header-3 service__title">
                        Swimming pool
                    </h3>
                     <p className="paragraph service__details">
                         Equipped with facilities to suit your relaxation needs, enjoy the clean and clear Olympic-standard Swimming Pool at our hotel.
                    </p>
                </div>
                <video 
                    width="320" 
                    height="240" 
                    muted
                    autoPlay 
                    loop
                    className='service__video'>
                    <source 
                        src="https://res.cloudinary.com/udbasil/video/upload/v1638478535/Starjen%20international/Video/YouCut_20211202_215441490_ia93ss.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> 
                <video 
                    width="320" 
                    height="240" 
                    muted
                    loop
                    autoPlay 
                    className='service__video'>
                    <source src="https://res.cloudinary.com/udbasil/video/upload/v1638478711/Starjen%20international/Video/YouCut_20211202_215727254_mji0dx.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> 
                <div className='service__description'>
                     <h3 className="header-3 service__title">
                        Sports & Recreation
                    </h3>
                    <p className="paragraph service__details">
                        Looking to work up some sweat and get active ? We have got you covered with our  state-of-the-art sport and recreation facilities 
                    </p>
                </div>
                <div className='service__description'>
                    <h3 className="header-3 service__title">
                        Restaurant & Bar
                    </h3>
                    <p className="paragraph service__details">
                         Experience our indoor dining.  Enjoy the special delicacies our restaurant offers. Let our chefs give your taste buds a unique treat.
                    </p>
                </div>
                  <video 
                    width="320" 
                    height="240" 
                    muted
                    loop
                    autoPlay 
                    className='service__video'>
                    <source src="https://res.cloudinary.com/udbasil/video/upload/v1638478350/Starjen%20international/Video/YouCut_20211202_214941657_kemchg.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> 
            </div>
        </section>
    )
}
