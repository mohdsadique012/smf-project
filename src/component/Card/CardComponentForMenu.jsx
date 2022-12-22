import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import { GiCakeSlice } from "react-icons/gi";
import './CardComponentForMenu.css';
export default function CardComponent({ title, menuCards }) {
    return (
        <Card id={menuCards ? "menuCard" : ''}>
            <div className="upper-div">
                <GiCakeSlice /> <span className="head">{title}</span>
            </div>
            <div className="listing">
                <ul>
                    <li>Same Day Delivery</li>
                    <li>Same Day Delivery</li>
                    <li>Same Day Delivery</li>
                    <li>Same Day Delivery</li>
                    <li>Same Day Delivery</li>
                </ul>
            </div>
        </Card>
    )
}
