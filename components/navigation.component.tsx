import React, {ChangeEvent, useEffect} from 'react'
import Link from 'next/link';
import { 
    AiFillFacebook, 
    AiFillTwitterSquare,
    AiFillInstagram
 } from "react-icons/ai";
 import { 
    GiSmartphone, 
 } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRouter } from 'next/router';

export default function Navigation() {

    const router = useRouter()

    useEffect(() => {
         router.events.on('routeChangeComplete', (url) => {
            const navCheckbox = document.querySelector('.navigation__checkbox') as HTMLInputElement
            const nav = document.querySelector('.navigation') as HTMLInputElement
            navCheckbox.checked = false
            nav.classList.remove('active')
        });
    }, [])

    const toggleNav = (e: ChangeEvent<HTMLInputElement>) => {
        const nav = document.querySelector('.navigation')
        if (e.target.checked) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')

        }
    }
    return (
        <nav className="navigation">
            <div className="navigation__top">
                <div className="telephone">
                     <GiSmartphone/>
                    <span>
                        0802-2711-960
                    </span>
                    <span>
                        0702-6292-882
                    </span>
                   
                </div>
                <span className="app-logo">
                    Starjen
                </span>
                <ul className="social-media__list">
                    <li className="social-media__item" title='facebook'>
                        <a 
                            className="social-media__link"
                            href="https://www.facebook.com/pages/Starjen-International-Hotel/356945647730050">
                            <AiFillFacebook />
                        </a>
                    </li>
                    <li className="social-media__item">
                        <a 
                            className="social-media__link"
                            href="https://www.twitter.com/starjen2">
                            <AiFillTwitterSquare />
                        </a>
                    </li>
                </ul>
                <input 
                    type="checkbox"
                    id="nav-toggle"
                    className="navigation__checkbox"
                    onChange={toggleNav}
                />
                 <label 
                 htmlFor="nav-toggle"
                    className="navigation__button"
                >
                    <span className="navigation__icon">&nbsp;</span>
                </label>
            </div>
            <div className="navigation__bottom">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link href='/'>
                            <a 
                                className={
                                `navigation__link
                                ${
                                    router.pathname === '/' ?
                                    'active' :
                                    ''
                                }
                            `} >
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link href="/about">
                            <a 
                                className={
                                `navigation__link
                                ${
                                    router.pathname === '/about' ?
                                    'active' :
                                    ''
                                }
                            `} >
                                About
                            </a>
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link href="/rooms">
                            <a 
                                className={
                                `navigation__link
                                ${
                                    router.pathname === '/rooms' ?
                                    'active' :
                                    ''
                                }
                            `} >
                                Rooms
                            </a>
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link href="/services">
                            <a
                                className={
                                `navigation__link
                                ${
                                    router.pathname === '/services' ?
                                    'active' :
                                    ''
                                }
                            `}  
                            >
                                Services
                            </a>
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link href="/contact">
                            <a 
                                className={
                                `navigation__link
                                ${
                                    router.pathname === '/contact' ?
                                    'active' :
                                    ''
                                }
                            `} >
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
