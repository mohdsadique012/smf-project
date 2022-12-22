import React from 'react';
import Card from 'react-bootstrap/Card';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './CardComponent.css';
import { Link } from 'react-router-dom';
export default function BestSelling({ cardClass, source, showContent, value, cardContent, custContentImg, custContent, checker }) {
    return (
        <Card id={cardClass}>
            <Link to="/product_details">

                <>
                    <Card.Img variant="top" src={source} />
                    {custContentImg && checker == 0 ? <div className="customCenterContent"><h2>{custContent}</h2></div> : ''}
                </>
                {
                    showContent ?
                        <>
                            {checker != 0 ? <Card.Body>
                                <Card.Title>{cardContent}</Card.Title>
                                <p class="star-rating-tranding">
                                    
                                <span className="rating-box">
                                5 <AiOutlineStar />
                                </span>
                                <small>5 Reviews</small>
                                </p>
                                <Card.Text className={['trendingText']}>{value} Rs</Card.Text>
                            </Card.Body> : ''}
                        </>
                        :
                        <>
                            {checker != 0 ? <div className='cardContent'>
                                {cardContent}
                            </div> : ''}
                        </>
                }
            </Link>
            {/* <button className='btn btn-danger' onClick={addCart}>+</button> */}
        </Card>
    )
}
