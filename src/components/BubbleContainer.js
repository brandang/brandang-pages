import React from 'react'
import '../App.css'
import PropTypes from "prop-types";
import {motion} from "framer-motion";

const expandAnimation = {
    scale: 1.1
};

const deflateAnimation = {
    scale: 1
};

/**
 * Bubbly container. Animates on mouse hovers.
 * @param children children inside of this RoundContainer.
 * @param colour colour of the container.
 * @returns {JSX.Element} the element.
 */
function BubbleContainer({ children }) {

    return (
        <motion.div whileHover={expandAnimation} whileTap={deflateAnimation}>
            {children}
        </motion.div>
    )
}

BubbleContainer.propTypes = {
    children: PropTypes.any,
};

export default BubbleContainer;