import React, {useEffect, useState} from 'react'
import "animate.css/animate.min.css"
import '../App.css'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles'
import {LightTextTypography, DarkTextTypography, theme} from '../CustomTheme'
import posed from 'react-pose'
import {
    aboutMeBrief, myProgrammingLanguages, myWorkExperienceInfo, myProjectsDescription, myEducationInfo,
    myHobbiesAndInterests, emailAddress, websiteDescription, digitClassifierDescription, notesAppSummary,
    photoLockerAppSummary, classifierExplanation
} from "../Localisation"
import Container from "@material-ui/core/Container"
import ScrollItem from "../components/ScrollItem"
import {BlueHeader, WhiteHeader, OrangeHeader, PurpleHeader, DarkBlueHeader} from "../components/Headers"
import AppBar from "@material-ui/core/AppBar"
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import CodeIcon from '@material-ui/icons/Code'
import WorkIcon from '@material-ui/icons/Work'
import BuildIcon from '@material-ui/icons/Build'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SchoolIcon from '@material-ui/icons/School'
import BrushIcon from '@material-ui/icons/Brush'
import ChatIcon from '@material-ui/icons/Chat'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import {CopyToClipboard} from "react-copy-to-clipboard"
import {default as HyperLink} from "@material-ui/core/Link/Link"
import Resume from "../files/Resume.pdf"
import IconButton from "@material-ui/core/IconButton"
import EmailIcon from "@material-ui/icons/Email"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import EmailAddressCopiedDialog from "../components/EmailAddressCopiedDialog"
import RoundContainer from "../components/RoundContainer"
import SignatureCanvas from "react-signature-canvas"
import RestoreIcon from "@material-ui/icons/Restore"
import DoneIcon from "@material-ui/icons/Done"
import DigitClassifier from "../DigitClassifier"
import {getDigitsFromCanvas} from "../CanvasHelpers"
import NumberClassificationDialog from "../components/NumberClassificationDialog"
import CardMedia from '@material-ui/core/CardMedia'
import {styles, canvasWidth, canvasHeight} from "../components/HomePageStyles"
import HomePageBackground from "../components/HomePageBackground"
import AnimateInQueue from "../components/AnimateInQueue"
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect"
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'

const debug = false
const scrollAnimationDuration = 500

const penSize = 10

const ItemPoseContainer = posed.div({
    enter: { staggerChildren: 500, delayChildren: 500 }
});

const Item = posed.p({
    enter: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
});

