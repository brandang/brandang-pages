import React, {useState} from 'react'
import "animate.css/animate.min.css"
import '../App.css'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles'
import {LightTextTypography, DarkTextTypography, theme} from '../CustomTheme'
import posed from 'react-pose'
import {
    aboutMeBrief, myWorkExperienceInfoPart1, myWorkExperienceInfoPart2, myProjectsDescription, myEducationInfo,
    myHobbiesAndInterests, emailAddress, websiteDescription, notesAppSummary,
    photoLockerAppSummary
} from "../Localisation"
import Container from "@material-ui/core/Container"
import BlueOverlay from "../components/BlueOverlay"
import {BlueHeader, WhiteHeader, OrangeHeader, PurpleHeader, DarkBlueHeader} from "../components/Headers"
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import CodeIcon from '@material-ui/icons/Code'
import WorkIcon from '@material-ui/icons/Work'
import BuildIcon from '@material-ui/icons/Build'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SchoolIcon from '@material-ui/icons/School'
import BrushIcon from '@material-ui/icons/Brush'
import ChatIcon from '@material-ui/icons/Chat'
import {CopyToClipboard} from "react-copy-to-clipboard"
import {default as HyperLink} from "@material-ui/core/Link/Link"
import Resume from "../files/Resume.pdf"
import IconButton from "@material-ui/core/IconButton"
import EmailIcon from "@material-ui/icons/Email"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import EmailAddressCopiedDialog from "../components/EmailAddressCopiedDialog"
import RoundContainer from "../components/RoundContainer"
import CardMedia from '@material-ui/core/CardMedia'
import {styles} from '../components/HomePageStyles'
import HomePageBackground from '../components/HomePageBackground'
import NavBar from "../components/NavBar"
import ScrollAnimation from 'react-animate-on-scroll';
import { useMediaQuery } from 'react-responsive'
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";

const ItemPoseContainer = posed.div({
    enter: { staggerChildren: 500, delayChildren: 500 }
});

const Item = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
});

