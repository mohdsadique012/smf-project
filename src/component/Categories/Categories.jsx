import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './Categories.css';
import { GiFlowerPot } from 'react-icons/gi';
import { Link } from 'react-router-dom';
function Categories() {
    return (
        <Col xs xm={4} xl={3}>
            <Row>
                <Col xs={3}>
                    <Link to="/product_details">
                        <div className="left-cards">
                            <GiFlowerPot />
                        </div>
                    </Link>
                </Col>
                <Col xs={9}>
                    <Link to="/product_details">
                        <div className="right-cards">
                            Flowers
                        </div>
                    </Link>
                </Col>
            </Row >
        </Col >
    )
}

export default Categories