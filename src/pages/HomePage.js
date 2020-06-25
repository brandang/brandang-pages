import React, {useEffect, useState} from 'react'

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
import ScrollAnim from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'
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

const Element = ScrollAnim.Element
const ScrollOverPack = ScrollAnim.OverPack
const EventListener = ScrollAnim.Event
const ShortCut = ScrollAnim.Link

const replay = false

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
        // const home = document.getElementById("home").getBoundingClientRect().top
        // if (!document.getElementById("about")) {return}
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
            {/*<main-background/>*/}
            {/*<MainBackground/>*/}
            <HomePageBackground/>
            <EmailAddressCopiedDialog show={showSnackbar} handleClose={handleCloseSnackBar}/>
            <NumberClassificationDialog show={openDialog} prediction={classifierPrediction} onHide={handleCloseDialog}/>
            <AppBar id={"navBar"} position="fixed" className={classes.navBar}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <div id={"progressBar"} className={classes.progressBar}/>
                    <ShortCut id={"homeNavButton"} to="home" className={classes.navBarButton}>
                        <LightTextTypography variant={"body3"}>
                            Home
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut id={"aboutNavButton"} to="about" className={classes.navBarButton}>
                        <LightTextTypography variant={"body3"}>
                            About
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut id={"skillsNavButton"} to="skills" className={classes.navBarButton}>
                        <LightTextTypography variant={"body3"}>
                            Skills
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut id={"experienceNavButton"} to="experience" className={classes.navBarButton}>
                        <LightTextTypography variant={"body3"}>
                            Experience
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut id={"projectsNavButton"} to="projects" className={classes.navBarButton}>
                        <LightTextTypography variant={"body3"}>
                            Projects
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut id={"educationNavButton"} to="education" className={classes.navBarButton}>
                        <LightTextTypography variant={"body3"}>
                            Education
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut id={"hobbiesNavButton"} to="hobbies" className={classes.navBarButton}>
                        <LightTextTypography variant={"body3"}>
                            Hobbies
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut id={"contactNavButton"} to="contact" className={classes.navBarButton}>
                        <LightTextTypography variant={"body3"}>
                            Contact
                        </LightTextTypography>
                    </ShortCut>
                </div>
            </AppBar>
                {/*<video autoPlay muted loop className={classes.videoBackground}>
                    <source src={SampleVideo} type="video/mp4" />
                </video>*/}

            {/* padding is required so pose animation does not create unnecessary scrollbars */}
            <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Grid container spacing={5} direction="row" justify="flex-start" alignItems="center"
                      className={classes.titleGrid}>

                    <Grid item xs={3}/>

                    <Grid item direction="column" >
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
                </Grid>
            </div>

            <ScrollItem >
                <div id="home" style={{height: '100vh', zIndex: 1, position: "relative"}}/>
            </ScrollItem>

            <div id={"about"} className={classes.blueBox}>
                <Container className={classes.firstContainer}>
                    <ScrollOverPack playScale={[0, 0.3]} always={true}>
                        <QueueAnim key="0" type={"scale"}>
                            <div key={1} style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.lightIconContainer}>
                                    <PriorityHighIcon className={classes.aboutIcon}/>
                                </Avatar>
                            </div>
                            <LightTextTypography key="2" align="center" variant="h3" className={classes.heading}>
                                A little about me
                            </LightTextTypography>
                            <LightTextTypography key="3" align="center" variant="body1" gutterBottomm
                                                 style={{paddingBottom: "20px"}}>
                                {aboutMeBrief}
                            </LightTextTypography>

                        </QueueAnim>
                    </ScrollOverPack>
                </Container>
            </div>

            <div id={"skills"} className={classes.whiteBox}>
                <BlueHeader/>
                <Container className={classes.boxContainer}>
                    <ScrollOverPack playScale={[0.2, 0.3]} always={replay}>
                        <QueueAnim key={0} type="scale">
                            <div key={1} style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.darkIconContainer}>
                                    <CodeIcon className={classes.skillsIcon}/>
                                </Avatar>
                            </div>
                            <DarkTextTypography key={2} align="center" variant="h3" gutterBottom
                                                className={classes.heading}>
                                My skills
                            </DarkTextTypography>
                            <div key={3} style={{display: "flex", flexDirection: "row", justifyContent: 'center'}}>
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
                            </div>
                            <div key={4} style={{display: "flex", flexDirection: "row", justifyContent: 'center',
                                marginBottom: "20px"}}>
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
                            <DarkTextTypography key={5} align="center" variant="h4">
                                And more!
                            </DarkTextTypography>
                        </QueueAnim>
                    </ScrollOverPack>

                </Container>
            </div>

            <div id={"experience"} className={classes.orangeBox}>
                <WhiteHeader/>
                <Container className={classes.boxContainer}>
                    <ScrollOverPack playScale={[0.1, 0.3]} always={replay}>
                        <QueueAnim key={0} type="scale">
                            <div key={0} style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.lightIconContainer}>
                                    <WorkIcon className={classes.workIcon}/>
                                </Avatar>
                            </div>
                            <LightTextTypography key={1} align="center" variant="h3" gutterBottom
                                                 className={classes.heading}>
                                Work experience
                            </LightTextTypography>
                            <LightTextTypography key={2} align="center" variant="body1" gutterBottom>
                                {myWorkExperienceInfo}
                            </LightTextTypography>
                        </QueueAnim>
                    </ScrollOverPack>
                </Container>
            </div>

            <div id={"projects"} className={classes.whiteBox}>
                <OrangeHeader/>
                <Container className={classes.boxContainer}>
                    <ScrollOverPack playScale={[0.1, 0.3]} always={replay}>
                        <QueueAnim key={0} type="scale">
                            <div key={1} style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.darkIconContainer}>
                                    <BuildIcon className={classes.projectsIcon}/>
                                </Avatar>
                            </div>

                            <DarkTextTypography key={2} align="center" variant="h3" gutterBottom
                                                className={classes.heading}>
                                My projects
                            </DarkTextTypography>
                            <DarkTextTypography key={3} align="center" variant="body1" gutterBottom>
                                {myProjectsDescription}
                            </DarkTextTypography>

                            <div key={4}>
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
                                        <div className={classes.videoContainer}>
                                            <CardMedia className={classes.youtubeVideo}
                                                       src={"https://www.youtube.com/embed/RfoJ7mikJfg"} component="iframe"/>
                                        </div>
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
                                        <div className={classes.videoContainer}>
                                            <CardMedia className={classes.youtubeVideo}
                                                       src={"https://www.youtube.com/embed/RfoJ7mikJfg"} component="iframe"/>
                                        </div>
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
                            </div>

                        </QueueAnim>
                    </ScrollOverPack>

                </Container>
            </div>

            <div id={"education"} className={classes.purpleBox}>
                <WhiteHeader/>
                <Container className={classes.boxContainer}>
                    <ScrollOverPack playScale={[0.1, 0.3]} always={replay}>
                        <QueueAnim key={0} type="scale">
                            <div key={0} style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.lightIconContainer}>
                                    <SchoolIcon className={classes.educationIcon}/>
                                </Avatar>
                            </div>
                            <LightTextTypography key={1} align="center" variant="h3" gutterBottom
                                                 className={classes.heading}>
                                Education
                            </LightTextTypography>
                            <LightTextTypography key={2} align="center" variant="h4" gutterBottom
                                                 className={classes.heading}>
                                University of Toronto
                            </LightTextTypography>
                            <LightTextTypography key={3} align="center" variant="h4" className={classes.heading}>
                                2017 - Present
                            </LightTextTypography>
                            <LightTextTypography key={4} align="center" variant="body1" gutterBottom>
                                {myEducationInfo}
                            </LightTextTypography>
                        </QueueAnim>
                    </ScrollOverPack>
                </Container>
            </div>

            <div id={"hobbies"} className={classes.whiteBox}>
                <PurpleHeader/>
                <Container className={classes.boxContainer}>
                    <ScrollOverPack playScale={[0.1, 0.3]} always={replay}>
                        <QueueAnim key={0} type="scale">
                            <div key={0} style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.darkIconContainer}>
                                    <BrushIcon className={classes.hobbiesIcon}/>
                                </Avatar>
                            </div>
                            <DarkTextTypography key={1} align="center" variant="h3" gutterBottom
                                                 className={classes.heading}>
                                Hobbies and interests
                            </DarkTextTypography>
                            <DarkTextTypography key={2} align="center" variant="body1" gutterBottom
                                                 className={classes.heading}>
                                {myHobbiesAndInterests}
                            </DarkTextTypography>
                        </QueueAnim>
                    </ScrollOverPack>
                </Container>
            </div>

            <div id={"contact"} className={classes.darkBlueBox}>
                <WhiteHeader/>
                <Container className={classes.boxContainer}>
                    <ScrollOverPack playScale={[0.1, 0.3]} always={replay}>
                        <QueueAnim key={0} type="scale">
                            <div key={0} style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.lightIconContainer}>
                                    <ChatIcon className={classes.chatIcon}/>
                                </Avatar>
                            </div>
                            <LightTextTypography key={1} align="center" variant="h3" gutterBottom
                                                className={classes.heading}>
                                Contact me
                            </LightTextTypography>
                            <LightTextTypography key={2} align="center" variant="body1">
                                If you wish to contact me, please email me at {" "}
                                <CopyToClipboard text={emailAddress} onCopy={copiedEmailAddress}>
                                    {/* Prevent default just makes it so that it does not do anything. */}
                                    <HyperLink href="" onClick={preventDefault}>
                                        brandon.dang1234@gmail.com
                                    </HyperLink>
                                </CopyToClipboard>
                            </LightTextTypography>
                            <LightTextTypography key={3} align="center" variant="body1" gutterBottom>
                                My resume is also available {" "}
                                <HyperLink href={Resume}>
                                    here.
                                </HyperLink>
                            </LightTextTypography>
                            <Grid container key={4} direction="row" justify="center" alignItems="stretch" spacing={1}>
                                <CopyToClipboard text={emailAddress} onCopy={copiedEmailAddress}>
                                    <IconButton className={classes.iconButton}>
                                        <EmailIcon className={classes.emailIcon}/>
                                    </IconButton>
                                </CopyToClipboard>
                                <IconButton href={Resume} className={classes.iconButton}>
                                    <FileCopyIcon className={classes.resumeIcon}/>
                                </IconButton>
                            </Grid>
                        </QueueAnim>
                    </ScrollOverPack>
                </Container>
            </div>

            <div className={classes.darkGrayBox}>
                <DarkBlueHeader/>
                <Container className={classes.footerContainer}>
                    <ScrollOverPack playScale={[0.1, 0.3]} always={replay}>
                        <QueueAnim key={0} type="scale">
                            <LightTextTypography key={1} align="center" variant="h4" gutterBottom>
                                About this website
                            </LightTextTypography>
                            <LightTextTypography key={2} align="center" variant="body2" gutterBottom>
                                {websiteDescription}
                            </LightTextTypography>
                        </QueueAnim>
                    </ScrollOverPack>
                </Container>
            </div>

        </ThemeProvider>
    );
}

export default HomePage;
