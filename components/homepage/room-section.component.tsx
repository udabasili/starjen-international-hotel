import React, { FunctionComponent, useState, ChangeEvent } from 'react'
import { CustomSecondaryHeader } from '../custom-header.component'
import Link from 'next/link';
import {roomsData} from '../../data/rooms';

const RoomSection: FunctionComponent<{currentImageIndex?: number}> = (
    {
        currentImageIndex = 1
    }
)  => {

    const [currentImage, setCurrentImage] = useState(currentImageIndex)

    const onChangeVale =  (e: ChangeEvent<HTMLInputElement>) =>{
        setCurrentImage(Number(e.target.value))
    }

    return (
        <section className="section-rooms">
            <CustomSecondaryHeader title="Rooms"/>
            <div className='room-summary__image'>
                <img
                    src={roomsData[currentImage].image}
                    alt={roomsData[currentImage].name}
                />
            </div>
            <div className='room-summary__details' >
                {

                    roomsData
                        .filter((room, index) => (
                            index  < 3
                        ))
                        .map((room, index) => (
                        <>
                        <input 
                            type='radio' 
                            className="room__radio-input"  
                            name='room' 
                            value={index}
                            onChange={onChangeVale}
                            checked={index === currentImage}
                            id={room.name}/>
                        <label className="room__radio-label" htmlFor={room.name}>
                            <span className="room__radio-button"></span>
                            <span>{room.name}</span>
                            <ul className="room-summary__info">
                                <li className="room-summary__people">
                                    {room.maxPeople} people max
                                </li>
                                <li className="room-summary__size">{room.size}</li>
                            </ul>
                        </label>

                        </>
                    ))
                        
                }
             <Link href="/rooms">
                    <a 
                        className={
                        `btn btn--medium
                    `} >
                        Explore  Rooms
                    </a>
                </Link> 
            </div>
            
        </section>
    )
}

export default RoomSection