import React from 'react'
import '../App.css'

export function BlueHeader() {
    /* Note: need to set display to block. Because when svg is inline, it sits at the text baseline. The extra space
    * is for hanging text for letters like y and g*/
    return (
        <svg style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 28 1440 150">
            <path fill="#006cbf" d="M0,128L1440,32L1440,0L0,0Z"/>
        </svg>
    )
}

export function OrangeHeader() {
    /* Note: need to set display to block. Because when svg is inline, it sits at the text baseline. The extra space
    * is for hanging text for letters like y and g*/
    return (
        <svg style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 28 1440 150">
            <path fill="#E56B1F" d="M0,128L1440,32L1440,0L0,0Z"/>
        </svg>
    )
}

export function WhiteHeader() {
    /* Note: need to set display to block. Because when svg is inline, it sits at the text baseline. The extra space
    * is for hanging text for letters like y and g*/
    return (
        <svg style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 28 1440 150">
            <path fill="#FFF" d="M0,128L1440,32L1440,0L0,0Z"/>
        </svg>
    )
}

export function PurpleHeader() {
    /* Note: need to set display to block. Because when svg is inline, it sits at the text baseline. The extra space
    * is for hanging text for letters like y and g*/
    return (
        <svg style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 28 1440 150">
            <path fill="#961fe0" d="M0,128L1440,32L1440,0L0,0Z"/>
        </svg>
    )
}

export function DarkBlueHeader() {
    /* Note: need to set display to block. Because when svg is inline, it sits at the text baseline. The extra space
    * is for hanging text for letters like y and g*/
    return (
        <svg style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 28 1440 150">
            <path fill="#2a5a79" d="M0,128L1440,32L1440,0L0,0Z"/>
        </svg>
    )
}