import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CustomSectionHeader from '../components/custom-section-header.component'
import Image from 'next/image'

export default class Services extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Services | Starjen International</title>
                     <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
                    <meta name="description" content="We welcome you to an oasis of luxury strategically located in the heart of Lagos financial hub, STARJEN – a unique brand with impeccable services and facilities that gives laudable comfort to you and your guests. Starjen hotels has cozy suites strategically positioned to meet your needs for lodging. Located along Lagos – Badagry Expressway"></meta>
                    <meta name="keywords" content="Starjen Hotels, Starjen International Hotel, Great Lagos Hotel, Good Lagos Hotel. Badagary Express"></meta>
                    <meta name="author" content="Starjen International Hotel"></meta>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Righteous&display=swap" rel="stylesheet"/>       
                </Head>  
                <CustomSectionHeader 
                    title='Services'
                    pathname='services'
                /> 
                <section className='about'>
                    <p className='paragraph'>
                        We guarantee all our guests the services and facilities to make their stay with us as memorable as possible.
                    </p>
                    <div className="col-1-of-2">
                        <Image
                            src="https://res.cloudinary.com/udbasil/image/upload/v1638358000/Starjen%20international/IMG-20211201-WA0031_napun4.jpg"
                            alt="about-1"
                            layout='fill'
                            data-aos="fade-right"
                            objectFit='cover'
                        />
                    </div>
                    <div className="col-2-of-2">
                         <h3 className='header-3'>
                            Swimming pool
                        </h3>
                        <p className='paragraph'>
                            Equipped with facilities to suit your relaxation needs, enjoy the clean and clear Olympic-standard Swimming Pool at our hotel.
                        </p>
                    </div>
                    <div className="col-1-of-2">
                        <Image
                            src="https://res.cloudinary.com/udbasil/image/upload/v1638967898/Starjen%20international/bar_vpslcj.jpg"
                            alt="about-1"
                            layout='fill'
                            data-aos="fade-right"
                            objectFit='cover'
                        />
                    </div>
                    <div className="col-2-of-2">
                         <h3 className='header-3'>
                        Quality Bar
                    </h3>
                    <p className='paragraph'>
                        Come and taste the finest wines and alcohol drinks in Nigeria. We guarantee you pure satisfaction   
                    </p>
                    </div>
                   <div className="col-1-of-2">
                        <Image
                            src="https://res.cloudinary.com/udbasil/image/upload/v1638967942/Starjen%20international/Basketball-court-400x300_daskph.jpg"
                            alt="about-1"
                            layout='fill'
                            data-aos="fade-right"
                            objectFit='cover'
                        />
                    </div>
                    <div className="col-2-of-2">
                         <h3 className='header-3'>
                            Sports & Recreation
                    </h3>
                    <p className='paragraph'>
                        Looking to work up some sweat and get active ? We have got you covered with our state-of-the-art sport and recreation facilities
                    </p>
                    </div>
                    <div className="col-1-of-2">
                        <Image
                            src="https://res.cloudinary.com/udbasil/image/upload/v1638969747/Starjen%20international/6-400x300_cocvfi.jpg"
                            alt="about-1"
                            data-aos="fade-right"
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>                                                                                             
                    <div className="col-2-of-2">
                         <h3 className='header-3'>
                        Restaurant 
                    </h3>
                    <p className='paragraph'>
                        Experience our indoor dining. Enjoy the special delicacies our restaurant offers. Let our chefs give your taste buds a unique treat.
                    </p>
                    </div>
                    <div className="col-1-of-2">
                        <Image
                            src="https://res.cloudinary.com/udbasil/image/upload/v1638975096/Starjen%20international/photo-1614091199036-e934784dbf0f_bobyoz.jpg"
                            alt="about-1"
                            data-aos="fade-right"
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>                                                                                             
                    <div className="col-2-of-2">
                         <h3 className='header-3'>
                        Airport Transport 
                    </h3>
                    <p className='paragraph'>
                        Some Room plans come with the option of getting an affordable trip to the airport to ensure you dont miss your flight
                    </p>
                    </div>
                </section>
            </>
        )
    }
}
 
