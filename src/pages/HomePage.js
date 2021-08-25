import React, {useState} from 'react'
import "animate.css/animate.min.css"
import '../App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import {theme} from '../CustomTheme'
import BlueOverlay from "../components/BlueOverlay"
import EmailAddressCopiedDialog from "../components/EmailAddressCopiedDialog"
import HomePageBackground from '../components/HomePageBackground'
import NavBar from "../components/NavBar"
import MainTitle from "../components/MainTitle";
import { useMediaQuery } from 'react-responsive'
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import HobbiesSection from "../components/HobbiesSection";
import ContactSection from "../components/ContactSection";
import AboutWebsiteSection from "../components/AboutWebsiteSection";

/**
 * The Home page.
 * @returns {JSX.Element} The Home page.
 */
function HomePage() {

    const [windowDimensions] = useState([window.innerWidth, window.innerHeight]);

    // Anchor for drawer nav menu.
    const [drawerNavMenuOpen, setDrawerNavMenuOpen] = React.useState(false);

    // Toggles visibility of drawer nav menu.
    const toggleDrawerNavMenuOpen = () => {
        // Set padding based on whether drawer menu is open for title grid. This is because when drawer is open, it
        // takes up the scrollbar, making the title grid 'jump'.
        const title = document.getElementById("titleGrid");
        if (drawerNavMenuOpen) {
            title.style.paddingRight = '0px';
        } else {
            title.style.paddingRight = (window.innerWidth - document.body.clientWidth) + 'px';
        }

        setDrawerNavMenuOpen((prevOpen) => !prevOpen);
    };

    // Closes drawer nav menu.
    const handleDrawerNavMenuClose = () => {
        setDrawerNavMenuOpen(false);

        // Set padding to 0 for title grid. This is because when drawer is open, it
        // takes up the scrollbar, making the title grid 'jump'.
        const title = document.getElementById("titleGrid");
        title.style.paddingRight = '0px';
    };

    const isExtraSmallScreen = useMediaQuery({
        query: '(max-width: 800px)'
    });

    // Whether or not to show snackbar about email address being copied to clipboard.
    const [showSnackbar, setShowSnackbar] = React.useState(false);

    // Close the email message snackbar.
    const handleCloseSnackBar = () => {
        setShowSnackbar(false)
    };

    return (
        <ThemeProvider theme={theme}>
            <HomePageBackground/>
            <div style={{zIndex: 1, position: "relative"}}>
                <EmailAddressCopiedDialog show={showSnackbar} handleClose={handleCloseSnackBar}/>
                <NavBar isExtraSmallScreen={isExtraSmallScreen} windowDimensions={windowDimensions}
                        drawerNavMenuOpen={drawerNavMenuOpen} toggleDrawerNavMenuOpen={toggleDrawerNavMenuOpen}
                        handleDrawerNavMenuClose={handleDrawerNavMenuClose} />

                <MainTitle drawerNavMenuOpen={drawerNavMenuOpen}/>

                {/* For some reason, position relative makes it so that the horizontal line glitch no longer occurs. */}
                <div style={{zIndex: "1", position: "relative"}}>

                    <BlueOverlay/>

                    <AboutSection/>

                    <SkillsSection/>

                    <ExperienceSection/>

                    <ProjectsSection/>

                    <EducationSection/>

                    <HobbiesSection/>

                    <ContactSection setShowEmailDialog={setShowSnackbar}/>

                    <AboutWebsiteSection/>

                </div>
            </div>

        </ThemeProvider>
    )
}

export default HomePage
