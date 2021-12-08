import Link from 'next/link';
import React from 'react'
import {roomsData } from '../../data/rooms';

export default function RoomSection() {
    return (
        <section className='rooms'>
             
            {
                roomsData.map((room, index) => (
                    <div className="room">
                        <img 
                            src={room.image}
                            alt={room.name}
                            className="room__image"/>
                        <h5>
                            {room.name}
                        </h5>
                        { 
                        room.cost && (
                            <div className='room__price'>
                                {room.cost}
                            </div>
                        )}
                        
                        <Link href={`/rooms/${room.id}`}>
                            <a 
                                className='btn room__btn'>
                                See More
                            </a>
                        </Link>
                    </div>
                ))
            }
        </section>
    )
}
