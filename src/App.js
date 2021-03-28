import React from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import { Router, Location } from '@reach/router'
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

    return (
        <div className="App">
            <ParallaxProvider>
                <PosedRouter>
                    <HomePage path={process.env.PUBLIC_URL + '/'} />
                </PosedRouter>
            </ParallaxProvider>
        </div>
    )
}

export default App;
