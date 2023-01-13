import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardComponent.css';
import { Link } from 'react-router-dom';
export default function CardComponent({ slug,cardClass, source, showContent, value, cardContent, custContentImg, custContent, checker }) {
      console.log(slug,"slug9999999999999999")
    
    return (
        <Card id={cardClass}>
            <Link to={`single_product_category/${slug}`}>

                <>
                    <Card.Img variant="top" src={source} />
                    {custContentImg && checker == 0 ? <div className="customCenterContent"><h2>{custContent}</h2></div> : ''}
                </>
                {
                    showContent ?
                        <>
                            {checker != 0 ? <Card.Body>
                                <Card.Title>{cardContent}</Card.Title>
                                <Card.Text>Rs {value}</Card.Text>
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
