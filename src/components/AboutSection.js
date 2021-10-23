import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-scroll";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import {LightTextTypography} from "../CustomTheme";
import {aboutMeBrief} from "../Texts";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BubbleContainer from "./BubbleContainer";
import Resume from "../files/Resume.pdf";

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
    hoverLink: {
        display: "inline",
        "&": {
            textDecoration: "underline",
            color: "#ffffff",
        },
        "&:hover": {
            textDecoration: "underline",
            textDecorationThickness: "5px",
            color: "#ffffff",
        },
    },
}));

// How long scroll animation lasts.
const scrollAnimationDuration = 500;

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
                        <Link to={"about"} spy={true} smooth={true} duration={scrollAnimationDuration}>
                            <Avatar className={classes.lightIconContainer}>
                                <PriorityHighIcon className={classes.aboutIcon}/>
                            </Avatar>
                        </Link>
                    </BubbleContainer>
                </div>
                <LightTextTypography align="center" variant="h3" className={classes.heading}>
                    A little about me
                </LightTextTypography>
                <LightTextTypography align="center" variant="body1" gutterBottom
                                     style={{paddingBottom: "20px"}}>
                    {aboutMeBrief}
                    {/* rel="noopener noreferrer" is to prevent security risk. */}
                    <a href={Resume} target={"_blank"} className={classes.hoverLink} rel="noopener noreferrer">
                        here.
                    </a>
                </LightTextTypography>
            </ScrollAnimation>
        </Container>
    </div>
}

export default AboutSection;
