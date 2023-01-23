import React,{useReducer, useState} from 'react'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './HomeMenuCard.css';
import  {Appcontext} from "../../context/productcontext"

import AllProducts from "../../reducer/productReducer"
import { NavLink } from 'react-bootstrap';


function HomeMenuCard({ menus,dataroute }) {

//   const intialState = {
//     is_loading: false,
//     is_error: false,
//     products: [],
//     featured_products: [],
//     is_single_loading: false,
//     is_single_error: false,
//     single_product: [],
//     route_data:[]

// };

//   const [state, dispatch] = useReducer(AllProducts, intialState);

// function route(data){
//   dispatch({type: "Transfer-Data-through-route", payload: data})
// }


 console.log(menus,"sarfextrtx222222222222")

  if (menus !== undefined && menus !== "") {
    return (
      menus.slice(0, 7).map((el, key) => (
        
        <>

          <Col className={"homemenu-main "}  key={key} xs xm={4} xl={1}>
            <Link to={`single_product_category/${el.slug}`}>
            <div className="menu-upper-icon menu" >
              <img src={"https://admin.thesoftwarecompany.in" + el.image} alt="" />
            </div>
            <div className=" background-colour menu-bottom-title">
              <small>{el.name}</small>
            </div>
            </Link>
          </Col>
        </>
      ))
    )
  } else {
    return (
      <h1>Dtrong:</h1>
    )
  }
}

export default HomeMenuCard