import React from "react";
import "./Checkout.css";
import { Col } from "react-bootstrap";
import { BsFillEnvelopeFill, BsPencil } from "react-icons/bs";

export default function CheckoutSecond() {
  return (
    <>
      <Col className="col-md-8 col-lg-8 p-4">
        <div className="p-2">
          <h3>Add Delivery Address</h3>
        </div>
        <div className="d-flex flex-column bg-secondary-light p-5">
          <form action="">
            <p>Add New Address</p>
            <div class="row p-2">
              <div class="col">
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Pincode"
                />
              </div>
            </div>
            <div class="row p-2">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="* Recipients Address"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipients City"
                />
              </div>
            </div>
            <div class="row p-2">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Landmark"
                />
              </div>
              <div class="col">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="Home"
                  />
                  <p class="form-check-p" for="inlineRadio1">
                    Home
                  </p>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="Office"
                  />
                  <p class="form-check-p" for="inlineRadio2">
                    Office
                  </p>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="Other"
                  />
                  <p class="form-check-p" for="inlineRadio3">
                    Other
                  </p>
                </div>
              </div>
            </div>
            <div class="row p-2">
              <div class="col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="* Recipients Mobile"
                />
              </div>
              <div class="col-lg-6">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Recipients Email (Optional)"
                />
              </div>
            </div>
            <div class="row p-2">
              <div class="col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="* Recipients Alt Mobile"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-end mt-3">
              <div class="col-lg-6">
                <input
                  type="submit"
                  class="form-control bg-dark text-white"
                  value="Save And Deliver Here"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="d-flex flex-column p-4">
          <div>
            <a href="#action5">
              <BsFillEnvelopeFill className="text-danger m-2"></BsFillEnvelopeFill>{" "}
              Free Message Card
            </a>
          </div>
          <div>
            <a href="#action6">
              <BsPencil className="text-secondary m-2"></BsPencil> Edit
            </a>
          </div>
        </div>
        <hr className="" />
      </Col>
    </>
  );
}
