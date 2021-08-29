import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import {LightTextTypography} from "../CustomTheme";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {WhiteHeader} from "./Headers";
import {
    emailAddress,
} from "../Texts";
import ChatIcon from "@material-ui/icons/Chat";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {default as HyperLink} from "@material-ui/core/Link/Link";
import Resume from "../files/Resume.pdf";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PropTypes from "prop-types";
import MainTitle from "./MainTitle";
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
    darkBlueBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#2a5a79",
        position: "relative",
        zIndex: 2
    },
    chatIcon: {
        color: "#2a5a79",
        fontSize: 130
    },
    hoverLink: {
        display: "inline",
        "&": {
            textDecoration: "underline",
            color: "#ffffff",
        },
        "&:hover": {
            textDecoration: "underline",
            textDecorationThickness: "5px",
            color: "#ffffff",
        },
    },
    emailIcon: {
        color: "#2a5a79",
        fontSize: 60
    },
    iconButton: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#ffffff",
        "&:hover": {
            backgroundColor: "#c4c4c4",
        },
        "&:active": {
            backgroundColor: "#c4c4c4"
        }
    },
    resumeIcon: {
        color: "#2a5a79",
        fontSize: 60
    },
}));

/**
 * Contact Section.
 * @param setShowEmailDialog function that sets visibility of email snackbar.
 * @returns {JSX.Element} Contact Section.
 */
function ContactSection({ setShowEmailDialog }) {

    // Handler for when email address is copied.
    const copiedEmailAddress = () => {
        setShowEmailDialog(true);
    };

    // Prevents event from propagating.
    const preventDefault = (event) => event.preventDefault();

    const classes = useStyles();

    return <div id={"contact"} className={classes.darkBlueBox}>
        <WhiteHeader/>
        <Container className={classes.boxContainer}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <BubbleContainer>
                        <Avatar className={classes.lightIconContainer}>
                            <ChatIcon className={classes.chatIcon}/>
                        </Avatar>
                    </BubbleContainer>
                </div>
                <LightTextTypography align="center" variant="h3" gutterBottom
                                     className={classes.heading}>
                    Contact me
                </LightTextTypography>
                <LightTextTypography align="center" variant="body1">
                    My email: {" "}
                    <CopyToClipboard text={emailAddress} onCopy={copiedEmailAddress}>
                        {/*Prevent default just makes it so that it does not do anything.*/}
                        <HyperLink href="" onClick={preventDefault} className={classes.hoverLink}>
                            brandon.dang1234@gmail.com
                        </HyperLink>
                    </CopyToClipboard>
                </LightTextTypography>
                <br/>
                <LightTextTypography align="center" variant="body1" gutterBottom>
                    <HyperLink href={Resume} className={classes.hoverLink}>
                        My resume
                    </HyperLink>
                </LightTextTypography>
                <Grid container direction="row" justify="center" alignItems="stretch" spacing={1}>
                    <CopyToClipboard text={emailAddress} onCopy={copiedEmailAddress}>
                        <IconButton className={classes.iconButton}>
                            <EmailIcon className={classes.emailIcon}/>
                        </IconButton>
                    </CopyToClipboard>
                    <IconButton href={Resume} className={classes.iconButton}>
                        <FileCopyIcon className={classes.resumeIcon}/>
                    </IconButton>
                </Grid>
            </ScrollAnimation>
        </Container>
    </div>
}

MainTitle.ContactSection = {
    setShowEmailDialog: PropTypes.func
};

export default ContactSection;
