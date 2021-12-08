import React from 'react'
import { FaHotel } from "react-icons/fa";

export function CustomSecondaryHeader({
    title=''
}: {
    title: string
}) {
    return (
        <div className="custom-header--secondary">
            <span className="logo">
                <FaHotel/>
            </span>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="header-2">{title}</h2>
            </div>
        </div>
    )
}
