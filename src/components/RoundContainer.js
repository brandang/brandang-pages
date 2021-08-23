import React from 'react'
import '../App.css'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    round: {
        width: "100px",
        height: "100px",
        padding: "10px",
        margin: "10px"
    },
}))

/**
 * Round 'bubble' container.
 * @param children children inside of this RoundContainer.
 * @param colour colour of the container.
 * @returns {JSX.Element} the element.
 */
function RoundContainer({ children, colour }) {
    const classes = useStyles()

    return (
        <Avatar className={classes.round} style={{backgroundColor: colour}}>
            {children}
        </Avatar>
    )
}

RoundContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    colour: PropTypes.string
};

export default RoundContainer;