function HomePage() {

    const classes = styles()

    const [windowDimensions, setWindowDimensions] = useState([window.innerWidth, window.innerHeight])

    // whether or not to show snackbar about email address being copied to clipboard
    const [showSnackbar, setShowSnackbar] = React.useState(false)

    // whether or not to show dialog about digit classifier
    const [openDialog, setOpenDialog] = React.useState(false)

    const [showDrawer, setShowDrawer] = React.useState(false)

    const [classifierPrediction, setPrediction] = React.useState("Unknown")

    // NOTE: DONT USE REFS FOR FUNCTIONAL COMPONENTS, SINCE THEY MIGHT GET DEREFENCED
    let canvasRef = React.createRef()

    const onRestoreClick = () => {
        canvasRef.clear()
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const classifier = new DigitClassifier()

    const onSubmitClick = () => {
        const trimmedCanvas = canvasRef.getTrimmedCanvas()
        // console.log(canvasRef.toDataURL())
        const digits = getDigitsFromCanvas(trimmedCanvas, trimmedCanvas.width, trimmedCanvas.height)
        let predictions = ""
        for (let i in digits) {
            const digit = digits[i]
            predictions += classifier.predict(digit, 3)
        }
        setPrediction(predictions)
        setOpenDialog(true)
    }

    const copiedEmailAddress = () => {
        setShowSnackbar(true)
    }

    const handleCloseSnackBar = () => {
        setShowSnackbar(false)
    }

    const onDrawerClose = () => {
        setShowDrawer(false)
    }

    const onDrawerOpen = () => {
        setShowDrawer(true)
    }

    const preventDefault = (event) => event.preventDefault()

    useEffect(() => {
        // this function runs whenever page finished loading

        // update on page resize or scroll events
        window.addEventListener('resize', handleWindowResize)
        // update whenever page scrolls
        window.addEventListener('scroll', onScroll)

        updateNavBar()
    }, []);
    // passing an empty array as second argument triggers the callback in useEffect only after the initial render
    // thus replicating `componentDidMount` lifecycle behaviour

    // updates components as needed when window resizes
    const handleWindowResize = () => {
        setWindowDimensions([window.innerWidth, window.innerHeight])
        updateProgressBar(lastSelectedItem)
    }

    const onScroll = () => {
        updateNavBar()
    }

    const updateNavBar = () => {
        // mobile does not have this
        if (isMobile) {return}
        const navBar = document.getElementById("navBar")
        const scrollY = window.scrollY
        if (scrollY >= windowDimensions[1] * 0.2) {
            navBar.style.backgroundColor = "#434343"
        } else {
            navBar.style.backgroundColor = "transparent"
        }
        updateProgressBar(scrollY)
    }

    // for determining which function to call when user resizes window
    let lastSelectedItem = null
    let selectedItemIndex = 0

    const updateProgressBar = (scrollY) => {
        // mobile does not have this
        if (isMobile) {return}

        const home = document.getElementById("home").getBoundingClientRect().top
        const about = document.getElementById("about").getBoundingClientRect().top
        const skills = document.getElementById("skills").getBoundingClientRect().top
        const experience = document.getElementById("experience").getBoundingClientRect().top
        const projects = document.getElementById("projects").getBoundingClientRect().top
        const education = document.getElementById("education").getBoundingClientRect().top
        const hobbies = document.getElementById("hobbies").getBoundingClientRect().top
        const contact = document.getElementById("contact").getBoundingClientRect().top

        const homeButton = document.getElementById("homeNavButton")
        const aboutButton = document.getElementById("aboutNavButton")
        const skillsButton = document.getElementById("skillsNavButton")
        const experienceButton = document.getElementById("experienceNavButton")
        const projectsButton = document.getElementById("projectsNavButton")
        const educationButton = document.getElementById("educationNavButton")
        const hobbiesButton = document.getElementById("hobbiesNavButton")
        const contactButton = document.getElementById("contactNavButton")

        const threshold = windowDimensions[1] * 0.2
        let lastSelectedItem = contactButton

        if (home <= threshold)
            lastSelectedItem = homeButton
        if (about <= threshold)
            lastSelectedItem = aboutButton
        if (skills <= threshold)
            lastSelectedItem = skillsButton
        if (experience <= threshold)
            lastSelectedItem = experienceButton
        if (projects <= threshold)
            lastSelectedItem = projectsButton
        if (education <= threshold)
            lastSelectedItem = educationButton
        if (hobbies <= threshold)
            lastSelectedItem = hobbiesButton
        if (contact <= threshold)
            lastSelectedItem = contactButton

        const progressBar = document.getElementById("progressBar")

        if (lastSelectedItem === contactButton) {
            progressBar.style.width = `100vw`
        } else {
            progressBar.style.width = `${lastSelectedItem.getBoundingClientRect().right + 20}px`
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <HomePageBackground/>
            <div style={{zIndex: 1, position: "relative"}}>
            <EmailAddressCopiedDialog show={showSnackbar} handleClose={handleCloseSnackBar}/>
            <NumberClassificationDialog show={openDialog} prediction={classifierPrediction} onHide={handleCloseDialog}/>
            <AppBar id={"navBar"} position="fixed" className={isMobile ? classes.navBarMobile : classes.navBar}>
                <BrowserView>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <div id={"progressBar"} className={classes.progressBar}/>
                        <Link id={"homeNavButton"} className={classes.navBarButton} to={"home"} spy={true}
                              smooth={true} duration={scrollAnimationDuration}>
                            <LightTextTypography variant={"body3"}>
                                Home
                            </LightTextTypography>
                        </Link>
                        <Link id={"aboutNavButton"} className={classes.navBarButton} to={"about"} spy={true}
                              smooth={true} duration={scrollAnimationDuration}>
                            <LightTextTypography variant={"body3"}>
                                About
                            </LightTextTypography>
                        </Link>
                        <Link id={"skillsNavButton"} className={classes.navBarButton} to={"skills"} spy={true}
                              smooth={true} duration={scrollAnimationDuration}>
                            <LightTextTypography variant={"body3"}>
                                Skills
                            </LightTextTypography>
                        </Link>
                        <Link id={"experienceNavButton"} className={classes.navBarButton} to={"experience"} spy={true}
                              smooth={true} duration={scrollAnimationDuration}>
                            <LightTextTypography variant={"body3"}>
                                Experience
                            </LightTextTypography>
                        </Link>
                        <Link id={"projectsNavButton"} className={classes.navBarButton} to={"projects"} spy={true}
                              smooth={true} duration={scrollAnimationDuration}>
                            <LightTextTypography variant={"body3"}>
                                Projects
                            </LightTextTypography>
                        </Link>
                        <Link id={"educationNavButton"} className={classes.navBarButton} to={"education"} spy={true}
                              smooth={true} duration={scrollAnimationDuration}>
                            <LightTextTypography variant={"body3"}>
                                Education
                            </LightTextTypography>
                        </Link>
                        <Link id={"hobbiesNavButton"} className={classes.navBarButton} to={"hobbies"} spy={true}
                              smooth={true} duration={scrollAnimationDuration}>
                            <LightTextTypography variant={"body3"}>
                                Hobbies
                            </LightTextTypography>
                        </Link>
                        <Link id={"contactNavButton"} className={classes.navBarButton} to={"contact"} spy={true}
                              smooth={true} duration={scrollAnimationDuration}>
                            <LightTextTypography variant={"body3"}>
                                Contact
                            </LightTextTypography>
                        </Link>
                    </div>
                </BrowserView>
                <MobileView>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <IconButton className={classes.menuIcon} onClick={onDrawerOpen}>
                            <MenuIcon/>
                        </IconButton>
                    </div>
                </MobileView>
            </AppBar>

            <MobileView>
                <Drawer anchor={"right"} open={showDrawer} onClose={onDrawerClose} classes={{paper: classes.menuDrawer}}>
                    <Link id={"homeNavButton"} className={classes.navBarButton} to={"home"} spy={true}
                          smooth={true} duration={scrollAnimationDuration} onSetInactive={onDrawerClose}>
                        <LightTextTypography variant={"body3"}>
                            Home
                        </LightTextTypography>
                    </Link>
                    <Link id={"aboutNavButton"} className={classes.navBarButton} to={"about"} spy={true}
                          smooth={true} duration={scrollAnimationDuration} onSetInactive={onDrawerClose}>
                        <LightTextTypography variant={"body3"}>
                            About
                        </LightTextTypography>
                    </Link>
                    <Link id={"skillsNavButton"} className={classes.navBarButton} to={"skills"} spy={true}
                          smooth={true} duration={scrollAnimationDuration} onSetInactive={onDrawerClose}>
                        <LightTextTypography variant={"body3"}>
                            Skills
                        </LightTextTypography>
                    </Link>
                    <Link id={"experienceNavButton"} className={classes.navBarButton} to={"experience"} spy={true}
                          smooth={true} duration={scrollAnimationDuration} onSetInactive={onDrawerClose}>
                        <LightTextTypography variant={"body3"}>
                            Experience
                        </LightTextTypography>
                    </Link>
                    <Link id={"projectsNavButton"} className={classes.navBarButton} to={"projects"} spy={true}
                          smooth={true} duration={scrollAnimationDuration} onSetInactive={onDrawerClose}>
                        <LightTextTypography variant={"body3"}>
                            Projects
                        </LightTextTypography>
                    </Link>
                    <Link id={"educationNavButton"} className={classes.navBarButton} to={"education"} spy={true}
                          smooth={true} duration={scrollAnimationDuration} onSetInactive={onDrawerClose}>
                        <LightTextTypography variant={"body3"}>
                            Education
                        </LightTextTypography>
                    </Link>
                    <Link id={"hobbiesNavButton"} className={classes.navBarButton} to={"hobbies"} spy={true}
                          smooth={true} duration={scrollAnimationDuration} onSetInactive={onDrawerClose}>
                        <LightTextTypography variant={"body3"}>
                            Hobbies
                        </LightTextTypography>
                    </Link>
                    <Link id={"contactNavButton"} className={classes.navBarButton} to={"contact"} spy={true}
                          smooth={true} duration={scrollAnimationDuration} onSetInactive={onDrawerClose}>
                        <LightTextTypography variant={"body3"}>
                            Contact
                        </LightTextTypography>
                    </Link>
                </Drawer>
            </MobileView>

            {/* padding is required so pose animation does not create unnecessary scrollbars */}
            <div style={{ paddingLeft: 20, paddingRight: 20}}>
                <Grid container direction="row" justify="flex-start" alignItems="center" alignContent="center"
                      justify={"center"} className={classes.titleGrid}>
                    <BrowserView>
                        <Grid item direction="column">
                            <ItemPoseContainer>
                                <Item>
                                    <LightTextTypography align={"left"} variant="h2">
                                        Hello!
                                    </LightTextTypography>
                                </Item>
                                <Item>
                                    <LightTextTypography align={"left"} variant="h1">
                                        I'm Brandon.
                                    </LightTextTypography>
                                </Item>
                                <Item>
                                    <LightTextTypography align={"left"} variant="h2">
                                        A Software Developer.
                                    </LightTextTypography>
                                </Item>
                            </ItemPoseContainer>
                        </Grid>
                    </BrowserView>
                    <MobileView>
                        <Grid item direction="column" >
                            <ItemPoseContainer>
                                <Item>
                                    <LightTextTypography align={"left"} variant="h4">
                                        Hello!
                                    </LightTextTypography>
                                </Item>
                                <Item>
                                    <LightTextTypography align={"left"} variant="h3">
                                        I'm Brandon.
                                    </LightTextTypography>
                                </Item>
                                <Item>
                                    <LightTextTypography align={"left"} variant="h4">
                                        A Software Developer.
                                    </LightTextTypography>
                                </Item>
                            </ItemPoseContainer>
                        </Grid>
                    </MobileView>
                </Grid>
            </div>

            {/*for some reason, position relative makes it so that the horizontal line glitch no longer occurs*/}
            <div style={{zIndex: "1", position: "relative"}}>

                <ScrollItem >
                    <div id="home" style={{height: '100vh', zIndex: 1, position: "relative"}}/>
                </ScrollItem>

                <div id={"about"} className={classes.blueBox}>
                    <Container className={classes.firstContainer}>
                        <AnimateInQueue animateIn="animate__fadeIn" animateOnce={!debug}>
                            <div style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.lightIconContainer}>
                                    <PriorityHighIcon className={classes.aboutIcon}/>
                                </Avatar>
                            </div>
                            <LightTextTypography align="center" variant="h3" className={classes.heading}>
                                A little about me
                            </LightTextTypography>
                            <LightTextTypography align="center" variant="body1" gutterBottomm style={{paddingBottom: "20px"}}>
                                {aboutMeBrief}
                            </LightTextTypography>
                        </AnimateInQueue>
                    </Container>
                </div>

                <div id={"skills"} className={classes.whiteBox}>
                    <BlueHeader/>
                    <Container className={classes.boxContainer}>
                        <AnimateInQueue animateIn="animate__fadeIn" animateOnce={!debug}>
                            <div style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.darkIconContainer}>
                                    <CodeIcon className={classes.skillsIcon}/>
                                </Avatar>
                            </div>
                            <DarkTextTypography align="center" variant="h3" gutterBottom
                                                className={classes.heading}>
                                My skills
                            </DarkTextTypography>
                            <div className={isMobile ? classes.skillsDisplayContainerMobile : classes.skillsDisplayContainer}>
                                <RoundContainer colour={"#ff4d4d"}>
                                    Java
                                </RoundContainer>
                                <RoundContainer colour={"#009eb1"}>
                                    Python
                                </RoundContainer>
                                <RoundContainer className={classes.purpleRoundContainer} colour={"#9b5dff"}>
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
                            </div>
                            <DarkTextTypography align="center" variant="h4">
                                And more!
                            </DarkTextTypography>
                        </AnimateInQueue>
                    </Container>
                </div>

                <div id={"experience"} className={classes.orangeBox}>
                    <WhiteHeader/>
                    <Container className={classes.boxContainer}>
                        <AnimateInQueue animateIn="animate__fadeIn" animateOnce={!debug}>
                            <div style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.lightIconContainer}>
                                    <WorkIcon className={classes.workIcon}/>
                                </Avatar>
                            </div>
                            <LightTextTypography align="center" variant="h3" gutterBottom
                                                 className={classes.heading}>
                                Work experience
                            </LightTextTypography>
                            <LightTextTypography align="center" variant="body1" gutterBottom>
                                {myWorkExperienceInfo}
                            </LightTextTypography>
                        </AnimateInQueue>
                    </Container>
                </div>

                <div id={"projects"} className={classes.whiteBox}>
                    <OrangeHeader/>
                    <Container className={classes.boxContainer}>
                        <AnimateInQueue animateIn="animate__fadeIn" animateOnce={!debug}>
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

                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content" id="panel1a-header"
                                                       style={{backgroundColor: "#cbe9ff"}}>
                                    <div style={{width: "100%"}}>
                                        <Typography className={classes.heading}>Android Notes App</Typography>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor: "#cbe9ff"}} className={classes.videoPanel}>
                                    <DarkTextTypography variant={"body2"}>
                                        {notesAppSummary}
                                    </DarkTextTypography>
                                    <CardMedia className={classes.youtubeVideo}
                                               src={"https://www.youtube.com/embed/RfoJ7mikJfg"} component="iframe"/>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                                                       aria-controls="panel1a-content" id="panel1a-header"
                                                       style={{backgroundColor: "#ddd2ff"}}>
                                    <div style={{width: "100%"}}>
                                        <Typography className={classes.heading}>
                                            Android Photolocker App
                                        </Typography>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{backgroundColor: "#ddd2ff"}} className={classes.videoPanel}>
                                    <DarkTextTypography variant={"body2"}>
                                        {photoLockerAppSummary}
                                    </DarkTextTypography>
                                    <CardMedia className={classes.youtubeVideo}
                                               src={"https://www.youtube.com/embed/RfoJ7mikJfg"} component="iframe"/>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                                                       aria-controls="panel1a-content" id="panel1a-header"
                                                       style={{backgroundColor: "#dcffcf"}}>
                                    <div style={{width: "100%"}}>
                                        <Typography className={classes.heading}>Number Classifier Demo</Typography>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.classifierDemoContainer} style={{backgroundColor: "#dcffcf"}}>
                                    <div>
                                        <DarkTextTypography variant="body2">
                                            {digitClassifierDescription}
                                        </DarkTextTypography>
                                        <div style={{width: "100%", justifyContent: 'center', display: 'flex'}}>
                                            <div className={classes.canvasContainer}>
                                                <SignatureCanvas penColor={"black"} canvasProps={{width: canvasWidth, height:
                                                    canvasHeight, className: 'sigCanvas'}} minWidth={penSize} minHeight={penSize}
                                                                 ref={(ref) => { canvasRef = ref }}/>
                                            </div>
                                        </div>
                                        {/*Div to align grid in center*/}
                                        <div style={{width: "100%", justifyContent: 'center', display: 'flex'}}>
                                            <Grid container direction="row" justify="center" alignItems="center" spacing={1}
                                                  className={classes.grid}>
                                                <Grid item>
                                                    <Button color="secondary" onClick={onRestoreClick}>
                                                        <RestoreIcon className={classes.darkIcon}/>
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button color="secondary" onClick={onSubmitClick}>
                                                        <DoneIcon className={classes.darkIcon}/>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <DarkTextTypography variant="body2">
                                            {classifierExplanation}
                                        </DarkTextTypography>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </AnimateInQueue>
                    </Container>
                </div>

                <div id={"education"} className={classes.purpleBox}>
                    <WhiteHeader/>
                    <Container className={classes.boxContainer}>
                        <AnimateInQueue animateIn="animate__fadeIn" animateOnce={!debug}>
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
                        </AnimateInQueue>
                    </Container>
                </div>

                <div id={"hobbies"} className={classes.whiteBox}>
                    <PurpleHeader/>
                    <Container className={classes.boxContainer}>
                        <AnimateInQueue animateIn="animate__fadeIn" animateOnce={!debug}>
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
                        </AnimateInQueue>
                    </Container>
                </div>

                <div id={"contact"} className={classes.darkBlueBox}>
                    <WhiteHeader/>
                    <Container className={classes.boxContainer}>
                        <AnimateInQueue animateIn="animate__fadeIn" animateOnce={!debug}>
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
                                If you wish to contact me, please email me at {" "}
                                <CopyToClipboard text={emailAddress} onCopy={copiedEmailAddress}>
                                    {/*Prevent default just makes it so that it does not do anything.*/}
                                    <HyperLink href="" onClick={preventDefault}>
                                        brandon.dang1234@gmail.com
                                    </HyperLink>
                                </CopyToClipboard>
                            </LightTextTypography>
                            <LightTextTypography align="center" variant="body1" gutterBottom>
                                My resume is also available {" "}
                                <HyperLink href={Resume}>
                                    here.
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
                        </AnimateInQueue>
                    </Container>
                </div>

                <div className={classes.darkGrayBox}>
                    <DarkBlueHeader/>
                    <Container className={classes.footerContainer}>
                        <AnimateInQueue animateIn="animate__fadeIn" animateOnce={!debug}>
                            <LightTextTypography align="center" variant="h4" gutterBottom>
                                About this website
                            </LightTextTypography>
                            <LightTextTypography align="center" variant="body2" gutterBottom>
                                {websiteDescription}
                            </LightTextTypography>
                        </AnimateInQueue>
                    </Container>
                </div>
            </div>
            </div>

        </ThemeProvider>
    )
}

export default HomePage
