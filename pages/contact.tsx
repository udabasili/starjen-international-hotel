import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CustomSectionHeader from '../components/custom-section-header.component'
import { 
    BsPhoneVibrate,
    BsPinMap
} from "react-icons/bs";


export default class Contact extends Component {
    static propTypes = {
        prop: PropTypes
    }

     render() {
        return (
            <>
                <Head>
                    <title>Contact</title>
                     <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
                    <meta name="description" content="We welcome you to an oasis of luxury strategically located in the heart of Lagos financial hub, STARJEN – a unique brand with impeccable services and facilities that gives laudable comfort to you and your guests. Starjen hotels has cozy suites strategically positioned to meet your needs for lodging. Located along Lagos – Badagry Expressway"></meta>
                    <meta name="keywords" content="Starjen Hotels, Starjen International Hotel, Great Lagos Hotel, Good Lagos Hotel. Badagary Express"></meta>
                    <meta name="author" content="Starjen International Hotel"></meta>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Righteous&display=swap" rel="stylesheet"/>       
                </Head>  
                <CustomSectionHeader 
                    title='Contact us'
                    pathname='contact'
                /> 
                <section className='contact'>
                    <div className='col-1-of-3'>
                        <h3 className='header-3'>
                            Reach Us
                        </h3>
                        <ul className='contact__list'>
                            <li className='contact__item'>
                                <BsPhoneVibrate/>
                                <span>
                                    Telephone
                                </span>
                                <span>
                                    0802-2711-960, 0702-6292-882
                                </span>
                            </li>
                            <li className='contact__item'>
                                <BsPinMap/>
                                <span>
                                    Address
                                </span>
                                <span>
                                     Km 21, Lagos-Badagry Expressway, Doyin Bus-stop, Okokomaiko, Lagos
                                </span>
                            </li>

                        </ul>
                    </div>
                    <div className='col-2-of-3'>
                        
                    </div>
                </section>

            </>
        )
    }
}
