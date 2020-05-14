import React from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core/styles"
import { ThemeProvider } from '@material-ui/core/styles'
import {theme} from '../CustomTheme'
import posed from 'react-pose'
import { Router, Link, Location } from '@reach/router'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import AppBarButton from "../components/AppBarButton";
import {myProjectsDescription, digitClassifierDescription} from "../Localisation"
import SignatureCanvas from 'react-signature-canvas'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import RestoreIcon from '@material-ui/icons/Restore'
import DoneIcon from '@material-ui/icons/Done';
import DarkFooter from "../components/DarkFooter"
import DarkHeader from "../components/DarkHeader"
import DigitClassifier from '../DigitClassifier.js'
import {getPixelsArrayFromCanvas, getDigitsFromCanvas} from "../CanvasHelpers"
import NumberClassificationDialog from "../components/NumberClassificationDialog"
import {DarkTextTypography, LightTextTypography} from "../CustomTheme";

const canvasWidth = 200
const canvasHeight = 200
const penSize = 10

const PoseContainer = posed.div({
    enter: { staggerChildren: 100 }
});

const Item = posed.p({
    enter: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
});

const AppBarItem = posed.p({
    enter: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
});

const GrayTextTypography = withStyles({
    root: {
        color: "#939393"
    }
})(Typography);

const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: 10,
        backgroundColor: '#434343',
        width: canvasWidth
    },
    appBar: {
        background: '#434343',
        boxShadow: 'none',
        flexGrow: 1,
        alignItems: 'right'
    },
    appBarButton: {
        marginLeft: 20
    },
    posedItem: {
        paddingTop: 20,
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 20,
        position: "relative",
        overflow: "hidden",
    },
    posedItemDark: {
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 100,
        paddingRight: 100,
        backgroundColor: '#434343'
    },
    posedHeaderDark: {
        paddingTop: 50,
        backgroundColor: '#434343',
        border: 0,
        marginBottom: 0
    },
    posedFooterDark: {
        paddingBottom: 80,
        margin: 0,
        backgroundColor: '#434343',
    },
    canvasContainer: {
        width: canvasWidth,
        height:  canvasHeight,
        border: '5px dotted #434343'
    },
    whiteIcon: {
        color: '#FFF',
        fontSize: 24
    },
}))

function MyProjectsPage() {

    const classes = useStyles()
    let canvasRef = React.createRef()

    const [openDialog, setOpenDialog] = React.useState(false)
    const [classifierPrediction, setPrediction] = React.useState("Unknown")

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const onRestoreClick = () => {
        canvasRef.clear()
    }

    const classifier = new DigitClassifier()

    const onSubmitClick = () => {
        const trimmedCanvas = canvasRef.getTrimmedCanvas()
        const digits = getDigitsFromCanvas(trimmedCanvas, trimmedCanvas.width, trimmedCanvas.height)
        let predictions = ""
        for (let i in digits) {
            const digit = digits[i]
            predictions += classifier.predict(digit, 3)
        }
        setPrediction(predictions)
        setOpenDialog(true)

        // const pixels = getPixelsArrayFromCanvas(trimmedCanvas, trimmedCanvas.width, trimmedCanvas.height)
        // const prediction = classifier.predict(pixels, 3)
        // console.log(prediction)
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" className={classes.appBar}>
                <PoseContainer>
                    <AppBarItem>
                        <Box display="flex" p={1} m={1}>
                            <Box flex={1} p={1} m={1}/>
                            <AppBarButton buttonText={"Home"} to={"/"} component={Link}/>
                            <AppBarButton buttonText={"About me"} to={"/AboutMe"} component={Link}/>
                            <AppBarButton buttonText={"My projects"} disabled/>
                        </Box>
                    </AppBarItem>
                </PoseContainer>
            </AppBar>
            <NumberClassificationDialog show={openDialog} prediction={classifierPrediction} onHide={handleCloseDialog}/>
            {/* A box so that the app bar does not cover any content */}
            <Box display="flex" p={1} m={1}></Box>
            <div style={{ position: "relative", paddingTop:20}}>
                <PoseContainer>
                    <Item className={classes.posedHeaderDark}>
                        <Container>
                            <LightTextTypography align="left" variant="h4" gutterBottom>
                                My projects
                            </LightTextTypography>
                            <LightTextTypography align="left" variant="body1">
                                {myProjectsDescription}
                            </LightTextTypography>
                        </Container>
                        <DarkHeader/>
                    </Item>
                    <Item className={classes.posedItem}>
                        <Container>
                            <DarkTextTypography align={"left"} variant="h4" gutterBottom>
                                Digit classifier
                            </DarkTextTypography>
                            <DarkTextTypography align={"left"} variant="body1">
                                {digitClassifierDescription}
                            </DarkTextTypography>
                        </Container>
                    </Item>
                    <Item>
                        <Container>
                            <div style={{width: "100%", justifyContent: 'center', display: 'flex'}}>
                                <div className={classes.canvasContainer}>
                                    <SignatureCanvas penColor={"black"} canvasProps={{width: canvasWidth, height:
                                        canvasHeight, className: 'sigCanvas'}} minWidth={penSize} minHeight={penSize}
                                    ref={(ref) => { canvasRef = ref }}/>
                                </div>
                            </div>
                            {/*Div to align grid in center*/}
                            <div style={{width: "100%", justifyContent: 'center', display: 'flex'}}>
                                <Grid container direction="row" justify="center" alignItems="center" spacing={1}
                                      className={classes.grid}>
                                    <Grid item>
                                        <Button color="primary" onClick={onRestoreClick}>
                                            <RestoreIcon className={classes.whiteIcon}/>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button color="primary" onClick={onSubmitClick}>
                                            <DoneIcon className={classes.whiteIcon}/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </Item>

                </PoseContainer>
            </div>
        </ThemeProvider>
    );
}

export default MyProjectsPage;
