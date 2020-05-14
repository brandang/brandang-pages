import React from 'react'
import '../App.css'

export default class DarkHeader extends React.Component {
    render() {
        /* Note: need to set display to block. Because when svg is inline, it sits at the text baseline. The extra space
        * is for hanging text for letters like y and g*/
        return (
            <svg style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 150">
                <path fill="#FFF" d="M0,64L120,96C240,128,480,192,720,192C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"/>
            </svg>
        )
    }
}