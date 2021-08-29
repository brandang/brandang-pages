import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import {LightTextTypography} from "../CustomTheme";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {WhiteHeader} from "./Headers";
import {
    myEducationInfo,
} from "../Texts";
import SchoolIcon from "@material-ui/icons/School";
import BubbleContainer from "./BubbleContainer";

const useStyles = makeStyles(() => ({
    // NOTE: in order for zIndex to work, position must be set to relative
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
    heading: {
        paddingTop: "30px",
        paddingBottom: "30px",
    },
    purpleBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#961fe0",
        position: "relative",
        zIndex: 2
    },
    educationIcon: {
        color: "#961fe0",
        fontSize: 140
    },
}));

/**
 * Education Section.
 * @returns {JSX.Element} Education Section.
 */
function EducationSection() {

    const classes = useStyles();

    return <div id={"education"} className={classes.purpleBox}>
        <WhiteHeader/>
        <Container className={classes.boxContainer}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <BubbleContainer>
                        <Avatar className={classes.lightIconContainer}>
                            <SchoolIcon className={classes.educationIcon}/>
                        </Avatar>
                    </BubbleContainer>
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
            </ScrollAnimation>
        </Container>
    </div>
}

export default EducationSection;
