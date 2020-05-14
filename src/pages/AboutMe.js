import React from 'react'

import '../App.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core/styles"
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles'
import {theme, LightTextTypography, DarkTextTypography} from '../CustomTheme'
import posed from 'react-pose'
import { Router, Link, Location } from '@reach/router'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import CodeIcon from '@material-ui/icons/Code'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import aboutMePic from '../images/aboutMe.JPG'
import IconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import {default as HyperLink} from '@material-ui/core/Link'
import Resume from '../files/Resume.pdf'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import EmailAddressCopiedDialog from "../components/EmailAddressCopiedDialog"
import AppBarButton from "../components/AppBarButton"
import DarkHeader from "../components/DarkHeader"
import DarkFooter from "../components/DarkFooter"

import {aboutMeBrief, myEducationInfo, myWorkExperienceInfo, myProgrammingLanguages, myProjectsExperience,
    myHobbiesAndInterests, emailAddress}
    from "../Localisation"

const PoseContainer = posed.div({
    enter: { staggerChildren: 100 }
});

const Item = posed.p({
    enter: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
});

const AppBarItem = posed.p({
    enter: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
});

const useStyles = makeStyles((theme) => ({
    grid: {
        height: '80vh'
    },
    avatar: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
    appBar: {
        background: '#434343',
        boxShadow: 'none',
        flexGrow: 1,
        alignItems: 'right'
    },
    appBarButton: {
        marginLeft: 20
    },
    posedItem: {
        paddingTop: 0,
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 20,
        position: "relative",
        overflow: "hidden",
        margin: 0
    },
    posedItemDark: {
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 100,
        paddingRight: 100,
        backgroundColor: '#434343'
    },
    posedHeaderDark: {
        paddingTop: 50,
        backgroundColor: '#434343',
        border: 0,
        marginBottom: 0
    },
    posedFooterDark: {
        paddingBottom: 80,
        margin: 0,
        backgroundColor: '#434343',
    },
    paperItem: {
        padding: 20,
        height: '90%'
    },
    skillsGrid: {
        paddingBottom: 20
    },
    purpleIcon: {
        color: '#885fff',
        fontSize: 40
    },
    whiteIcon: {
        color: '#FFF',
        fontSize: 30
    },
    iconButton: {
        marginTop: 20,
        marginRight: 20
    },
    banner: {
        width: '100%',
        height: 'auto'
    }
}))

