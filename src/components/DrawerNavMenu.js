import List from "@material-ui/core/List";
import {Link} from "react-scroll";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import {LightTextTypography} from "../CustomTheme";
import Divider from "@material-ui/core/Divider";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import WorkIcon from "@material-ui/icons/Work";
import BuildIcon from "@material-ui/icons/Build";
import SchoolIcon from "@material-ui/icons/School";
import BrushIcon from "@material-ui/icons/Brush";
import ChatIcon from "@material-ui/icons/Chat";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    drawerNavBarIcon: {
        color: "#ffffff",
        fontSize: 24
    },
    drawerNavBarDivider: {
        background: "#ffffff"
    },
    drawerBackground: {
        background: "#434343",
    },
});

/**
 * Drawer nav menu for navigation.
 * @param menuOpen Whether it should be open.
 * @param handleMenuClose handler for when it should be closed.
 * @returns {JSX.Element} The nav menu.
 */
function DrawerNavMenu({ menuOpen, handleMenuClose }) {
    
    const classes = useStyles();

    // How long scroll animation lasts.
    const scrollAnimationDuration = 500;
    
    return <Drawer anchor={"right"} classes={{ paper: classes.drawerBackground }} open={menuOpen}
                   onClose={handleMenuClose}>
        <List>
            <Link onClick={handleMenuClose} to={"home"} spy={true}
                  smooth={true} duration={scrollAnimationDuration}>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon className={classes.drawerNavBarIcon}/>
                    </ListItemIcon>
                    <ListItemText disableTypography>
                        <LightTextTypography variant="h6">Main page</LightTextTypography>
                    </ListItemText>
                </ListItem>
            </Link>
            <Divider className={classes.drawerNavBarDivider}/>
            <Link onClick={handleMenuClose} to={"about"} spy={true}
                  smooth={true} duration={scrollAnimationDuration}>
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon className={classes.drawerNavBarIcon}/>
                    </ListItemIcon>
                    <ListItemText disableTypography>
                        <LightTextTypography variant="h6">About me</LightTextTypography>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link onClick={handleMenuClose} to={"skills"} spy={true}
                  smooth={true} duration={scrollAnimationDuration}>
                <ListItem button>
                    <ListItemIcon>
                        <CodeIcon className={classes.drawerNavBarIcon}/>
                    </ListItemIcon>
                    <ListItemText disableTypography><LightTextTypography variant="h6">My skills
                    </LightTextTypography></ListItemText>
                </ListItem>
            </Link>
            <Link onClick={handleMenuClose} to={"experience"} spy={true}
                  smooth={true} duration={scrollAnimationDuration}>
                <ListItem button>
                    <ListItemIcon>
                        <WorkIcon className={classes.drawerNavBarIcon}/>
                    </ListItemIcon>
                    <ListItemText disableTypography><LightTextTypography variant="h6">Experience
                    </LightTextTypography></ListItemText>
                </ListItem>
            </Link>
            <Link onClick={handleMenuClose} to={"projects"} spy={true}
                  smooth={true} duration={scrollAnimationDuration}>
                <ListItem button>
                    <ListItemIcon>
                        <BuildIcon className={classes.drawerNavBarIcon}/>
                    </ListItemIcon>
                    <ListItemText disableTypography>
                        <LightTextTypography variant="h6">My projects</LightTextTypography>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link onClick={handleMenuClose} to={"education"} spy={true}
                  smooth={true} duration={scrollAnimationDuration}>
                <ListItem button>
                    <ListItemIcon>
                        <SchoolIcon className={classes.drawerNavBarIcon}/>
                    </ListItemIcon>
                    <ListItemText disableTypography>
                        <LightTextTypography variant="h6">Education</LightTextTypography>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link onClick={handleMenuClose} to={"hobbies"} spy={true}
                  smooth={true} duration={scrollAnimationDuration}>
                <ListItem button>
                    <ListItemIcon>
                        <BrushIcon className={classes.drawerNavBarIcon}/>
                    </ListItemIcon>
                    <ListItemText disableTypography>
                        <LightTextTypography variant="h6">My hobbies</LightTextTypography>
                    </ListItemText>
                </ListItem>
            </Link>
            <Divider className={classes.drawerNavBarDivider}/>
            <Link onClick={handleMenuClose} to={"contact"} spy={true}
                  smooth={true} duration={scrollAnimationDuration}>
                <ListItem button>
                    <ListItemIcon>
                        <ChatIcon className={classes.drawerNavBarIcon}/>
                    </ListItemIcon>
                    <ListItemText disableTypography>
                        <LightTextTypography variant="h6">Contact</LightTextTypography>
                    </ListItemText>
                </ListItem>
            </Link>
        </List>
    </Drawer>
}

DrawerNavMenu.propTypes = {
    handleMenuClose: PropTypes.func,
    menuOpen: PropTypes.bool,
};

export default DrawerNavMenu;