function HomePage() {

    const classes = styles();

    const [windowDimensions] = useState([window.innerWidth, window.innerHeight]);

    // Anchor for drawer nav menu.
    const [drawerNavMenuOpen, setDrawerNavMenuOpen] = React.useState(false);

    // Toggles visibility of drawer nav menu.
    const toggleDrawerNavMenuOpen = () => {
        // Set padding based on whether drawer menu is open for title grid. This is because when drawer is open, it
        // takes up the scrollbar, making the title grid 'jump'.
        const title = document.getElementById("titleGrid");
        if (drawerNavMenuOpen) {
            title.style.paddingRight = '0px';
        } else {
            title.style.paddingRight = (window.innerWidth - document.body.clientWidth) + 'px';
        }

        setDrawerNavMenuOpen((prevOpen) => !prevOpen);
    };

    // Closes drawer nav menu.
    const handleDrawerNavMenuClose = () => {
        setDrawerNavMenuOpen(false);

        // Set padding to 0 for title grid. This is because when drawer is open, it
        // takes up the scrollbar, making the title grid 'jump'.
        const title = document.getElementById("titleGrid");
        title.style.paddingRight = '0px';
    };

    const isExtraSmallScreen = useMediaQuery({
        query: '(max-width: 800px)'
    });

    // Whether or not to show snackbar about email address being copied to clipboard.
    const [showSnackbar, setShowSnackbar] = React.useState(false);

    // Handler for when email address is copied.
    const copiedEmailAddress = () => {
        setShowSnackbar(true);
    };

    // Close the email message snackbar.
    const handleCloseSnackBar = () => {
        setShowSnackbar(false)
    };

    // Prevents event from propagating.
    const preventDefault = (event) => event.preventDefault();

    return (
        <ThemeProvider theme={theme}>
            <HomePageBackground/>
            <div style={{zIndex: 1, position: "relative"}}>
                <EmailAddressCopiedDialog show={showSnackbar} handleClose={handleCloseSnackBar}/>
                <NavBar isExtraSmallScreen={isExtraSmallScreen} windowDimensions={windowDimensions}
                        drawerNavMenuOpen={drawerNavMenuOpen} toggleDrawerNavMenuOpen={toggleDrawerNavMenuOpen}
                        handleDrawerNavMenuClose={handleDrawerNavMenuClose} />

                {/* Padding is required so pose animation does not create unnecessary scrollbars. */}
                <div style={{ paddingLeft: 20, paddingRight: 20}}>
                    <Grid id={"titleGrid"} container direction="row" alignItems="center" alignContent="center"
                          className={drawerNavMenuOpen ? classes.titleGridSmall : classes.titleGrid}>
                        <Grid item>
                            <ItemPoseContainer>
                                <Item>
                                    <LightTextTypography align={"left"} variant="h3">
                                        Hello!
                                    </LightTextTypography>
                                </Item>
                                <Item>
                                    <LightTextTypography align={"left"} variant="h2">
                                        I'm Brandon.
                                    </LightTextTypography>
                                </Item>
                                <Item>
                                    <LightTextTypography align={"left"} variant="h3">
                                        A Software Developer.
                                    </LightTextTypography>
                                </Item>
                            </ItemPoseContainer>
                        </Grid>
                    </Grid>
                </div>

                {/*for some reason, position relative makes it so that the horizontal line glitch no longer occurs*/}
                <div style={{zIndex: "1", position: "relative"}}>

                    <BlueOverlay />

                    <div id={"about"} className={classes.blueBox}>
                        <Container className={classes.firstContainer}>
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <div style={{display: 'flex', justifyContent:'center'}}>
                                    <Avatar className={classes.lightIconContainer}>
                                        <PriorityHighIcon className={classes.aboutIcon}/>
                                    </Avatar>
                                </div>
                                <LightTextTypography align="center" variant="h3" className={classes.heading}>
                                    A little about me
                                </LightTextTypography>
                                <LightTextTypography align="center" variant="body1" gutterBottom
                                                     style={{paddingBottom: "20px"}}>
                                    {aboutMeBrief}
                                </LightTextTypography>
                            </ScrollAnimation>
                        </Container>
                    </div>

                    <div id={"skills"} className={classes.whiteBox}>
                        <BlueHeader/>
                        <Container className={classes.boxContainer}>
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <div style={{display: 'flex', justifyContent:'center'}}>
                                    <Avatar className={classes.darkIconContainer}>
                                        <CodeIcon className={classes.skillsIcon}/>
                                    </Avatar>
                                </div>
                                <DarkTextTypography align="center" variant="h3" gutterBottom
                                                    className={classes.heading}>
                                    My skills
                                </DarkTextTypography>
                                <div className={isExtraSmallScreen ? classes.skillsDisplayContainerMobile :
                                    classes.skillsDisplayContainer}>
                                    <RoundContainer colour={"#ff4d4d"}>
                                        Java
                                    </RoundContainer>
                                    <RoundContainer colour={"#3ddc84"}>
                                        Android
                                    </RoundContainer>
                                    <RoundContainer colour={"#009eb1"}>
                                        Python
                                    </RoundContainer>
                                    <RoundContainer colour={"#9b5dff"}>
                                        JavaScript
                                    </RoundContainer>
                                    <RoundContainer colour={"#389500"}>
                                        C
                                    </RoundContainer>
                                    <RoundContainer colour={"#ff6d00"}>
                                        SQL
                                    </RoundContainer>
                                    <RoundContainer colour={"#566cff"}>
                                        CSS
                                    </RoundContainer>
                                    <RoundContainer colour={"#ff60aa"}>
                                        React
                                    </RoundContainer>
                                    <RoundContainer colour={"#dd3232"}>
                                        Angular
                                    </RoundContainer>
                                </div>
                            </ScrollAnimation>
                        </Container>
                    </div>

                    <div id={"experience"} className={classes.orangeBox}>
                        <WhiteHeader/>
                        <Container className={classes.boxContainer}>
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <div style={{display: 'flex', justifyContent:'center'}}>
                                    <Avatar className={classes.lightIconContainer}>
                                        <WorkIcon className={classes.workIcon}/>
                                    </Avatar>
                                </div>
                                <LightTextTypography align="center" variant="h3" gutterBottom
                                                     className={classes.heading}>
                                    Work experience
                                </LightTextTypography>
                                <LightTextTypography component={'div'} align="center" variant="body1" gutterBottom>
                                    {myWorkExperienceInfoPart1}
                                    {/* rel="noopener noreferrer" is to prevent security risk. */}
                                    <a href="https://ams.confex.com/ams/14Meso15ARAM/webprogram/Manuscript/Paper190844/aihoshi_pmtip_aram_13.5.pdf"
                                       target="_blank" className={classes.hoverLink} rel="noopener noreferrer">
                                        <LightTextTypography>here</LightTextTypography>
                                    </a>
                                    {myWorkExperienceInfoPart2}
                                </LightTextTypography>
                            </ScrollAnimation>
                        </Container>
                    </div>

                    <div id={"projects"} className={classes.whiteBox}>
                        <OrangeHeader/>
                        <Container className={classes.boxContainer}>
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <div style={{display: 'flex', justifyContent:'center'}}>
                                    <Avatar className={classes.darkIconContainer}>
                                        <BuildIcon className={classes.projectsIcon}/>
                                    </Avatar>
                                </div>

                                <DarkTextTypography align="center" variant="h3" gutterBottom
                                                    className={classes.heading}>
                                    My projects
                                </DarkTextTypography>
                                <DarkTextTypography align="center" variant="body1" gutterBottom>
                                    {myProjectsDescription}
                                </DarkTextTypography>

                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content" id="panel1a-header"
                                                           style={{backgroundColor: "#cbe9ff"}}>
                                        <div style={{width: "100%"}}>
                                            <Typography className={classes.heading}>Android Notes App</Typography>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails style={{backgroundColor: "#cbe9ff"}}
                                                      className={classes.videoPanel}>
                                        <div>
                                            <DarkTextTypography variant={"body2"}>
                                                {notesAppSummary}
                                            </DarkTextTypography>
                                            <CardMedia className={classes.youtubeVideo}
                                                       src={"https://www.youtube.com/embed/RfoJ7mikJfg"}
                                                       component="iframe"/>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                                           aria-controls="panel1a-content" id="panel1a-header"
                                                           style={{backgroundColor: "#ddd2ff"}}>
                                        <div style={{width: "100%"}}>
                                            <Typography className={classes.heading}>
                                                Android Photolocker App
                                            </Typography>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails style={{backgroundColor: "#ddd2ff"}}
                                                      className={classes.videoPanel}>
                                        <div>
                                            <DarkTextTypography variant={"body2"}>
                                                {photoLockerAppSummary}
                                            </DarkTextTypography>
                                            <CardMedia className={classes.youtubeVideo}
                                                       src={"https://www.youtube.com/embed/RfoJ7mikJfg"}
                                                       component="iframe"/>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </ScrollAnimation>
                        </Container>
                    </div>

                    <div id={"education"} className={classes.purpleBox}>
                        <WhiteHeader/>
                        <Container className={classes.boxContainer}>
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <div style={{display: 'flex', justifyContent:'center'}}>
                                    <Avatar className={classes.lightIconContainer}>
                                        <SchoolIcon className={classes.educationIcon}/>
                                    </Avatar>
                                </div>
                                <LightTextTypography align="center" variant="h3" gutterBottom
                                                     className={classes.heading}>
                                    Education
                                </LightTextTypography>
                                <LightTextTypography align="center" variant="h4" gutterBottom
                                                     className={classes.heading}>
                                    University of Toronto
                                </LightTextTypography>
                                <LightTextTypography align="center" variant="h4" className={classes.heading}>
                                    2017 - Present
                                </LightTextTypography>
                                <LightTextTypography align="center" variant="body1" gutterBottom>
                                    {myEducationInfo}
                                </LightTextTypography>
                            </ScrollAnimation>
                        </Container>
                    </div>

                    <div id={"hobbies"} className={classes.whiteBox}>
                        <PurpleHeader/>
                        <Container className={classes.boxContainer}>
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <div style={{display: 'flex', justifyContent:'center'}}>
                                    <Avatar className={classes.darkIconContainer}>
                                        <BrushIcon className={classes.hobbiesIcon}/>
                                    </Avatar>
                                </div>
                                <DarkTextTypography align="center" variant="h3" gutterBottom
                                                     className={classes.heading}>
                                    Hobbies and interests
                                </DarkTextTypography>
                                <DarkTextTypography align="center" variant="body1" gutterBottom
                                                     className={classes.heading}>
                                    {myHobbiesAndInterests}
                                </DarkTextTypography>
                            </ScrollAnimation>
                        </Container>
                    </div>

                    <div id={"contact"} className={classes.darkBlueBox}>
                        <WhiteHeader/>
                        <Container className={classes.boxContainer}>
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <div style={{display: 'flex', justifyContent:'center'}}>
                                    <Avatar className={classes.lightIconContainer}>
                                        <ChatIcon className={classes.chatIcon}/>
                                    </Avatar>
                                </div>
                                <LightTextTypography align="center" variant="h3" gutterBottom
                                                    className={classes.heading}>
                                    Contact me
                                </LightTextTypography>
                                <LightTextTypography align="center" variant="body1">
                                    My email: {" "}
                                    <CopyToClipboard text={emailAddress} onCopy={copiedEmailAddress}>
                                        {/*Prevent default just makes it so that it does not do anything.*/}
                                        <HyperLink href="" onClick={preventDefault} className={classes.hoverLink}>
                                            brandon.dang1234@gmail.com
                                        </HyperLink>
                                    </CopyToClipboard>
                                </LightTextTypography>
                                <br/>
                                <LightTextTypography align="center" variant="body1" gutterBottom>
                                    <HyperLink href={Resume} className={classes.hoverLink}>
                                        My resume
                                    </HyperLink>
                                </LightTextTypography>
                                <Grid container direction="row" justify="center" alignItems="stretch" spacing={1}>
                                    <CopyToClipboard text={emailAddress} onCopy={copiedEmailAddress}>
                                        <IconButton className={classes.iconButton}>
                                            <EmailIcon className={classes.emailIcon}/>
                                        </IconButton>
                                    </CopyToClipboard>
                                    <IconButton href={Resume} className={classes.iconButton}>
                                        <FileCopyIcon className={classes.resumeIcon}/>
                                    </IconButton>
                                </Grid>
                            </ScrollAnimation>
                        </Container>
                    </div>

                    <div className={classes.darkGrayBox}>
                        <DarkBlueHeader/>
                        <Container className={classes.footerContainer}>
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <LightTextTypography align="center" variant="h4" gutterBottom>
                                    About this website
                                </LightTextTypography>
                                <LightTextTypography align="center" variant="body2" gutterBottom>
                                    {websiteDescription}
                                </LightTextTypography>
                            </ScrollAnimation>
                        </Container>
                    </div>
                </div>
            </div>

        </ThemeProvider>
    )
}

export default HomePage
