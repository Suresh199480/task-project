import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Bread from './breadcrumb/Bread'
import Emptybox from './emptybox/Emptybox'

import Header from './header/Header'
import Home from './homesec/Home'
import Info from './info/Info'
import Infotwo from './info/Infotwo'
import Navbar from './navbar/Navbar'
import Quote from './quotebox/Quote'
import "./app.css"
import Footercontent from './footer/Footercontent'

const App = () => {
    return ( <
        div className = 'app' >
        <
        Router >
        <
        Header / >
        <
        Navbar / >
        <
        Home / >
        <
        Info / >
        <
        Infotwo / >
        <
        Quote / >
        <
        Bread / >
        <
        h1 className = 'text-center mt-5 text-uppercase fw-bold' > #exoticfrenchies < /h1> <
        Emptybox / >
        <
        Emptybox / >
        <
        Link to = "#"
        className = 'load-btn' > load more < /Link> <
        Footercontent / >
        <
        /Router> <
        /div>
    )
}

export default App