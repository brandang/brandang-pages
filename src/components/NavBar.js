import {Link} from "react-scroll";
import {LightTextTypography} from "../CustomTheme";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import DrawerNavMenu from "./DrawerNavMenu";

const useStyles = makeStyles({
    navBar: {
        backgroundColor: "transparent",
        boxShadow: "none",
        height: 65,
        justifyContent: "center"
    },
    navBarMobile: {
        backgroundColor: "#434343",
        boxShadow: "none",
    },
    navBarButton: {
        margin: 20,
        backgroundColor: "transparent",
        cursor: "pointer",
        float: "left"
    },
    progressBar: {
        width: 100,
        position: "absolute",
        left: 0,
        height: 2,
        background: "#fff",
        transition: "width 1s"
    },
    menuIcon: {
        color: "#ffffff",
        fontSize: 35
    }
});

/**
 * NavBar to navigate to sections of the page. Changes to Drawer nav menu on small screen sizes.
 * @param isExtraSmallScreen whether screen size is very small.
 * @param windowDimensions dimensions of the window.
 * @param drawerNavMenuOpen whether drawer nav menu is open.
 * @param toggleDrawerNavMenuOpen toggle opening of drawer nav menu.
 * @param handleDrawerNavMenuClose close drawer nav menu.
 * @returns {JSX.Element} the NavBar.
 */
function NavBar({ isExtraSmallScreen, windowDimensions, drawerNavMenuOpen, toggleDrawerNavMenuOpen,
                    handleDrawerNavMenuClose }) {

    const classes = useStyles();

    // How long scroll animation lasts.
    const scrollAnimationDuration = 500;

    // Sections that nav bar may navigate to.
    const navBarSections = ["home", "about", "skills", "experience", "projects", "education", "hobbies", "contact" ];

    // Buttons in the nav bar.
    const navBarButtons = ["homeNavButton", "aboutNavButton", "skillsNavButton", "experienceNavButton",
        "projectsNavButton", "educationNavButton", "hobbiesNavButton", "contactNavButton" ];

    // Update progressbar.
    const updateProgressBar = () => {
        const threshold = windowDimensions[1] * 0.2;
        let selectedSectionIndex = 0;

        for (let i = 0; i < navBarSections.length; i ++) {
            const sectionName = navBarSections[i];
            const top = document.getElementById(sectionName).getBoundingClientRect().top;
            if (top <= threshold) {
                selectedSectionIndex = i;
            }
        }

        const progressBar = document.getElementById("progressBar")

        // Last section is selected, set progressbar to full.
        if (selectedSectionIndex === navBarSections.length - 1) {
            progressBar.style.width = `100vw`
        } else {
            progressBar.style.width = `${document.getElementById(navBarButtons[selectedSectionIndex])
                .getBoundingClientRect().right + 20}px`
        }
    }

    // Updates nav bar.
    const updateNavBar = () => {
        const navBar = document.getElementById("navBar");
        const scrollY = window.scrollY;
        if (scrollY >= windowDimensions[1] * 0.2) {
            navBar.style.backgroundColor = "#434343";
        } else {
            navBar.style.backgroundColor = "transparent";
        }

        if (!isExtraSmallScreen) {
            updateProgressBar(scrollY);
            handleDrawerNavMenuClose();
        }
    };

    // This function runs whenever page finishes loading.
    useEffect(() => {

        // Updates progressbar as needed when window resizes.
        const handleWindowResize = () => {
            updateProgressBar();
        };

        // Update nav bar when page is scrolled.
        const onScroll = () => {
            updateNavBar();
        };

        // Attach listeners.
        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('scroll', onScroll);

        updateNavBar();
    });

    return <div>
        <AppBar id={"navBar"} position="fixed" className={classes.navBar}>
            <div style={{display: isExtraSmallScreen ? 'none' : 'flex', justifyContent:'center'}}>
                <div id={"progressBar"} className={classes.progressBar}/>
                <Link id={"homeNavButton"} className={classes.navBarButton} to={"home"} spy={true}
                      smooth={true} duration={scrollAnimationDuration}>
                    <LightTextTypography variant={"h6"}>
                        Home
                    </LightTextTypography>
                </Link>
                <Link id={"aboutNavButton"} className={classes.navBarButton} to={"about"} spy={true}
                      smooth={true} duration={scrollAnimationDuration}>
                    <LightTextTypography variant={"h6"}>
                        About
                    </LightTextTypography>
                </Link>
                <Link id={"skillsNavButton"} className={classes.navBarButton} to={"skills"} spy={true}
                      smooth={true} duration={scrollAnimationDuration}>
                    <LightTextTypography variant={"h6"}>
                        Skills
                    </LightTextTypography>
                </Link>
                <Link id={"experienceNavButton"} className={classes.navBarButton} to={"experience"} spy={true}
                      smooth={true} duration={scrollAnimationDuration}>
                    <LightTextTypography variant={"h6"}>
                        Experience
                    </LightTextTypography>
                </Link>
                <Link id={"projectsNavButton"} className={classes.navBarButton} to={"projects"} spy={true}
                      smooth={true} duration={scrollAnimationDuration}>
                    <LightTextTypography variant={"h6"}>
                        Projects
                    </LightTextTypography>
                </Link>
                <Link id={"educationNavButton"} className={classes.navBarButton} to={"education"} spy={true}
                      smooth={true} duration={scrollAnimationDuration}>
                    <LightTextTypography variant={"h6"}>
                        Education
                    </LightTextTypography>
                </Link>
                <Link id={"hobbiesNavButton"} className={classes.navBarButton} to={"hobbies"} spy={true}
                      smooth={true} duration={scrollAnimationDuration}>
                    <LightTextTypography variant={"h6"}>
                        Hobbies
                    </LightTextTypography>
                </Link>
                <Link id={"contactNavButton"} className={classes.navBarButton} to={"contact"} spy={true}
                      smooth={true} duration={scrollAnimationDuration}>
                    <LightTextTypography variant={"h6"}>
                        Contact
                    </LightTextTypography>
                </Link>
            </div>

            <div style={{display: isExtraSmallScreen ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                <IconButton id={"menuButton"} color="primary" onClick={toggleDrawerNavMenuOpen} component="span">
                    <MenuIcon className={classes.menuIcon}/>
                </IconButton>
            </div>
        </AppBar>
        <DrawerNavMenu handleMenuClose={handleDrawerNavMenuClose} menuOpen={drawerNavMenuOpen}/>
    </div>
}

NavBar.propTypes = {
    isExtraSmallScreen: PropTypes.bool,
    windowDimensions: PropTypes.arrayOf(PropTypes.number),
    drawerNavMenuOpen: PropTypes.bool,
    toggleDrawerNavMenuOpen: PropTypes.func,
    handleDrawerNavMenuClose: PropTypes.func
};

export default NavBar;