import { createMuiTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

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
            display: "inline",
            fontSize: 16,
            '@media (min-width:800px)': {
                fontSize: 20,
            },
            lineHeight: 2
        },
        body2: {
            fontSize: 14,
            '@media (min-width:800px)': {
                fontSize: 16,
            },
            lineHeight: 2
        },
        h1: {
            fontSize: 96,
            '@media (min-width:800px)': {
                fontSize: 128
            }
        },
        h2: {
            fontSize: 56,
            '@media (min-width:800px)': {
                fontSize: 72
            }
        },
        h3: {
            fontSize: 32,
            '@media (min-width:800px)': {
                fontSize: 44
            }
        },
        h4: {
            fontSize: 28,
            '@media (min-width:800px)': {
                fontSize: 38
            }
        },
        h6: {
            fontSize: 12,
            '@media (min-width:800px)': {
                fontSize: 14,
            }
        }
    },
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
