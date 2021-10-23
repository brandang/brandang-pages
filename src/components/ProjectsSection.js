import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import {DarkTextTypography} from "../CustomTheme";
import {Link} from "react-scroll";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {OrangeHeader} from "./Headers";
import {myProjectsDescription, notesAppSummary, photoLockerAppSummary} from "../Texts";
import BuildIcon from "@material-ui/icons/Build";
import {Paper} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import BubbleContainer from "./BubbleContainer";

const useStyles = makeStyles(() => ({
    // NOTE: in order for zIndex to work, position must be set to relative
    heading: {
        paddingTop: "30px",
        paddingBottom: "30px",
    },
    youtubeVideo: {
        width: "100%",
        height: "420px"
    },
    videoPanel: {
        justifyContent: "center",
        display: "block",
        paddingBottom: "50px",
    },
    videoBackground: {
        minWidth: "100vw",
        minHeight: "100vh",
        position: "fixed",
        width: "auto",
        height: "auto",
        backgroundPosition: "center",
        size: "cover",
        backgroundRepeat: "no-repeat",
        top: 0,
        left: 0,
        zIndex: -1
    },
    darkIconContainer: {
        backgroundColor: "#434343",
        width: "150px",
        height: "150px",
        padding: "10px",
        marginBottom: "20px",
    },
    whiteBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#FFF",
        position: "relative",
        zIndex: 2
    },
    boxContainer: {
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 50,
        paddingBottom: 50,
    },
    projectsIcon: {
        color: "#ffffff",
        fontSize: 120
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
    },
    columnContainer: {
        display: "flex",
        flexDirection: "column"
    },
    projectContainer: {
        margin: 10,
        flexGrow: 1,
        flexBasis: 1,
        padding: 20,

    }
}));

// How long scroll animation lasts.
const scrollAnimationDuration = 500;

/**
 * Projects Section.
 * @param isSmallScreen whether screen size is small.
 * @returns {JSX.Element} Projects Section.
 */
function ProjectsSection({ isSmallScreen }) {

    const classes = useStyles();

    return <div id={"projects"} className={classes.whiteBox}>
        <OrangeHeader/>
        <Container className={classes.boxContainer}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <BubbleContainer>
                        <Link to={"projects"} spy={true} smooth={true} duration={scrollAnimationDuration}>
                            <Avatar className={classes.darkIconContainer}>
                                <BuildIcon className={classes.projectsIcon}/>
                            </Avatar>
                        </Link>
                    </BubbleContainer>
                </div>

                <DarkTextTypography align="center" variant="h3" gutterBottom className={classes.heading}>
                    My projects
                </DarkTextTypography>
                <DarkTextTypography align="center" variant="body1" gutterBottom>
                    {myProjectsDescription}
                </DarkTextTypography>

                <div className={isSmallScreen ? classes.columnContainer : classes.rowContainer}>
                    <Paper className={classes.projectContainer} elevation={6} >
                        <div>
                            <CardMedia className={classes.youtubeVideo}
                                       src={"https://www.youtube.com/embed/RfoJ7mikJfg"} component="iframe"
                                       allow="fullscreen"/>
                            <DarkTextTypography variant={"body2"}>
                                {notesAppSummary}
                            </DarkTextTypography>
                        </div>
                    </Paper>
                    <Paper className={classes.projectContainer} elevation={6} >
                        <div>
                            <CardMedia className={classes.youtubeVideo}
                                       src={"https://www.youtube.com/embed/UuVqQf_pRMg"} component="iframe"
                                       allow="fullscreen"/>
                            <DarkTextTypography variant={"body2"}>
                                {photoLockerAppSummary}
                            </DarkTextTypography>
                        </div>
                    </Paper>
                </div>
            </ScrollAnimation>
        </Container>
    </div>
}

export default ProjectsSection;
