import Grid from "@material-ui/core/Grid";
import {LightTextTypography} from "../CustomTheme";
import React from "react";
import posed from "react-pose";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

// Container for Pose animations.
const ItemPoseContainer = posed.div({
    enter: { staggerChildren: 500, delayChildren: 500 }
});

// Animations.
const Item = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
});

const useStyles = makeStyles(() => ({
    titleGrid: {
        height: "100vh",
        paddingBottom: "10vh",
        marginBottom: "10vh",
        position: "fixed",
        justifyContent: "center",
        top: "0",
        left: "0",
        zIndex: 1
    },
    titleGridSmall: {
        height: "100vh",
        paddingBottom: "10vh",
        marginBottom: "10vh",
        position: "fixed",
        justifyContent: "center",
        top: "0",
        left: "0",
        zIndex: 1
    },
}));

/**
 * Animated main title.
 * @param drawerNavMenuOpen whether nav menu drawer is open.
 * @returns {JSX.Element} The Main Title component.
 */
function MainTitle({ drawerNavMenuOpen }) {

    const classes = useStyles();

    /* Padding is required so pose animation does not create unnecessary scrollbars. */
    return <div style={{ paddingLeft: 20, paddingRight: 20}}>
        <Grid id={"titleGrid"} container direction="row" alignItems="center" alignContent="center"
              className={drawerNavMenuOpen ? classes.titleGridSmall : classes.titleGrid}>
            <Grid item>
                <ItemPoseContainer>
                    <Item>
                        <LightTextTypography align={"left"} variant="h3">
                            Hello!
                        </LightTextTypography>
                    </Item>
                    <Item>
                        <LightTextTypography align={"left"} variant="h2">
                            I'm Brandon.
                        </LightTextTypography>
                    </Item>
                    <Item>
                        <LightTextTypography align={"left"} variant="h3">
                            A Software Developer.
                        </LightTextTypography>
                    </Item>
                </ItemPoseContainer>
            </Grid>
        </Grid>
    </div>
}

MainTitle.propTypes = {
    drawerNavMenuOpen: PropTypes.bool
};

export default MainTitle;