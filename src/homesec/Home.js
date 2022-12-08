import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
    return ( <
        >
        <
        div className = 'container mt-5 home-container ' >
        <
        div className = 'row' >
        <
        div className = 'col-md-6 home-left ' >
        <
        h2 > huggable, snuggable, < br / > ready to nuzzle < /h2> <
        /div> <
        div className = 'col-md-6 home-right ' >
        <
        div className = 'box ' >
        <
        Link to = "#"
        className = 'view-btn' > View more < /Link> <
        /div> <
        /div> <
        /div> <
        /div> <
        />
    )
}

export default Home