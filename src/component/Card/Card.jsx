import React from "react";
// import { Row } from 'react-bootstrap';
import "./Card.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import data from "./ProductCategoryData"
export default function Card(props) {
  let newClassName = `color_bg ${props.alt}`;
  let bg_img = `url(${props.images})`;
  console.log( bg_img," bg_img")
  let {
    title,
    old_price,
    newPrice,
    rupess,
    exp_date,
    discount,
    rating,
    star,
    total_rating,
    delivery,
    slug,
  } = props;

  return (
    
    <div className="product-card card col-lg-3">
      <Link to="/product_details">
        <div className="product-card-warpper">
          <div className={newClassName}></div>
          <Link to={`product_details/${slug}`}>
          <div className="card_img" style={{ backgroundImage: bg_img }}></div>
          </Link>
          <div className="heart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
            </svg>
          </div>
          <div className="cardInfo">
            <h5>{title}</h5>
            <p className="date_">{exp_date}</p>
            <div className="action">
              <div className="priceGroup">
                <p className="price newPrice">
                  {rupess}
                  {newPrice}
                </p>
                <p className="price old_price">
                  {rupess}
                  {old_price}
                </p>
                <p className="discount">{discount}</p>
              </div>
              <div className="customerDetail">
                <div className="userRating">
                  <p className="rating">{rating}</p>
                  <p className="star">{star}</p>
                  <p className="total_rating">{total_rating}</p>
                </div>
                {/* <div className="productDelivery"> */}
                <p className="delivery">{delivery}</p>
                {/* </div> */}
              </div>
              {/* <div className="cart">
                            <svg className="outCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <path d="M2 6h10l10 40h32l8-24H16"></path>
                                <circle cx="23" cy="54" r="4"></circle>
                                <circle cx="49" cy="54" r="4"></circle>
                            </svg>
                        </div> */}
            </div>
          </div>
        </div>
      </Link>
    </div>

  );
}
