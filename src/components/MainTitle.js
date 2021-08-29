import Grid from "@material-ui/core/Grid";
import {LightTextTypography} from "../CustomTheme";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {motion} from "framer-motion";

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
    animationList: {
        paddingLeft: 10
    }
}));

// List animation for staggering children.
const enterListAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.5 } },
};

// Animation for title.
const enterListItemAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

/**
 * Animated main title.
 * @param drawerNavMenuOpen whether nav menu drawer is open.
 * @returns {JSX.Element} The Main Title component.
 */
function MainTitle({ drawerNavMenuOpen }) {

    const classes = useStyles();

    const [startAnimation, setStartAnimation] = useState(false);

    // Start animation at end of the queue after a slight delay.
    setTimeout(function() {
        setStartAnimation(true)
    }, 100);

    /* Padding is required so pose animation does not create unnecessary scrollbars. */
    return <Grid id={"titleGrid"} container direction="row" alignItems="center" alignContent="center"
                 className={drawerNavMenuOpen ? classes.titleGridSmall : classes.titleGrid}>
        <Grid item>
            <motion.ul className={classes.animationList} align={"left"} initial="hidden"
                       animate={startAnimation ? "visible" : "hidden"} variants={enterListAnimation}>
                <motion.li variants={enterListItemAnimation}>
                    <LightTextTypography align={"left"} variant="h3">
                        Hello!
                    </LightTextTypography>
                </motion.li>
                <motion.li variants={enterListItemAnimation}>
                    <LightTextTypography align={"left"} variant="h3">
                        I'm Brandon.
                    </LightTextTypography>
                </motion.li>
                <motion.li variants={enterListItemAnimation}>
                    <LightTextTypography align={"left"} variant="h3">
                        A Software Developer.
                    </LightTextTypography>
                </motion.li>
            </motion.ul>
        </Grid>
    </Grid>
}

MainTitle.propTypes = {
    drawerNavMenuOpen: PropTypes.bool
};

export default MainTitle;