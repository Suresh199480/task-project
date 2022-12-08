import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
        const [click, setClick] = useState(false)
        return ( <
                >
                <
                div className = 'container d-flex align-items-center justify-content-between  nav-container' >
                <
                Link to = "#"
                className = 'navbar-brand d-flex text-uppercase  fw-bold'
                id = 'logo' >
                <
                img src = 'https://4.bp.blogspot.com/-sXSamtfU6yk/WI6vFX_WsGI/AAAAAAAAKmk/i5HYyW6n-V4ZXFSElYtXJN8VMdcjKFq5wCLcB/s1600/Heart-Disease-Dogs.jpg'
                alt = '' / >
                bull < br / > dogology <
                /Link> <
                div className = { click ? "nav-menu active" : "nav-menu" }
                onClick = {
                    () => setClick(false) } >
                <
                li className = 'nav-items' >
                <
                Link to = "#"
                className = 'nav-link' > available < /Link> <
                /li> <
                li className = 'nav-items' >
                <
                Link to = "#"
                className = 'nav-link' > our studs < /Link> <
                /li> <
                li className = 'nav-items' >
                <
                Link to = "#"
                className = 'nav-link' > happy homes < /Link> <
                /li> <
                li className = 'nav-items' >
                <
                Link to = "#"
                className = 'nav-link' > care & info < /Link> <
                /li> <
                li className = 'nav-items' >
                <
                Link to = "#"
                className = 'nav-link contact-btn' > contactus < /Link> <
                /li> <
                /div> <
                div className = 'toggle-btn'
                onClick = {
                    () => setClick(!click) } > {
                    click ? ( < i class = "fa fa-times" > < /i>):
                        ( < i class = "fa fa-bars" > < /i>)
                        } <
                        /div> <
                        /div> <
                        />
                    )
                }

                export default Navbar