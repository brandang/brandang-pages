import React from 'react'
import '../App.css'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    round: {
        width: "100px",
        height: "100px",
        padding: "10px",
        margin: "10px"
    },
}))

export default function RoundContainer(props) {
    const classes = useStyles()

    return (
        <Avatar className={classes.round} style={{backgroundColor: props.colour}}>
            {props.children}
        </Avatar>
    )
}
