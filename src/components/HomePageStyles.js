import {makeStyles} from "@material-ui/core/styles"

export const styles = makeStyles((theme) => ({
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
    skillsItem: {
        paddingBottom: "50px"
    },
    avatar: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
    heading: {
        paddingTop: "30px",
        paddingBottom: "30px",
    },
    // NOTE: in order for zIndex to work, position must be set to relative
    blueBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#006cbf",
        position: "relative",
        zIndex: 2
    },
    whiteBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#FFF",
        position: "relative",
        zIndex: 2
    },
    orangeBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#E56B1F",
        position: "relative",
        zIndex: 2
    },
    purpleBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#961fe0",
        position: "relative",
        zIndex: 2
    },
    darkBlueBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#2a5a79",
        position: "relative",
        zIndex: 2
    },
    darkGrayBox: {
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#434343",
        position: "relative",
        zIndex: 2
    },
    firstContainer: {
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    boxContainer: {
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 50,
        paddingBottom: 50,
    },
    footerContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 10,
        paddingBottom: 150
    },
    skillsIcon: {
        color: "#ffffff",
        fontSize: 150
    },
    aboutIcon: {
        color: "#006cbf",
        fontSize: 150
    },
    workIcon: {
        color: "#e56b1f",
        fontSize: 130
    },
    projectsIcon: {
        color: "#ffffff",
        fontSize: 120
    },
    educationIcon: {
        color: "#961fe0",
        fontSize: 140
    },
    hobbiesIcon: {
        color: "#ffffff",
        fontSize: 130
    },
    chatIcon: {
        color: "#2a5a79",
        fontSize: 130
    },
    emailIcon: {
        color: "#2a5a79",
        fontSize: 60
    },
    resumeIcon: {
        color: "#2a5a79",
        fontSize: 60
    },
    darkIcon: {
        color: "#434343",
        fontSize: 40
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
    darkIconContainer: {
        backgroundColor: "#434343",
        width: "150px",
        height: "150px",
        padding: "10px",
        marginBottom: "20px",
    },
    lightIconContainer: {
        backgroundColor: "#FFF",
        width: "150px",
        height: "150px",
        padding: "10px",
        marginBottom: "20px",
    },
    youtubeVideo: {
        width: "100%",
        height: "720px"
    },
    videoPanel: {
        justifyContent: "center",
        display: "block",
        paddingBottom: "50px",
    },
    videoBackground: {
        minWidth: "100vw",
        minHeight: "100vh",
        position: "fixed",
        width: "auto",
        height: "auto",
        backgroundPosition: "center",
        size: "cover",
        backgroundRepeat: "no-repeat",
        top: 0,
        left: 0,
        zIndex: -1
    },
    classifierDemoContainer: {
        justifyContent: "center",
        display: "flex",
        paddingBottom: "50px",
        paddingTop: "50px",
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
    drawerList: {
        backgroundColor: "#434343"
    },
    menuDrawer: {
        backgroundColor: "#434343"
    }
}))
