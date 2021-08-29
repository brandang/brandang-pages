import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import {DarkTextTypography} from "../CustomTheme";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {BlueHeader} from "./Headers";
import CodeIcon from "@material-ui/icons/Code";
import BubbleContainer from "./BubbleContainer";
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
    round: {
        width: "100px",
        height: "100px",
        padding: "10px",
        margin: "10px"
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
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <BubbleContainer>
                        <Avatar className={classes.darkIconContainer}>
                            <CodeIcon className={classes.skillsIcon}/>
                        </Avatar>
                    </BubbleContainer>
                </div>
                <DarkTextTypography align="center" variant="h3" gutterBottom
                                    className={classes.heading}>
                    My skills
                </DarkTextTypography>
                <div className={isExtraSmallScreen ? classes.skillsDisplayContainerMobile :
                    classes.skillsDisplayContainer}>
                    <BubbleContainer>
                        <Avatar className={classes.round} style={{backgroundColor: "#ff4d4d"}}>
                            Java
                        </Avatar>
                    </BubbleContainer>
                    <BubbleContainer>
                        <Avatar className={classes.round} style={{backgroundColor: "#3ddc84"}}>
                            Android
                        </Avatar>
                    </BubbleContainer>
                    <BubbleContainer>
                        <Avatar className={classes.round} style={{backgroundColor: "#009eb1"}}>
                            Python
                        </Avatar>
                    </BubbleContainer>
                    <BubbleContainer>
                        <Avatar className={classes.round} style={{backgroundColor: "#9b5dff"}}>
                            JavaScript
                        </Avatar>
                    </BubbleContainer>
                    <BubbleContainer>
                        <Avatar className={classes.round} style={{backgroundColor: "#389500"}}>
                            C
                        </Avatar>
                    </BubbleContainer>
                    <BubbleContainer>
                        <Avatar className={classes.round} style={{backgroundColor: "#ff6d00"}}>
                            SQL
                        </Avatar>
                    </BubbleContainer>
                    <BubbleContainer>
                        <Avatar className={classes.round} style={{backgroundColor: "#566cff"}}>
                            CSS
                        </Avatar>
                    </BubbleContainer>
                    <BubbleContainer>
                        <Avatar className={classes.round} style={{backgroundColor: "#ff60aa"}}>
                            React
                        </Avatar>
                    </BubbleContainer>
                    <BubbleContainer>
                        <Avatar className={classes.round} style={{backgroundColor: "#dd3232"}}>
                            Angular
                        </Avatar>
                    </BubbleContainer>
                </div>
            </ScrollAnimation>
        </Container>
    </div>
}

SkillsSection.propTypes = {
    isExtraSmallScreen: PropTypes.bool
};

export default SkillsSection;
