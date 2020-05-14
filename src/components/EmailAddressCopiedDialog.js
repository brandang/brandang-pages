import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function EmailAddressCopiedDialog(props) {

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={props.show}
            autoHideDuration={4000}
            onClose={props.handleClose}
            message="Email address copied to clipboard."
            action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={props.handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    );
}