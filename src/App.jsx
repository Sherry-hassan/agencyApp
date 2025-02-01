import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import '../src/App.css'
import Services from './components/Services'

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Services />
        </>
    )
}

export default App