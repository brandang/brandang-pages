import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import {DarkTextTypography} from "../CustomTheme";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {OrangeHeader} from "./Headers";
import {
    myProjectsDescription,
    notesAppSummary, photoLockerAppSummary
} from "../Texts";
import BuildIcon from "@material-ui/icons/Build";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
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
        height: "720px"
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
}));

/**
 * Projects Section.
 * @returns {JSX.Element} Projects Section.
 */
function ProjectsSection() {

    const classes = useStyles();

    return <div id={"projects"} className={classes.whiteBox}>
        <OrangeHeader/>
        <Container className={classes.boxContainer}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <BubbleContainer>
                        <Avatar className={classes.darkIconContainer}>
                            <BuildIcon className={classes.projectsIcon}/>
                        </Avatar>
                    </BubbleContainer>
                </div>

                <DarkTextTypography align="center" variant="h3" gutterBottom className={classes.heading}>
                    My projects
                </DarkTextTypography>
                <DarkTextTypography align="center" variant="body1" gutterBottom>
                    {myProjectsDescription}
                </DarkTextTypography>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} id="panel1a-header"
                                      style={{backgroundColor: "#cbe9ff"}}>
                        <div style={{width: "100%"}}>
                            <Typography className={classes.heading}>Android Notes App</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: "#cbe9ff"}} className={classes.videoPanel}>
                        <div>
                            <DarkTextTypography variant={"body2"}>
                                {notesAppSummary}
                            </DarkTextTypography>
                            <CardMedia className={classes.youtubeVideo}
                                       src={"https://www.youtube.com/embed/RfoJ7mikJfg"} component="iframe"/>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} id="panel1a-header"
                                      style={{backgroundColor: "#ddd2ff"}}>
                        <div style={{width: "100%"}}>
                            <Typography className={classes.heading}>
                                Android Photolocker App
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: "#ddd2ff"}} className={classes.videoPanel}>
                        <div>
                            <DarkTextTypography variant={"body2"}>
                                {photoLockerAppSummary}
                            </DarkTextTypography>
                            <CardMedia className={classes.youtubeVideo}
                                       src={"https://www.youtube.com/embed/RfoJ7mikJfg"} component="iframe"/>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </ScrollAnimation>
        </Container>
    </div>
}

export default ProjectsSection;
