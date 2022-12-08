import React from 'react'
import { Link } from 'react-router-dom'
import "./quote.css"
const Quote = () => {
    return ( <
        div className = 'container quote-container ' >
        <
        h1 className = 'text-center text-uppercase' > what people say < /h1> <
        div className = 'row d-flex justify-content-between align-items-center mt-5' >
        <
        div className = 'col-md-4' >
        <
        div className = 'box-5' >
        <
        h5 className = 'fw-bold text-uppercase' > search - 2022 < /h5> <
        p className = 'text-center mt-4' > Lorem ipsum dolor sit ametconsectetur adipiscing elit Ut et massami.Aliquam in hendrerit urna.Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricesmauris.. < /p> <
        div className = 'quote' > < i class = "fa-solid fa-quote-right d-flex align-items-center justify-content-center mt-3" > < /i></div >
        <
        /div> <
        /div> <
        div className = 'col-md-4' >
        <
        div className = 'box-6' >
        <
        h5 className = 'fw-bold text-uppercase' > search - 2022 < /h5> <
        p className = 'text-center mt-4' > Lorem ipsum dolor sit ametconsectetur adipiscing elit Ut et massami.Aliquam in hendrerit urna.Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricesmauris.. < /p> <
        div className = 'quote' > < i class = "fa-solid fa-quote-right d-flex align-items-center justify-content-center mt-3 " > < /i></div >
        <
        /div>

        <
        /div>

        <
        div className = 'col-md-4' >
        <
        div className = 'box-7' >
        <
        h5 className = 'fw-bold text-uppercase' > search - 2022 < /h5> <
        p className = 'text-center mt-4' > Lorem ipsum dolor sit ametconsectetur adipiscing elit Ut et massami.Aliquam in hendrerit urna.Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricesmauris.. < /p> <
        div className = 'quote ' > < i class = "fa-solid fa-quote-right d-flex align-items-center justify-content-center mt-3" > < /i></div >
        <
        /div> <
        /div>

        <
        /div>

        <
        Link to = "#"
        className = 'text-center mt-5 text-decoration-none text-uppercase find-btn' > Find more happiness < /Link> <
        /div>
    )
}

export default Quote