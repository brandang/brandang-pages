import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import {DarkTextTypography} from "../CustomTheme";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {BlueHeader} from "./Headers";
import CodeIcon from "@material-ui/icons/Code";
import RoundContainer from "./RoundContainer";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
    // NOTE: in order for zIndex to work, position must be set to relative
    whiteBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#FFF",
        position: "relative",
        zIndex: 2
    },
    skillsItem: {
        paddingBottom: "50px"
    },
    skillsIcon: {
        color: "#ffffff",
        fontSize: 150
    },
    darkIcon: {
        color: "#434343",
        fontSize: 40
    },
    darkIconContainer: {
        backgroundColor: "#434343",
        width: "150px",
        height: "150px",
        padding: "10px",
        marginBottom: "20px",
    },
    heading: {
        paddingTop: "30px",
        paddingBottom: "30px",
    },
    skillsDisplayContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "600px"
    },
    skillsDisplayContainerMobile: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "95vw"
    },
    boxContainer: {
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 50,
        paddingBottom: 50,
    },
}));

/**
 * Skills Section.
 * @param isExtraSmallScreen whether screen size is very small.
 * @returns {JSX.Element} Skills Section.
 */
function SkillsSection({ isExtraSmallScreen }) {

    const classes = useStyles();

    return <div id={"skills"} className={classes.whiteBox}>
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
}

SkillsSection.propTypes = {
    isExtraSmallScreen: PropTypes.bool
};

export default SkillsSection;
