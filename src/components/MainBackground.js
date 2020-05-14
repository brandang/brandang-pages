import React from 'react';
import backgroundOverlay from '../images/overlay.png'
import background from '../images/background.png'

export default class MainBackground extends HTMLElement {

    constructor() {
        super();
        // make ShadowRoot accessible from JS, which allows us to attach Shadow DOM
        this.attachShadow({mode:"open"})

        // function that gets called when animation ends.
        this.onTransitionEnd = this.onTransitionEnd.bind(this)
        this.startTransition = this.startTransition.bind(this)

        // whether or not to show this background
        const show = this.getAttribute('show')

        // the transition to play
        this.transitionDuration = "opacity 2s"

        // styling for components
        this.shadowRoot.innerHTML = `
            <style>
                :host {
					position: fixed;
					top: 0;
					left: 0;
					z-index: -1;
                    width: 100vw;
					height: 100vh;
                    background: url(${background});
                    background-size: cover;
                }
                .foreground {
                    position: fixed;
                    width: 100vw;
					height: 100vh;
                    background: url(${backgroundOverlay});
                    background-size: cover;
                    opacity: 0
                }
            </style>
            <div class="foreground"></div>
        `;

        this.host = this.shadowRoot.querySelector(".host")

        this.foreground = this.shadowRoot.querySelector(".foreground")

        this.fadingIn = true

        let st = this.startTransition
        setTimeout(function() {
            st()
        })
    }

    /**
     * Gets called whenever a property changes.
     */
    attributeChangedCallback(name, oldShow, newShow) {
        // start showing this background
        if (newShow === true && oldShow === false) {
            this.fadingIn = true
        } else if (newShow === false && oldShow === true) {
            this.foreground.removeEventListener("transitionend", this.onTransitionEnd)
            this.foreground.style.opacity = '0'
            this.foreground.style.transition = `${this.transitionDuration}`
        }
    }


    /**
     * Starts transition.
     */
    startTransition() {
        // start transition
        if (this.fadingIn) {
            this.foreground.style.opacity = '1'
        }
        else {
            this.foreground.style.opacity = '0.3'
        }

        // set transition length
        this.foreground.style.transition = `${this.transitionDuration}`

        // set listener to notify after transition is done
        this.foreground.addEventListener("transitionend", this.onTransitionEnd)
    }

    /**
     * Handles when transition animation ends.
     */
    onTransitionEnd() {
        // start transition
        if (this.fadingIn) {
            this.foreground.style.opacity = '1'
            this.fadingIn = false
        }
        else {
            this.foreground.style.opacity = '0.3'
            this.fadingIn = true
        }

        // remove listener so we dont get notified next time colour changes
        this.foreground.removeEventListener("transitionend", this.onTransitionEnd)

        this.startTransition()
    }
}