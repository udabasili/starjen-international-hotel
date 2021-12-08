import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CustomSectionHeader from '../../components/custom-section-header.component'
import { withRouter, NextRouter } from 'next/router'
import { roomsData } from '../../data/rooms'
import { AiOutlineWifi } from "react-icons/ai";
import { MdCleaningServices, MdOutlineFreeBreakfast } from "react-icons/md";


interface WithRouterProps {
    router: NextRouter
}

interface RoomProps {
    name: string,
    id: string,
    bed: number,
    maxPeople: number,
    size: string,
    cost?: string,
    image: string,
    description: string,
    amenities: {
        wifi: boolean,
        roomService: boolean,
        breakfast: boolean,
        airPortPickupService: boolean | string
    }
}

interface RoomsDetailsProp extends WithRouterProps {}

interface RoomsDetailsState  {
  data: RoomProps
}


class RoomsDetails extends Component<RoomsDetailsProp, RoomsDetailsState> {
    pid: string | string[]

    constructor(props) {
        super(props);
        this.state = {
            data: {} as RoomProps
        }
    }
    
    componentDidMount(): void {
        const { router } = this.props
        const { pid } = router.query
        console.log(pid)
        const data = roomsData.find(room => room.id === pid)
        console.log(data)
        if ( data === undefined){
            router.push('/rooms')
        }
        this.setState({
            data
        })
    }


    render() {
        
        const data = this.state.data

        return (
            <>
                <Head>
                    <title>Rooms Description</title>
                     <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
                    <meta name="description" content="We welcome you to an oasis of luxury strategically located in the heart of Lagos financial hub, STARJEN – a unique brand with impeccable services and facilities that gives laudable comfort to you and your guests. Starjen hotels has cozy suites strategically positioned to meet your needs for lodging. Located along Lagos – Badagry Expressway"></meta>
                    <meta name="keywords" content="Starjen Hotels, Starjen International Hotel, Great Lagos Hotel, Good Lagos Hotel. Badagary Express"></meta>
                    <meta name="author" content="Starjen International Hotel"></meta>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Righteous&display=swap" rel="stylesheet"/>       
                </Head> 
                {
                    Object.keys(data).length === 0 ? 
                    <>
                    </> :
                    <>
                      <CustomSectionHeader 
                            title={data.name}
                            pathname='rooms'
                            subpath={data.id}
                        /> 
                        <section className='room-detail-section'>
                            <img 
                                src={data.image}
                                alt={data.name}
                                className='room-detail__image'/>
                            <p className="paragraph room-detail__description">
                                {data.description}
                            </p>
                            <div className="amenities">
                                <ul className="amenities__list">
                                    {
                                        data.amenities.wifi && (
                                            <li className="amenities__item">
                                                <AiOutlineWifi/>
                                                <span>Wifi Included</span>
                                            </li>
                                        )
                                    }
                                    {
                                        data.amenities.roomService && (
                                            <li className="amenities__item">
                                                <MdCleaningServices/>
                                                <span>Room Services Included</span>
                                            </li>
                                        )
                                    }
                                    {
                                        data.amenities.breakfast && (
                                            <li className="amenities__item">
                                                <MdOutlineFreeBreakfast/>
                                                <span>Breakfast Included</span>
                                            </li>
                                        )
                                    }
                                    
                                </ul>
                            </div>
                            <aside  className='room-detail__aside'>
                                {
                                    data.cost && (
                                        <div className='price'>
                                            <span>{data.cost}</span>
                                            <span>per night</span>
                                        </div>
                                    )
                                }
                                
                                <ul className="facilities__list">
                                    <li className="facilities__item">
                                        <span>
                                            Room Size
                                        </span>
                                        <span>
                                            {data.size}
                                        </span>
                                    </li>
                                    <li className="facilities__item">
                                        <span>
                                            Max People Allowed
                                        </span>
                                        <span>
                                            {data.maxPeople}
                                        </span>
                                    </li>
                                    <li className="facilities__item">
                                        <span>
                                            No. of Beds
                                        </span>
                                        <span>
                                            {data.bed}
                                        </span>
                                    </li>
                                </ul>
                                <button className="btn btn--medium booking-button trigger">
                                    Book Now
                                </button>
                            </aside>
                        </section>
                    </>

                }
              
            </>
        )
    }
}

export default withRouter(RoomsDetails)