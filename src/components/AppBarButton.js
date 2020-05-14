import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover, &$focusVisible': {
            '& $buttonText': {
                opacity: 1,
            },
        },
        padding:10
    },
    buttonText: {
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    buttonTextDisabled: {
    },
}));

const LightTextTypography = withStyles({
    root: {
        color: "#ffffff"
    }
})(Typography);

export default function AppBarButton(props) {

    const classes = useStyles();

    return (
        <ButtonBase disableRipple className={classes.button} {...props}>
            <LightTextTypography className={props.disabled ? classes.buttonTextDisabled : classes.buttonText}>
                {props.buttonText}
            </LightTextTypography>
        </ButtonBase>
    );
}