function AboutMePage() {

    const [showDialog, setShowDialog] = React.useState(false)

    const copiedEmailAddress = () => {
        setShowDialog(true)
    }

    const handleCloseDialog = () => {
        setShowDialog(false)
    }

    const preventDefault = (event) => event.preventDefault()

    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <EmailAddressCopiedDialog show={showDialog} handleClose={handleCloseDialog}/>
            <AppBar position="fixed" className={classes.appBar}>
                <PoseContainer>
                    <AppBarItem>
                        <Box display="flex" p={1} m={1}>
                            <Box flex={1} p={1} m={1}/>
                            <AppBarButton buttonText={"Home"} to={"/"} component={Link}/>
                            <AppBarButton buttonText={"About me"} disabled/>
                            <AppBarButton buttonText={"My projects"} to={"/MyProjects"} component={Link}/>
                        </Box>
                    </AppBarItem>
                </PoseContainer>
            </AppBar>
            {/* A box so that the app bar does not cover any content */}
            <Box display="flex" p={1} m={1}></Box>
            <div style={{ position: "relative", paddingTop:20}}>
                <PoseContainer>
                    <Item className={classes.posedHeaderDark}>
                        <Container>
                            <LightTextTypography align="left" variant="h4" gutterBottom color={"textPrimary"}>
                                A little about me
                            </LightTextTypography>
                            <LightTextTypography align="left" variant="body1">
                                {aboutMeBrief}
                            </LightTextTypography>
                        </Container>
                        <DarkHeader/>
                    </Item>
                    <Item className={classes.posedItem}>
                        <Container>
                            <DarkTextTypography align="left" variant="h4" gutterBottom color={"textPrimary"}>
                                My qualifications
                            </DarkTextTypography>
                            <Grid container direction="row" justify="center" alignItems="stretch" spacing={1}
                                  className={classes.skillsGrid}>
                                <Grid item xs={6}>
                                    <Paper elevation={0} className={classes.paperItem}>
                                        <Grid container direction="column" justify="center" alignItems="center" spacing={1}
                                              className={classes.skillsGrid}>
                                            <CodeIcon className={classes.purpleIcon}/>
                                            <DarkTextTypography variant="h6">
                                                My skills
                                            </DarkTextTypography>
                                            <Grid item>
                                                <DarkTextTypography variant={"body1"}>
                                                    I have experience programming in the following languages:
                                                </DarkTextTypography>
                                                <DarkTextTypography variant={"body1"}>
                                                    {myProgrammingLanguages}
                                                </DarkTextTypography>
                                            </Grid>
                                            <Grid item>
                                                <DarkTextTypography variant={"body1"}>
                                                    {myProjectsExperience}
                                                </DarkTextTypography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper elevation={0} className={classes.paperItem}>
                                        <Grid container direction="column" justify="center" alignItems="center" spacing={1}
                                              className={classes.skillsGrid}>
                                            <WorkIcon className={classes.purpleIcon}/>
                                            <DarkTextTypography variant="h6">
                                                Work experience
                                            </DarkTextTypography>
                                            <DarkTextTypography variant={"body1"}>
                                                {myWorkExperienceInfo}
                                            </DarkTextTypography>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper elevation={0} className={classes.paperItem}>
                                        <Grid container direction="column" justify="center" alignItems="center" spacing={1}
                                              className={classes.skillsGrid}>
                                            <SchoolIcon className={classes.purpleIcon}/>
                                            <DarkTextTypography variant="h6">
                                                Education
                                            </DarkTextTypography>
                                            <DarkTextTypography variant={"body1"}>
                                                {myEducationInfo}
                                            </DarkTextTypography>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </Item>
                    <Item className={classes.posedItem}>
                        <Container>
                            <img src={aboutMePic} className={classes.banner} />
                        </Container>
                    </Item>
                    <Item className={classes.posedItem}>
                        <Container>
                            <DarkTextTypography align="left" variant="h4" gutterBottom color={"textPrimary"}>
                                My other hobbies and interests
                            </DarkTextTypography>
                            <DarkTextTypography align="left" variant="body1">
                                {myHobbiesAndInterests}
                            </DarkTextTypography>
                        </Container>
                    </Item>
                    <Item className={classes.posedFooterDark}>
                        <DarkFooter/>
                        <Container>
                            <LightTextTypography align="left" variant="h4" gutterBottom color={"textPrimary"}>
                                Contact me
                            </LightTextTypography>
                            <LightTextTypography align="left" variant="body1">
                                If you wish to contact me, please email me at {" "}
                                <CopyToClipboard text={emailAddress} onCopy={copiedEmailAddress}>
                                    {/* Prevent default just makes it so that it does not do anything. */}
                                    <HyperLink href="" onClick={preventDefault}>
                                        brandon.dang1234@gmail.com
                                    </HyperLink>
                                </CopyToClipboard>
                            </LightTextTypography>
                            <LightTextTypography align="left" variant="body1">
                                My resume is also available {" "}
                                <HyperLink href={Resume}>
                                    here.
                                </HyperLink>
                            </LightTextTypography>
                            <Grid container direction="row" justify="left" alignItems="stretch" spacing={1}>
                                <CopyToClipboard text={emailAddress} onCopy={copiedEmailAddress}>
                                    <IconButton className={classes.iconButton}>
                                        <EmailIcon className={classes.whiteIcon}/>
                                    </IconButton>
                                </CopyToClipboard>
                                <IconButton href={Resume} className={classes.iconButton}>
                                    <FileCopyIcon className={classes.whiteIcon}/>
                                </IconButton>
                            </Grid>
                        </Container>
                    </Item>
                </PoseContainer>
            </div>
        </ThemeProvider>
    );
}

export default AboutMePage;
