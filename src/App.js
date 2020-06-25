import React from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import AboutMe from "./pages/AboutMe"
import MyProjects from "./pages/MyProjects"
import { Router, Link, Location } from '@reach/router'
import posed, { PoseGroup } from 'react-pose'
import { ParallaxProvider } from 'react-scroll-parallax'

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 50, beforeChildren: 50 },
    exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
    <Location>
        {({ location }) => (
            <PoseGroup animateOnMount>
                <RouteContainer key={location.key}>
                    <Router location={location}>{children}</Router>
                </RouteContainer>
            </PoseGroup>
        )}
    </Location>
);

function App() {

    let show = true


    return (
        <div className="App">
            <ParallaxProvider>
                <PosedRouter>
                    <HomePage path={process.env.PUBLIC_URL + '/'} />
                    <AboutMe path="/AboutMe" />
                    <MyProjects path="/MyProjects" />
                </PosedRouter>
            </ParallaxProvider>
        </div>
    )
}

export default App;
