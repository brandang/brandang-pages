import { createMuiTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffffff",
            light: "#ffffff",
            dark: "#ffffff",
        },
        secondary: {
            main: "#434343",
            light: "#434343",
            dark: "#434343"
        },
    },
    typography: {
        button: {
            textTransform: 'none'
        },
        fontFamily: '"Segoe UI"',
        body1: {
            fontSize: 26,
            lineHeight: 3
        },
        body2: {
            fontSize: 20,
        },
        body3: {
            fontSize: 16,
        }
    }
})

export const DarkTextTypography = withStyles({
    root: {
        color: "#434343"
    },
})(Typography);

export const LightTextTypography = withStyles({
    root: {
        color: "#ffffff"
    }
})(Typography);

export const GreyTextTypography = withStyles({
    root: {
        color: "#cbcbcb"
    }
})(Typography);
