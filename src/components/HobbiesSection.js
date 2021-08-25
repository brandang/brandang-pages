import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import {DarkTextTypography} from "../CustomTheme";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {PurpleHeader} from "./Headers";
import {
    myHobbiesAndInterests,
} from "../Localisation";
import BrushIcon from "@material-ui/icons/Brush";

const useStyles = makeStyles(() => ({
    // NOTE: in order for zIndex to work, position must be set to relative
    whiteBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#FFF",
        position: "relative",
        zIndex: 2
    },
    heading: {
        paddingTop: "30px",
        paddingBottom: "30px",
    },
    darkIconContainer: {
        backgroundColor: "#434343",
        width: "150px",
        height: "150px",
        padding: "10px",
        marginBottom: "20px",
    },
    boxContainer: {
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 50,
        paddingBottom: 50,
    },
    hobbiesIcon: {
        color: "#ffffff",
        fontSize: 130
    },
}));

/**
 * Hobbies Section.
 * @returns {JSX.Element} Hobbies Section.
 */
function HobbiesSection() {

    const classes = useStyles();

    return <div id={"hobbies"} className={classes.whiteBox}>
        <PurpleHeader/>
        <Container className={classes.boxContainer}>
            <ScrollAnimation animateIn="animate__fadeIn">
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <Avatar className={classes.darkIconContainer}>
                        <BrushIcon className={classes.hobbiesIcon}/>
                    </Avatar>
                </div>
                <DarkTextTypography align="center" variant="h3" gutterBottom
                                    className={classes.heading}>
                    Hobbies and interests
                </DarkTextTypography>
                <DarkTextTypography align="center" variant="body1" gutterBottom
                                    className={classes.heading}>
                    {myHobbiesAndInterests}
                </DarkTextTypography>
            </ScrollAnimation>
        </Container>
    </div>
}

export default HobbiesSection;
