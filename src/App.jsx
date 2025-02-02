import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import '../src/App.css'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import MyFooter from './components/MyFooter'

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Services />
            <About />
            <Products />
            <Blog />
            <Newsletter />
            <MyFooter />
        </>
    )
}

export default App