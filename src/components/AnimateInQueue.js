import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

/**
 * A container for a bunch of components that need to be animated in sequentially. Children must have a numerical
 * playOrder prop. This prop is the multiplier applied on the delay prop that specifies how long to wait after component
 * enters view until it should be played. For example, setting it to 2 means that it will be played after (delay*2)
 * milliseconds after entering view until it should start to play.
 * If no delay or playOrder is specified, the animation will play as soon as component enters view.
 */

export default function AnimateInQueue(props) {

    // encapsulate each child with a ScrollAnimation component with corresponding delays
    const childrenWithAnimations = React.Children.map(props.children, child => {
        let delay
        if (props.delays != null && child.props.playOrder != null) {
            delay = props.delays * child.props.playOrder
        } else {
            delay = 0
        }

        return (
            <ScrollAnimation animateIn={props.animateIn} animateOnce={props.animateOnce} delay={delay}>
                {child}
            </ScrollAnimation>
        )
    })

    return (
        <div>
            {childrenWithAnimations}
        </div>
    )
}