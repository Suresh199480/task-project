import React from 'react'
import { Link } from 'react-router-dom'
import "./info.css"
const Info = () => {
    return ( <
        >
        <
        div className = 'container mt-5 info-container' >
        <
        h1 className = ' text-center fw-bold text-uppercase' > considering a exotic frenchie ? < /h1> <
        div className = 'row ' >
        <
        div className = 'col-md-6 col-sm-12 info-left text-center mt-5' >
        <
        h4 className = ' text-uppercase fw-bold' > they can be a < br / > handful < /h4> <
        p > Check out our information on < br / > french building care and information < br / > to see
        if they are right
        for you. < /p> <
        Link to = "#"
        className = ' text-decoration-none info-btn' > care & info < /Link> <
        /div> <
        div className = 'col-md-6 col-sm-12 info-right text-center mt-5' >
        <
        div className = 'box-1' > < /div> <
        div className = 'box-2' > < /div> <
        /div> <
        /div> <
        /div>

        <
        />
    )
}

export default Info