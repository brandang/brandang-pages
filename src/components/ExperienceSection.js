import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import {LightTextTypography} from "../CustomTheme";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {WhiteHeader} from "./Headers";
import WorkIcon from "@material-ui/icons/Work";
import {myWorkExperienceInfoPart1, myWorkExperienceInfoPart2} from "../Localisation";

const useStyles = makeStyles(() => ({
    // NOTE: in order for zIndex to work, position must be set to relative
    orangeBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#E56B1F",
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
    lightIconContainer: {
        backgroundColor: "#FFF",
        width: "150px",
        height: "150px",
        padding: "10px",
        marginBottom: "20px",
    },
    workIcon: {
        color: "#e56b1f",
        fontSize: 130
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

/**
 * Experience Section.
 * @returns {JSX.Element} Experience Section.
 */
function ExperienceSection() {

    const classes = useStyles();

    return <div id={"experience"} className={classes.orangeBox}>
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
}

export default ExperienceSection;
