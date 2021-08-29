import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import {LightTextTypography} from "../CustomTheme";
import {websiteDescription} from "../Texts";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {DarkBlueHeader} from "./Headers";

const useStyles = makeStyles(() => ({
    darkGrayBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#434343",
        position: "relative",
        zIndex: 2
    },
    footerContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 10,
        paddingBottom: 150
    },
}));

/**
 * About Website Section.
 * @returns {JSX.Element} About Website Section.
 */
function AboutWebsiteSection() {

    const classes = useStyles();

    return <div className={classes.darkGrayBox}>
        <DarkBlueHeader/>
        <Container className={classes.footerContainer}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <LightTextTypography align="center" variant="h4" gutterBottom>
                    About this website
                </LightTextTypography>
                <LightTextTypography align="center" variant="body2" gutterBottom>
                    {websiteDescription}
                </LightTextTypography>
            </ScrollAnimation>
        </Container>
    </div>
}

export default AboutWebsiteSection;
