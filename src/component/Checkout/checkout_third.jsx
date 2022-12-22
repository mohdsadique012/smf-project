import React from 'react';
import './Checkout.css';
import { Col } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsPencil } from "react-icons/bs";


export default function CheckoutThird() {
    return (
        <>
            <Col className='col-md-8 col-lg-8 p-4 '>
                <div className='d-flex flex-column p-5 bg-secondary-light'>
                    <form action="">
                        <label>Sender's Details </label> <small> Order related communication will be sent on these details</small>
                        <div class="row p-2">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Sender name" />
                            </div>
                            <div class="col">
                                <input type="email" class="form-control" placeholder="Sender Email" />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Sender Mobile" />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Sender City" />
                            </div>
                        </div>

                        <div className='border border-2 rounded p-2 m-2 text-center'>
                            <p>Contactless Delivery : our delivery agent will leave your package outside the door on a clean surface.</p>
                            <p>(Not applicable on digital products)</p>
                        </div>
                        <div>
                            <p>By continuing you agree to our T&C / Disclaimer</p>
                        </div>
                        <div>
                            <input type="submit" className='btn btn-dark' value="Proceed To Checkout" />
                        </div>
                    </form>

                </div>

                <hr className='' />

                <div className='m-3'>
                    <div className='d-flex justify-content-between p-2 '>
                        <div className='align-self-center'>
                            <p className='d-inline bg-dark p-1 rounded text-white m-2'> 3 </p>
                            <p className='d-inline m-2'> <strong> Payment Options</strong></p>
                        </div>

                    </div>
                </div>
            </Col >

        </>
    )
}
