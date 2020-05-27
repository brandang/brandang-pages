import React, {useEffect} from 'react'

import '../App.css'
import Avatar from '@material-ui/core/Avatar'
import portrait from "../images/Portrait.jpg"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core/styles"
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles'
import {LightTextTypography, DarkTextTypography, theme} from '../CustomTheme'
import posed from 'react-pose'
import { Router, Link, Location } from '@reach/router'
import MainBackground from "../components/MainBackground"
import {
    aboutMeBrief, myProgrammingLanguages, myWorkExperienceInfo, myProjectsDescription, myEducationInfo,
    myHobbiesAndInterests, emailAddress, websiteDescription,
} from "../Localisation"
import Container from "@material-ui/core/Container"
import ScrollItem from "../components/ScrollItem"
import {BlueHeader, WhiteHeader, OrangeHeader, PurpleHeader, DarkBlueHeader} from "../components/Headers"
import Box from "@material-ui/core/Box"
import AppBarButton from "../components/AppBarButton"
import AppBar from "@material-ui/core/AppBar"
import Animate from 'rc-animate'
import ScrollAnim from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'
import { Parallax } from 'react-scroll-parallax'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import CodeIcon from '@material-ui/icons/Code'
import WorkIcon from '@material-ui/icons/Work'
import BuildIcon from '@material-ui/icons/Build'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SchoolIcon from '@material-ui/icons/School'
import BrushIcon from '@material-ui/icons/Brush'
import ChatIcon from '@material-ui/icons/Chat'
import { Container as Table, Row, Col } from 'react-grid-system'
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
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Element = ScrollAnim.Element
const ScrollOverPack = ScrollAnim.OverPack
const EventListener = ScrollAnim.Event
const ShortCut = ScrollAnim.Link

const replay = false

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

const PoseContainer = posed.div({
    enter: { staggerChildren: 100 }
});

const AppBarItem = posed.p({
    enter: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
});

const useStyles = makeStyles((theme) => ({
    titleGrid: {
        height: '100vh',
        paddingBottom: "10vh",
        marginBottom: '10vh',
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: -1
    },
    skillsItem: {
        paddingBottom: "50px"
    },
    avatar: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
    appBar: {
        background: '#434343',
        boxShadow: 'none',
    },
    navBar: {
        width: "100px",
        position: "absolute",
        left: 0,
        height: "2px",
        background: "#fff",
        transition: "width 1s"
    },
    navBarButton: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#434343",
        cursor: "pointer",
        float: "left",
    },
    heading: {
        paddingBottom: "30px"
    },
    blueBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#006cbf"
    },
    whiteBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#FFF"
    },
    orangeBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#E56B1F"
    },
    purpleBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#961fe0"
    },
    darkBlueBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#2a5a79"
    },
    darkGrayBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#434343"
    },
    firstContainer: {
        minHeight: '70vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer: {
        display: "flex",
        minHeight: "80vh",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingBottom: 50
    },
    footerContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingBottom: 150
    },
    skillsIcon: {
        color: '#ffffff',
        fontSize: 150
    },
    aboutIcon: {
        color: '#006cbf',
        fontSize: 150
    },
    workIcon: {
        color: '#e56b1f',
        fontSize: 130
    },
    projectsIcon: {
        color: '#ffffff',
        fontSize: 120
    },
    educationIcon: {
        color: '#961fe0',
        fontSize: 140
    },
    hobbiesIcon: {
        color: '#ffffff',
        fontSize: 130
    },
    chatIcon: {
        color: '#2a5a79',
        fontSize: 130
    },
    emailIcon: {
        color: '#2a5a79',
        fontSize: 60
    },
    resumeIcon: {
        color: '#2a5a79',
        fontSize: 60
    },
    iconButton: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#ffffff",
        '&:hover': {
            backgroundColor: "#c4c4c4",
        },
        '&:active': {
            backgroundColor: '#c4c4c4'
        }
    },
    darkIconContainer: {
        backgroundColor: "#434343",
        width: "150px",
        height: "150px",
        padding: "10px",
        marginBottom: "20px",
    },
    lightIconContainer: {
        backgroundColor: "#FFF",
        width: "150px",
        height: "150px",
        padding: "10px",
        marginBottom: "20px",
    }
}));

window.customElements.define("main-background", MainBackground);

