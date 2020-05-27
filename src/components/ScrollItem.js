import React, {useEffect, useRef} from 'react'
import {makeStyles } from "@material-ui/core/styles"
import windowDimensions from '../WindowDimensions'

/*
* Component that shows itself when scrolled down. Otherwise, remains invisible.
* */

const duration = 700

const useStyles = makeStyles((theme) => ({
    scrollItem: {
        height: '100vh',
        background: "#006cbf",
        opacity: '0',
        transition: `opacity ${duration}ms ease-in-out`,
    },
    scrollItemActive: {
        height: '100vh',
        background: "#006cbf",
        opacity: '1',
        transition: `opacity ${duration}ms ease-in-out`,
    }
}))

export default function ScrollItem(props) {

    const windowHeight = windowDimensions().height

    const classes = useStyles()

    // Whenever page gets resized, components are rerendered and new refs are created. Use this so that wrapRef
    // wont be set to null
    let wrapRef = useRef()

    useEffect(() => {
        // update on page resize or scroll events
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
    }, []);
    // passing an empty array as second argument triggers the callback in useEffect only after the initial render
    // thus replicating `componentDidMount` lifecycle behaviour

    const handleScroll = () => {
        if (!wrapRef) {return}
        let { top } = wrapRef.current.getBoundingClientRect()
        top *= -1
        if (top > windowHeight/3) {
            wrapRef.current.style.opacity = '1'
        }
        else if (top < windowHeight/3) {
            wrapRef.current.style.opacity = '0'
        }
    }

    return (
        <div className={classes.scrollItem} ref={wrapRef}>
            {props.children}
        </div>
    )
}

