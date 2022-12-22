import React from 'react'
import { Col, Row } from 'react-bootstrap';

function SidebarCart({datapass}) {
  console.log(datapass,'chljao')
//  const item = props.posts.map((Addcart)=>{
//     <div className="cart-image">
//     <img src={addcart.name} alt="" />
//   </div>
//   })

  
    return (

        <Row id="Cart-Div">
            <Col xs sm={4} xl={4}>
                <div className="cart-image">
                    <img src={datapass.name} alt="" />
                </div>
              
            </Col>
            <Col xs sm={8} xl={8}>
                <h5>{datapass.detail}</h5>
                <h6>Rs{datapass.rate}</h6>
            </Col>
        </Row>
    )

}

export default SidebarCart