import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CustomSectionHeader from '../components/custom-section-header.component'
import RoomSection from '../components/roompage/rooms-section.component'

export default class Rooms extends Component {
 
    render() {
        return (
            <>
                <Head>
                    <title>Rooms</title>
                     <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
                    <meta name="description" content="We welcome you to an oasis of luxury strategically located in the heart of Lagos financial hub, STARJEN – a unique brand with impeccable services and facilities that gives laudable comfort to you and your guests. Starjen hotels has cozy suites strategically positioned to meet your needs for lodging. Located along Lagos – Badagry Expressway"></meta>
                    <meta name="keywords" content="Starjen Hotels, Starjen International Hotel, Great Lagos Hotel, Good Lagos Hotel. Badagary Express"></meta>
                    <meta name="author" content="Starjen International Hotel"></meta>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Righteous&display=swap" rel="stylesheet"/>       
                </Head> 
                <CustomSectionHeader 
                    title='Rooms'
                    pathname='rooms'
                /> 
                <RoomSection/>
            </>
        )
    }
}
