import React from 'react'
import {ThemeProvider, withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import {theme} from "../CustomTheme"
import {DarkTextTypography, LightTextTypography} from "../CustomTheme"
import {classifierDialogErrorText} from "../Localisation"

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        backgroundColor: '#434343'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: '#FFF',
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, id } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} id={id}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function NumberClassificationDialog(props) {

    return (
        <ThemeProvider theme={theme}>
            <Dialog onClose={props.onHide} aria-labelledby="customized-dialog-title" open={props.show}>
                <DialogTitle id="customized-dialog-title" onClose={props.onHide}>
                    <LightTextTypography variant={"h5"}>Submission Results</LightTextTypography>
                </DialogTitle>
                <DialogContent>
                    <DarkTextTypography gutterBottom variant={"body2"}>
                        Your number was predicted to be: {props.prediction}
                    </DarkTextTypography>
                    <DarkTextTypography gutterBottom variant={"body2"}>
                        {classifierDialogErrorText}
                    </DarkTextTypography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.onHide} color="secondary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    )
}