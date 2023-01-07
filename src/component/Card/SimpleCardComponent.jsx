import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardComponent.css';
import { Link } from 'react-router-dom';
export default function SimpleCardComponent({ cardClass, source, showContent, value, cardContent, custContentImg, custContent, checker }) {
    return (
        <>
            <div className="card justify-content-center bg-transparent border-0 text-center">
                <img className="card-img-top  card-custom" style={{padding: "10px"}} src={source} alt="Card image cap" />
                  <Link to="/single_product_category">
                {custContentImg && checker == 0 ? <div className="customCenterContent"><h2>{custContent}</h2></div> : ''}
                </Link>  
                {
                    showContent ?
                        <>
                            {checker != 0 ? <Card.Body>
                                <Card.Title>{cardContent}</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body> : ''}
                        </>
                        :
                        <>
                            {checker != 0 ? <div className='cardContent-new'>
                              <span>  {cardContent}</span>  
                              
                            </div> : ''}
                        </>
                }

                

            </div>

        </>
    )
}
