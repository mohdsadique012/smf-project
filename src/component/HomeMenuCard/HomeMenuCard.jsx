import React from 'react'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './HomeMenuCard.css';

function HomeMenuCard({ menus }) {

  menus.map((el)=>{
    console.log(el,"el")
  })
  if (menus !== undefined && menus !== "") {
    return (
      menus.slice(0, 7).map((el, key) => (
        
        <>
          <Col className={"homemenu-main"} key={key} xs xm={4} xl={1}>
            <Link to="/single_product_category">
            <div className="menu-upper-icon">
              <img src={'http://admin.thesoftwarecompany.in/' + el.image} alt="" />
            </div>
            <div className="menu-bottom-title">
              <small>{el.category}</small>
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