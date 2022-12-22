import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardComponent.css';
import { Link } from 'react-router-dom';
export default function SimpleCardComponent({ cardClass, source, showContent, value, cardContent, custContentImg, custContent, checker }) {
    return (
        <>
            <div class="card justify-content-center bg-transparent border-0 text-center">
                <img class="card-img-top  card-custom" src={source} alt="Card image cap" />
                  <Link to="/single_product_category">
                {custContentImg && checker == 0 ? <div className="customCenterContent"><h2>{custContent}</h2></div> : ''}
                </Link>  
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
                            {checker != 0 ? <div className='cardContent-new'>
                              <p>  {cardContent}</p>
                            </div> : ''}
                        </>
                }

                

            </div>

        </>
    )
}
