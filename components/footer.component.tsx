import React from 'react'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-nav">
                <li className="footer-nav__item">
                    <Link href="/rooms">
                        <a 
                             className="footer-nav__link">
                            See our rooms
                        </a>
                    </Link>
                </li>
                 <li className="footer-nav__item">
                    <Link href="/services">
                        <a 
                             className="footer-nav__link">
                            See our services
                        </a>
                    </Link>
                </li>
                 <li className="footer-nav__item">
                    <Link href="/contact">
                        <a 
                             className="footer-nav__link">
                            Contact us
                        </a>
                    </Link>
                </li>
                 <li className="footer-nav__item">
                    <Link href="/about">
                        <a 
                             className="footer-nav__link">
                            See why you trust us
                        </a>
                    </Link>
                </li>
            </ul>
            <p className="copyright">
                &copy; Copyright 2021 STARJEN INTERNATIONAL HOTELS.
            </p>
        </footer>
    
    )
}
