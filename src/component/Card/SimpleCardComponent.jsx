import React from 'react';
import Card from 'react-bootstrap/Card';
import "./simplecardcomponent.css"
import Button from 'react-bootstrap/Button';
import './CardComponent.css';
import { Link } from 'react-router-dom';
export default function SimpleCardComponent({ cardClass,slug2, source, showContent, slug, value, cardContent, custContentImg, custContent, checker }) {
  
    console.log(cardContent,"222222222222")
    // {custContentImg && checker == 0 ? <div className="customCenterContent"><h2>{custContent}</h2></div> : ''}
    return (
        <>
            <div className="card justify-content-center bg-transparent border-0 text-center ">
            <Link to={`single_product_bysubcategory/${slug}`}>
                <img className="card-img-top hight-size card-custom" style={{padding: "10px"}} src={source} alt="Card image cap" />
                  </Link>
                  <Link to={`single_product_category/${slug2}`}>
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
