import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './SingleHeading.css';
import { GiFlowerPot } from 'react-icons/gi';
import { Link } from 'react-router-dom';
function SingleHeading() {
    return (
        <Col xs xm={4} xl={2} id="single-card">
            <Link to="/product_details">
                <div className="cards-center">
                    Flowers
                </div>
            </Link>
        </Col >

    )
}

export default SingleHeading