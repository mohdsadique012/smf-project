import React from "react";
import "./Checkout.css";
import { Col } from "react-bootstrap";

export default function CheckoutFirst() {
  return (
    <>
      <Col className="col-md-8 col-lg-8">
        <div
          className="left-main d-flex flex-column"
          style={{ fontWeight: 700 }}
        >
          <div className="d-flex justify-content-between bg-secondary-light p-2">
            <div className="align-self-center text-white">
              <p className="bg-dark p-1 rounded">1</p>
            </div>
            <div className="align-self-center">
              <p htmlFor="">
                <strong>JOHN DOE</strong>
              </p>
            </div>
            <div className="align-self-center">
              <p htmlFor="">JOHNDOE@EXAMPLE.COM</p>
            </div>
          </div>

          <div className="d-flex  bg-secondary-light my-3 p-2 flex-column">
            <div className="d-flex">
              <div className="text-white ">
                <p className="bg-dark p-1 rounded">2</p>
              </div>
              <div className="">
                <p htmlFor="">
                  <h4 style={{fontWeight:700, marginLeft:32}}>Order And Delivery Details</h4>
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-between p-2">
              <div className="d-flex flex-column align-self-center m-2">
                <button className="btn bg-dark text-white m-1">Gift 1</button>
                <img
                  className="img-thumbnail-custom rounded"
                  src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14"
                  alt="photo"
                />
              </div>
              <div className="align-self-center m-2">
                <p htmlFor="">Frosty Chocolate Cake</p>
                <p htmlFor="">Rs 595 * 1Round 1/2 KG</p>
                <p htmlFor="">Eggless</p>
                <p htmlFor="">Chocolate Flavour</p>
              </div>
              <div className="align-self-center">
                <p htmlFor="">Delivery ON</p>
                <p htmlFor="">
                  <strong>Sat, 7 Aug, 2022</strong>
                </p>
                <p htmlFor="">Standard Delivery</p>
                <p htmlFor=""> 08:00 - 15:00 hrs</p>
              </div>
              <div className="align-self-center btn bg-dark text-white">
                change
              </div>
            </div>
          </div>
          <div className="d-flex flex-column w-25 m-1">
            <p htmlFor="">Message on Cake</p>
            <input type="text" name="" id="" />
          </div>
        </div>
      </Col>
      <Col>
        <div className="right-main d-flex flex-column bg-secondary-light p-3">
          <div className="">
            <div>
              <p htmlFor="">
                <strong>Price Details</strong>
              </p>
            </div>
          </div>
          <div className="">
            <div className="d-flex justify-content-between" style={{marginBottom: 17}}>
              <div htmlFor="">Total Product Price </div>
              <div htmlFor="">Rs 595</div>
            </div>
          </div>
          <div className="">
            <div className="d-flex justify-content-between" style={{marginBottom: 17}}>
              <div htmlFor="">Shipping</div>
              <div htmlFor="">Rs 0</div>
            </div>
          </div>
          <div className="">
            <div className="d-flex justify-content-between" style={{marginBottom: 17}}>
              <div htmlFor="">Convenience Charge</div>
              <div htmlFor="">Rs 25</div>
            </div>
          </div>
          <div className="mt-3">
            <strong>
              <div className="d-flex justify-content-between">
                <div htmlFor="">TOTAL</div>
                <div htmlFor="">Rs 620</div>
              </div>
            </strong>
          </div>
          <div className="mt-3">
            <div className="d-flex justify-content-around">
              <a href="">Have a Discount Coupon?</a>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
