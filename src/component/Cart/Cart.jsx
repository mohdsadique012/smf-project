import React from "react";
import { Row, Col } from "react-bootstrap";
import Footer from "../../layout/Footer";
import SubFooter from "../../layout/Sub_Footer";
import "./Cart.css";
import { Link } from "react-router-dom";
function Cart({ cartCount }) {
  const arrCount = 0;

  
  return (
    <>
      <div className="container cart-border" style={{marginBottom: 32}}>
        <div className="row heading">
          <div className="col-sm-6">
            <h5>Product In Cart</h5>
          </div>
          <div className="col-sm-2">
            <h5>Qty.</h5>
          </div>
          <div className="col-sm-3">
            <h5>Delivery Options</h5>
          </div>
          <div className="col-sm-1">
            <h5>Subtotal</h5>
          </div>
        </div>
        {console.log(cartCount)}
        {cartCount.map((el, key) => (
          <div className="row cart-detial">
            <div className="cart-payment-detial">
              <div className="col-sm-2 cart-img">
                <img
                  src="https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/plants_10aug.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-4">
                <p>Frosty Chocolate Cake (Eggless) (Half Kg)</p>
                <p>Rs 595</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="">-</label>
                <input type="number" />
                <label htmlFor="">+</label>
              </div>
              <div className="col-sm-2">
                <p>
                  Standard Delivery (Free) on 01-Aug-2022 Between 08:00
                  hrs-15:00 hrs at pincode 125050
                </p>
              </div>
              <div className="col-sm-2 text-right">
                <p style={{ textAlign: "right" }}>Subtotal: Rs 595</p>
              </div>
            </div>
            <div className="cart-payment-detial">
              <div className="col-sm-2 cart-img">
                <img
                  src="https://www.fnp.com/images/pr/x/v20210116020156/standing-rajasthani-couple-with-rose-figurine_1.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-4">
                <p>Standing Rajasthani Couple With Rose Figurine</p>
                <p>Rs 899</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="">-</label>
                <input type="number" />
                <label htmlFor="">+</label>
              </div>
              <div className="col-sm-2">
                <p>
                  Standard Delivery (Free) on 01-Aug-2022 Between 08:00
                  hrs-15:00 hrs at pincode 125050
                </p>
              </div>
              <div className="col-sm-2 text-right">
                <p style={{ textAlign: "right" }}>Subtotal: Rs 899</p>
              </div>
            </div>
            <div className="cart-payment-detial">
              <div className="col-sm-2 cart-img">
                <img
                  src="https://www.fnp.com/images/pr/l/v20221005123410/palm-angel-figurine_3.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-4">
                <p>Palm Angel Figurine</p>
                <p>Rs 449</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="">-</label>
                <input type="number" />
                <label htmlFor="">+</label>
              </div>
              <div className="col-sm-2">
                <p>
                  Standard Delivery (Free) on 01-Aug-2022 Between 08:00
                  hrs-15:00 hrs at pincode 125050
                </p>
              </div>
              <div className="col-sm-2 text-right">
                <p style={{ textAlign: "right" }}>Subtotal: Rs 449</p>
              </div>
            </div>
            <div className="cart-payment-detial">
              <div className="col-sm-2 cart-img">
                <img
                  src="https://www.fnp.com/images/pr/x/v20220706181730/charming-love-roses-arrangement_1.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-4">
                <p>Charming Love Roses Arrangement</p>
                <p>Rs 849</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="">-</label>
                <input type="number" />
                <label htmlFor="">+</label>
              </div>
              <div className="col-sm-2">
                <p>
                  Standard Delivery (Free) on 01-Aug-2022 Between 08:00
                  hrs-15:00 hrs at pincode 125050
                </p>
              </div>
              <div className="col-sm-2 text-right">
                <p style={{ textAlign: "right" }}>Subtotal: Rs 849</p>
              </div>
            </div>
            <div className="col-12 text-right total-amount">
              <h5 className="total_pay margin">
                Total Payable Amount : Rs{" "}
                <span className="final_Amount">{arrCount}</span>
              </h5>
            </div>
          </div>
        ))}

        <div className="cart-footer">
          <div className="row">
            <div className="cart-footer-content">
              <div className="col-sm-6" style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "bold" }}>
                  TOTAL AMOUNT PAYABLE:
                </h4>
                
                  <h3>CHECKOUT</h3>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {  <SubFooter /> } */}
      {<Footer />  }
    </>
  );
}

export default Cart;
