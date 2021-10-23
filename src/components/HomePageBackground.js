import backgroundOverlay from '../images/backgroundImage.jpg';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

/**
 * Animated background for the Home page. All other elements on the page must have a zIndex of at least 0 to appear
 * above this background.
 */

const transition = "opacity 2s";

const useStyles = makeStyles(() => ({
    container: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: '-1',
    },
    background: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: '-1',
        backgroundSize: 'cover',
        background: 'black',
    },
    backgroundOverlay: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: '-1',
        opacity: '0.0',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        background: `url(${backgroundOverlay})`
    }
}));

export default function HomePageBackground() {

    const classes = useStyles();

    const maxOpacity = '0.35';

    const minOpacity = '0.1';

    let fadingIn = true;

    // Do this at the end of the queue.
    const firstTransition = startTransition;
    setTimeout(function() {
        firstTransition();
    });

    // Begins transition.
    function startTransition() {
        const overlay = document.getElementById("backgroundOverlay");

        // Start transition.
        if (fadingIn) {
            overlay.style.opacity = maxOpacity;
        }
        else {
            overlay.style.opacity = minOpacity;
        }

        // Set transition time length.
        overlay.style.transition = `${transition}`;

        // set listener to notify after transition is done
        overlay.addEventListener("transitionend", onTransitionEnd);
    }

    // End transition.
    function onTransitionEnd() {
        const overlay = document.getElementById("backgroundOverlay");

        // start transition.
        if (fadingIn) {
            overlay.style.opacity = minOpacity;
            fadingIn = false;
        }
        else {
            overlay.style.opacity = maxOpacity;
            fadingIn = true;
        }

        // remove listener so we dont get notified next time colour changes
        overlay.removeEventListener("transitionend", this);

        startTransition();
    }

    return (
        <div className={classes.container}>
            <div id={"background"} className={classes.background}/>
            <div id={"backgroundOverlay"} className={classes.backgroundOverlay}/>
        </div>
    )
}
