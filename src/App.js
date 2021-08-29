import React from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {

    return (
        <div className="App">
            <ParallaxProvider>
                <HomePage path={process.env.PUBLIC_URL + '/'} />
            </ParallaxProvider>
        </div>
    )
}

export default App;
