import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import {LightTextTypography} from "../CustomTheme";
import {aboutMeBrief} from "../Texts";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BubbleContainer from "./BubbleContainer";

const useStyles = makeStyles(() => ({
    aboutIcon: {
        color: "#006cbf",
        fontSize: 150
    },
    // NOTE: in order for zIndex to work, position must be set to relative
    blueBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#006cbf",
        position: "relative",
        zIndex: 2
    },
    firstContainer: {
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    lightIconContainer: {
        backgroundColor: "#FFF",
        width: "150px",
        height: "150px",
        padding: "10px",
        marginBottom: "20px",
    },
    heading: {
        paddingTop: "30px",
        paddingBottom: "30px",
    },
}));

/**
 * About Section.
 * @returns {JSX.Element} About Section.
 */
function AboutSection() {

    const classes = useStyles();

    return <div id={"about"} className={classes.blueBox}>
        <Container className={classes.firstContainer}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <BubbleContainer>
                        <Avatar className={classes.lightIconContainer}>
                            <PriorityHighIcon className={classes.aboutIcon}/>
                        </Avatar>
                    </BubbleContainer>
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
}

export default AboutSection;
