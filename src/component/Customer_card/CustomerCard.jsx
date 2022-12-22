import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Slider from "react-slick";

import './CustomerCard.css';
const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
        <div>
            <h3>Slide {num}</h3>
        </div>
    ));

function CustomerCard() {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,

    };
    return (
        <div className="row-custom">
            <div className="row-custom-1">
                <div className="left-col">
                <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                </div>
                <div className="right-col"></div>
            </div>
        </div>
    )
}

export default CustomerCard