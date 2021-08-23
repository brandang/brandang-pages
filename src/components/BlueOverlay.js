import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import windowDimensions from '../WindowDimensions';

// Duration of animation.
const duration = 700;

const useStyles = makeStyles(() => ({
    scrollItem: {
        height: '100vh',
        background: "#006cbf",
        opacity: '0',
        transition: `opacity ${duration}ms ease-in-out`,
        position: 'relative',
        zIndex: 1
    },
}));

/**
 * A blue overlay that fades in whenever user scrolls past 1/3 the height of the page. Invisible otherwise.
 * @returns {JSX.Element} the blue overlay.
 */
function BlueOverlay() {

    const windowHeight = windowDimensions().height;

    const classes = useStyles();

    // Runs when page finishes loading.
    useEffect(() => {

        const handleScroll = () => {

            // Update opacity.
            const overlay = document.getElementById('blueOverlay');
            let top = overlay.getBoundingClientRect().top;
            top *= -1;
            if (top > windowHeight / 3) {
                overlay.style.opacity = '1';
            }
            else if (top < windowHeight/3) {
                overlay.style.opacity = '0';
            }
        }

        // update on page resize or scroll events
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
    });

    return (
        <div id={'blueOverlay'} className={classes.scrollItem}>
            <div id="home" style={{height: '100vh', zIndex: 1, position: "relative"}}/>
        </div>
    )
}

export default BlueOverlay;
