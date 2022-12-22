import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    // <div className="loginPage">
    <>
      <div className="bg-image"></div>
      <Row id="inner-page">
        <Col sm={6}>
          <div className="center-div">
            <div className="col gr-back position-relative">
              <span className="cusBtn">1</span>
              <h4 style={{ fontWeight: 700 }}>LOGIN/REGISTER</h4>
              <input
                type="text"
                placeholder="EMAIL ID OR MOBILE NUMBER"
                className="control-form"
              />
             <Link to="/Admin/Layout/user_profile">
              <button className="btn btn-danger"> Continue</button>
             </Link>
            </div>
            <div className="col">Or Login Using</div>

            <div className="col">
              <div className="btn btn-info fb">
                <i class="fa-brands fa-facebook-f"></i>Facebook
              </div>
              <div className="btn btn-info google">+ Google</div>
            </div>

            <div className="col position-relative">
              <span className="cusBtn">2</span>

              <a href="#action5" className="gr-back p-1">
                Order & Delivery Details
              </a>
            </div>
            <div className="col position-relative">
              <span className="cusBtn">3</span>

              <a href="#action6" className="gr-back p-1">
                Payment Options
              </a>
            </div>
          </div>
        </Col>
        <Col sm={6} className="rightPage position-relative">
          <div className="imgBox">
            <img src="logo/SendMyFeelings-01.png" alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
