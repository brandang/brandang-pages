import backgroundOverlay from '../images/backgroundImage.jpg'
// import background from '../images/background.png'
import background from '../images/blackBackground.jpg'

export default class MainBackground extends HTMLElement {

    constructor() {
        super();
        // make ShadowRoot accessible from JS, which allows us to attach Shadow DOM
        this.attachShadow({mode:"open"})

        // function that gets called when animation ends.
        this.onTransitionEnd = this.onTransitionEnd.bind(this)
        this.startTransition = this.startTransition.bind(this)

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
					left: 20vw;
                    background: url(${backgroundOverlay});
                    background-size: contain;
                    background-repeat: no-repeat;
                    opacity: 0.2
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
            this.foreground.style.opacity = '0.4'
        }
        else {
            this.foreground.style.opacity = '0.2'
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