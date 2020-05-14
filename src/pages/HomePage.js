import React from 'react'

import '../App.css'
import Avatar from '@material-ui/core/Avatar'
import portrait from "../images/Portrait.jpg"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core/styles"
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles'
import {theme} from '../CustomTheme'
import posed from 'react-pose'
import { Router, Link, Location } from '@reach/router'
import MainBackground from "../components/MainBackground"

const ItemPoseContainer = posed.div({
    enter: { staggerChildren: 500, delayChildren: 500 }
});

const AvatarPosedContainer = posed.div({
    enter: { staggerChildren: 0, delayChildren: 50 }
});

const Item = posed.p({
    enter: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
});

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const useStyles = makeStyles((theme) => ({
    grid: {
        height: '100vh',
		paddingBottom: '500'
    },
    avatar: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
}));

window.customElements.define("main-background", MainBackground);

function HomePage() {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <main-background/>
            <div style={{ padding: 20 }}>

                <Grid container spacing={5} direction="row" justify="flex-start" alignItems="center"
                      className={classes.grid}>

                    <Grid item xs={2}/>

                    <AvatarPosedContainer>
                        <Item>
                            <Grid item >
                                <Avatar alt="Brandon Dang" src={portrait} className={classes.avatar}/>
                            </Grid>
                        </Item>
                    </AvatarPosedContainer>

                    <Grid item direction="column" >
                        <ItemPoseContainer>
                            <Item>
                                <WhiteTextTypography align={"left"} variant="h4" color={"textPrimary"}>
                                    Hello!
                                </WhiteTextTypography>
                            </Item>
                            <Item>
                                <WhiteTextTypography align={"left"} variant="h2">
                                    I'm Brandon.
                                </WhiteTextTypography>
                            </Item>
                            <Item>
                                <WhiteTextTypography align={"left"} variant="h4">
                                    A Software Developer.
                                </WhiteTextTypography>
                            </Item>
                            <Item>
                                <Grid item direction="row" align={"left"}>
                                    <Button color="primary" to="/AboutMe" component={Link}>About me</Button>
                                    <Button color="primary" to="/MyProjects" component={Link}>My projects</Button>
                                </Grid>
                            </Item>
                        </ItemPoseContainer>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default HomePage;
