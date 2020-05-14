import React from 'react'
import '../App.css'

export default class DarkFooter extends React.Component {
    render() {
        /* Note: need to set display to block. Because when svg is inline, it sits at the text baseline. The extra space
        * is for hanging text for letters like y and g*/
        return (
            <svg style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1440 150">
                <path fill="#FFF" d="M0,64L120,58.7C240,53,480,43,720,58.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"/>
            </svg>
        )
    }
}