function HomePage() {

    const classes = useStyles()

    const [showDialog, setShowDialog] = React.useState(false)

    const copiedEmailAddress = () => {
        setShowDialog(true)
    }

    const handleCloseDialog = () => {
        setShowDialog(false)
    }

    const preventDefault = (event) => event.preventDefault()

    useEffect(() => {
        // update on page resize or scroll events
        window.addEventListener('resize', handleWindowResize);
    }, []);
    // passing an empty array as second argument triggers the callback in useEffect only after the initial render
    // thus replicating `componentDidMount` lifecycle behaviour

    // updates components as needed when window resizes
    const handleWindowResize = () => {
        if (navBarIsFullWidth) {
            updateNavBarFull(lastSelectedItem)
        } else {
            updateNavBar(lastSelectedItem)
        }
    }

    let navBarRef = React.createRef()
    // for determining which function to call when user resizes window
    let navBarIsFullWidth = false
    let lastSelectedItem = null

    const updateNavBar = (event) => {
        if (!event) {
            return
        }
        const target = event.target
        if (!target) {
            return
        }
        navBarRef.style.width = `${target.getBoundingClientRect().right + 20}px`
        navBarIsFullWidth = false
        lastSelectedItem = event
    }

    // update nav bar so it takes up full width of screen
    const updateNavBarFull = (event) => {
        if (!event) {
            return
        }
        const target = event.target
        if (!target) {
            return
        }
        navBarRef.style.width = `100vw`
        navBarIsFullWidth = true
        lastSelectedItem = event
    }

    return (
        <ThemeProvider theme={theme}>
            <main-background/>
            <EmailAddressCopiedDialog show={showDialog} handleClose={handleCloseDialog}/>
            <AppBar position="fixed" className={classes.appBar}>
                {/*<PoseContainer>
                    <AppBarItem style={{padding: '0px', margin: '0px'}}>
                        <Box display="flex" p={1} m={1} style={{padding: '0px', margin: '0px'}}>
                            <Box flex={1} p={1} m={1}/>
                            <AppBarButton buttonText={"Home"} to={"/"} component={Link}/>
                            <AppBarButton buttonText={"About me"} disabled/>
                            <AppBarButton buttonText={"My projects"} to={"/MyProjects"} component={Link}/>
                        </Box>
                    </AppBarItem>
                </PoseContainer>*/}
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <div ref={(c) => { navBarRef = c }} className={classes.navBar}/>
                    <ShortCut to="about" className={classes.navBarButton} onFocus={updateNavBar}>
                        <LightTextTypography variant={"body3"}>
                            About
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut to="skills" className={classes.navBarButton} onFocus={updateNavBar}>
                        <LightTextTypography variant={"body3"}>
                            Skills
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut to="experience" className={classes.navBarButton} onFocus={updateNavBar}>
                        <LightTextTypography variant={"body3"}>
                            Experience
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut to="projects" className={classes.navBarButton} onFocus={updateNavBar}>
                        <LightTextTypography variant={"body3"}>
                            Projects
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut to="education" className={classes.navBarButton} onFocus={updateNavBar}>
                        <LightTextTypography variant={"body3"}>
                            Education
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut to="hobbies" className={classes.navBarButton} onFocus={updateNavBar}>
                        <LightTextTypography variant={"body3"}>
                            Hobbies
                        </LightTextTypography>
                    </ShortCut>
                    <ShortCut to="contact" className={classes.navBarButton} onFocus={updateNavBarFull}>
                        <LightTextTypography variant={"body3"}>
                            Contact
                        </LightTextTypography>
                    </ShortCut>
                </div>
               {/* <Tabs value={tab} theme={theme} onChange={handleTabChange} indicatorColor="primary" centered selectionFollowsFocus>
                    <Tab style={getStyle(0)} label="Home">
                        <ShortCut to="home"/>
                    </Tab>
                    <Tab style={getStyle(0)} label="About">
                        <ShortCut to="about"/>
                    </Tab>
                    <Tab style={getStyle(0)} label="Skills">
                        <ShortCut to="skills"/>
                    </Tab>
                    <Tab style={getStyle(0)} label="Experience">
                        <ShortCut to="experience"/>
                    </Tab>
                    <Tab style={getStyle(0)} label="Projects">
                        <ShortCut to="projects"/>
                    </Tab>
                    <Tab style={getStyle(0)} label="Education">
                        <ShortCut to="education"/>
                    </Tab>
                    <Tab style={getStyle(0)} label="Hobbies">
                        <ShortCut to="hobbies"/>
                    </Tab>
                    <Tab style={getStyle(0)} label="Contact">
                        <ShortCut to="home"/>
                    </Tab>
                </Tabs>*/}
            </AppBar>
            {/* padding is required so pose animation does not create unnecessary scrollbars */}
            <div id="home" style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Grid container spacing={5} direction="row" justify="flex-start" alignItems="center"
                      className={classes.titleGrid}>

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

            <ScrollItem>
                <div style={{height: '100vh'}}/>
            </ScrollItem>

            <div id={"about"} className={classes.blueBox}>
                <Container className={classes.firstContainer}>
                    <ScrollOverPack playScale={[0, 0.3]} always={replay}>
                        <QueueAnim key="0" type={"scale"}>
                            <div key={1} style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.lightIconContainer}>
                                    <PriorityHighIcon className={classes.aboutIcon}/>
                                </Avatar>
                            </div>
                            <LightTextTypography key="2" align="center" variant="h2" className={classes.heading}>
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
                    <ScrollOverPack playScale={[0.1, 0.3]} always={replay}>
                        <QueueAnim key={0} type="scale">
                            <div key={1} style={{display: 'flex', justifyContent:'center'}}>
                                <Avatar className={classes.darkIconContainer}>
                                    <CodeIcon className={classes.skillsIcon}/>
                                </Avatar>
                            </div>
                            <DarkTextTypography key={2} align="center" variant="h2" gutterBottom
                                                className={classes.heading}>
                                My skills
                            </DarkTextTypography>

                            {/* Need to use this table instead of Grid from Material UI library because for some
                             reason the Grid there is always invisible. */}
                            <Table key={3}>
                                <Row>
                                <Col>
                                    <Parallax x={[-200, 0]}>
                                        <DarkTextTypography align="center" variant="h4" className={classes.skillsItem}>
                                            Java
                                        </DarkTextTypography>
                                    </Parallax>
                                    <Parallax x={[150, -100]}>
                                        <DarkTextTypography align="center" variant="h4" className={classes.skillsItem}>
                                            Python
                                        </DarkTextTypography>
                                    </Parallax>
                                    <Parallax x={[0, -100]}>
                                        <DarkTextTypography align="center" variant="h4" className={classes.skillsItem}>
                                            SQL
                                        </DarkTextTypography>
                                    </Parallax>
                                    <Parallax x={[-50, 100]}>
                                        <DarkTextTypography align="center" variant="h4" className={classes.skillsItem}>
                                            React
                                        </DarkTextTypography>
                                    </Parallax>
                                </Col>
                                <Col>
                                    <Parallax x={[100, 0]}>
                                        <DarkTextTypography align="center" variant="h4" className={classes.skillsItem}>
                                            JavaScript
                                        </DarkTextTypography>
                                    </Parallax>
                                    <Parallax x={[250, 0]}>
                                        <DarkTextTypography align="center" variant="h4" className={classes.skillsItem}>
                                            C
                                        </DarkTextTypography>
                                    </Parallax>
                                    <Parallax x={[0, 120]}>
                                        <DarkTextTypography align="center" variant="h4" className={classes.skillsItem}>
                                            CSS
                                        </DarkTextTypography>
                                    </Parallax>
                                </Col>
                                </Row>
                            </Table>
                            <DarkTextTypography key={4} align="center" variant="h4">
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
                            <LightTextTypography key={1} align="center" variant="h2" gutterBottom
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

                            <DarkTextTypography key={2} align="center" variant="h2" gutterBottom
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
                                                           style={{backgroundColor: "#9cd5ff"}}>
                                        <Typography className={classes.heading}>Expansion Panel 1</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{backgroundColor: "#9cd5ff"}}>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                                                           aria-controls="panel1a-content" id="panel1a-header"
                                                           style={{backgroundColor: "#b69cff"}}>
                                        <Typography className={classes.heading}>
                                            Expansion Panel 2
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{backgroundColor: "#b69cff"}}>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                                                           aria-controls="panel1a-content" id="panel1a-header"
                                                           style={{backgroundColor: "#baff9c"}}>
                                        <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{backgroundColor: "#baff9c"}}>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
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
                            <LightTextTypography key={1} align="center" variant="h2" gutterBottom
                                                 className={classes.heading}>
                                Education
                            </LightTextTypography>
                            <LightTextTypography key={1} align="center" variant="h4" gutterBottom
                                                 className={classes.heading}>
                                University of Toronto
                            </LightTextTypography>
                            <LightTextTypography key={1} align="center" variant="h4" className={classes.heading}>
                                2017 - Present
                            </LightTextTypography>
                            <LightTextTypography key={2} align="center" variant="body1" gutterBottom>
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
                            <DarkTextTypography key={1} align="center" variant="h2" gutterBottom
                                                 className={classes.heading}>
                                Hobbies and interests
                            </DarkTextTypography>
                            <DarkTextTypography key={1} align="center" variant="body1" gutterBottom
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
                            <LightTextTypography key={1} align="center" variant="h2" gutterBottom
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
