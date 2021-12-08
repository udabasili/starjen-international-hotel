import React, {FunctionComponent, useEffect} from 'react'
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";

export const Modal:FunctionComponent = () => {



    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    Contact Us
                </div>
                <div className="modal__body">
                    <ul className="contact__list">
                        <li className="contact__item">
                             <BsFillTelephoneFill/>
                            <span>0702-6292-882</span>
                        </li>
                        <li className="contact__item">
                            <BsFillTelephoneFill/>
                            <span>0802-2711-960</span>
                        </li>
                        <li className="contact__item">
                            <BsWhatsapp/>
                            <a 
                                target="_blank"
                                rel='noopener noreferrer'
                                href="https://wa.me/+2348136618166?text=I'm%20interested%20in%20your%20room">
                                Contact Through WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="modal__footer">
                    <button className="btn btn--medium close-button ">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}



export default Modal
