import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CustomSectionHeader from '../components/custom-section-header.component'
import Image from 'next/image'

export default class About extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>About us | Starjen International</title>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Righteous&display=swap" rel="stylesheet"/>      
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
                    <meta name="description" content="We welcome you to an oasis of luxury strategically located in the heart of Lagos financial hub, STARJEN – a unique brand with impeccable services and facilities that gives laudable comfort to you and your guests. Starjen hotels has cozy suites strategically positioned to meet your needs for lodging. Located along Lagos – Badagry Expressway"></meta>
                    <meta name="keywords" content="Starjen Hotels, Starjen International Hotel, Great Lagos Hotel, Good Lagos Hotel. Badagary Express"></meta>
                    <meta name="author" content="Starjen International Hotel"></meta>
                </Head>  
                <CustomSectionHeader 
                    title='About us'
                    pathname='about'
                /> 
                <section className='about'>
                    <img 
                        alt='awards'
                        className='about__logo'
                        src='https://res.cloudinary.com/udbasil/image/upload/v1638727156/Starjen%20international/awards-logo_jplrad.jpg'/>
                    <p className='paragraph'>
                        Starjen Hotels has won numerous accolades from both local and international organizations. Our hospitality services have not gone unnoticed and that's why we continue to strive to serve you better.
                        We welcome you to an oasis of luxury strategically located in the heart of Lagos financial hub, STARJEN – a unique brand with impeccable services and facilities that gives laudable comfort to you and your guests. Starjen hotels has cozy suites strategically positioned to meet your needs for lodging. Located along Lagos – Badagry Expressway, you have the advantage of proximity to travel routes cutting away traffic jam of the Lagos township.
                    </p>
                    <div className="col-1-of-2">
                        <Image
                            src="https://res.cloudinary.com/udbasil/image/upload/v1638358001/Starjen%20international/IMG-20211201-WA0016_avlxel.jpg"
                            alt="about-1"
                            layout='fill'
                             data-aos="fade-right"
                            objectFit='cover'
                        />
                    </div>
                    <div className="col-2-of-2">
                         <h3 className='header-3'>
                            We provide quality facilities
                        </h3>
                        <p className='paragraph'>
                            The facilities in our hotel are of high standards and maintained constantly. The rooms are cleaned on a frequent basis and are quite spacious for the comfort of guests.
                        </p>
                    </div>
                    <div className="col-1-of-2">
                        <Image
                            src="https://res.cloudinary.com/udbasil/image/upload/v1638968362/Starjen%20international/7-400x300_heco1w.jpg"
                            alt="about-1"
                             data-aos="fade-right"
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className="col-2-of-2">
                         <h3 className='header-3'>
                        We provide alluring cuisine
                    </h3>
                    <p className='paragraph'>
                        All the meals that are prepared by the hotel’s restaurant meet the highest standards as far as taste and nutrition are concerned. Furthermore, a wide selection of meals is served ranging from local Nigerian foods such as Egusi, to international treats such as pizza.
                    </p>
                    </div>
                   <div className="col-1-of-2">
                        <Image
                            src="https://res.cloudinary.com/udbasil/image/upload/v1638357999/Starjen%20international/IMG-20211201-WA0028_vftwtf.jpg"
                            alt="about-1"
                            layout='fill'
                            objectFit='cover'
                             data-aos="fade-right"
                        />
                    </div>
                    <div className="col-2-of-2">
                         <h3 className='header-3'>
                        We provide great customer experience
                    </h3>
                    <p className='paragraph'>
                        Designed to satisfy every customer every time. We’re passionate about our guests and – just like you – we’re equally as passionate about the surrounding nearby attractions you have the opportunity to explore. We’ll make sure you have access to the exciting action and amazing food that we have to offer.
                    </p>
                    </div>
                    <div className="col-1-of-2">
                        <Image
                            src="https://res.cloudinary.com/udbasil/image/upload/v1638967887/Starjen%20international/bar_szzive.jpg"
                            alt="about-1"
                            layout='fill'
                            objectFit='cover'
                             data-aos="fade-right"
                        />
                    </div>                                                                                             
                    <div className="col-2-of-2">
                         <h3 className='header-3'>
                        Our Vision
                    </h3>
                    <p className='paragraph'>
                        We are set out with a vision to provide the best hospitality services affordable to a wide range of budgets and tastes with technology enhancement for better efficiency. The focus point of STARJEN HOTELS is to delight customers with its unique hospitality outfit. Apart from the elegant décor and excellent facilities, services.
                    </p>
                    </div>
                </section>
            </>
        )
    }
}
 