import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default class Gallery extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
                <Head>
                    <title>Gallery</title>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Righteous&display=swap" rel="stylesheet"/>       
                </Head>  
            </>
        )
    }
}
