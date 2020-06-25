import backgroundOverlay from '../images/backgroundImage.jpg'
import background from '../images/blackBackground.jpg'
import React from "react"
import {makeStyles} from "@material-ui/core/styles"

/**
 * Animated background for the Home page. All other elements on the page must have a zIndex of at least 0 to appear
 * above this background.
 */

const transition = "opacity 2s"

const styles = makeStyles(() => ({
    container: {
        position: 'fixed',
        width: '100vw',
        height: '100vh'
    },
    background: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: '-1',
        backgroundSize: 'cover',
        background: `url(${background})`,
    },
    backgroundOverlay: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: '-1',
        opacity: '0.2',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        background: `url(${backgroundOverlay})`
    }
}))

export default function NumberClassificationDialog(props) {
    const classes = styles()

    let fadingIn = true

    let st = startTransition
    setTimeout(function() {
        st()
    })

    function startTransition() {
        const overlay = document.getElementById("backgroundOverlay")

        // start transition
        if (fadingIn) {
            overlay.style.opacity = '0.4'
        }
        else {
            overlay.style.opacity = '0.2'
        }

        // set transition length
        overlay.style.transition = `${transition}`

        // set listener to notify after transition is done
        overlay.addEventListener("transitionend", onTransitionEnd)
    }

    function onTransitionEnd() {
        const overlay = document.getElementById("backgroundOverlay")

        // start transition
        if (fadingIn) {
            overlay.style.opacity = '1'
            fadingIn = false
        }
        else {
            overlay.style.opacity = '0.3'
            fadingIn = true
        }

        // remove listener so we dont get notified next time colour changes
        overlay.removeEventListener("transitionend", this)

        startTransition()
    }

    return (
        <div className={classes.container}>
            <div id={"background"} className={classes.background}/>
            <div id={"backgroundOverlay"} className={classes.backgroundOverlay}/>
        </div>
    )
}
