import React from 'react'
import myLoader from '../myLoader.component'
import {Image} from 'cloudinary-react';
import Link from 'next/link';

const CLOUDNAME = process.env.NEXT_PUBLIC_ANALYTICS_CLOUDNAME
export default function Header() {
    return (
        <header className="header">
            <Image 
                cloudName={CLOUDNAME}
                publicId="v1638357999/Starjen%20international/IMG-20211201-WA0032_vwurye.jpg" 
                width="auto" 
                responsive
                crop="scale"
                className="header__image"
                />
            <div className='header__background'/>
            <div className='header__content'>
                <h3 className="header-3">No place like home</h3>
                <h1 className="header-1">Unless you are with us</h1>
                <button className="btn header__btn trigger">
                   I am Interested
                </button>
            </div>
        </header>
    )
}
