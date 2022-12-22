import React from 'react';
import './ProductDetails.css';
import { Col } from 'react-bootstrap';
import { BsFillStarFill, BsFillArrowDownCircleFill, BsFillCartPlusFill, BsFillLightningFill } from "react-icons/bs";
export default function ProductPricing() {
    return (
        <Col className='d-flex'>
            <>
                <div className='main_box d-flex flex-column '>
                    <div className="card border-0 d-flex flex-column">
                        <div><h2>RED ROSE SURPRISE</h2></div>
                        <div>
                            <div className='text-warning d-inline'>
                                <BsFillStarFill />
                            </div>
                            <div className='text-warning d-inline'>
                                <BsFillStarFill />
                            </div>
                            <div className='text-warning d-inline'>
                                <BsFillStarFill />
                            </div>
                            <div className='text-warning d-inline'>
                                <BsFillStarFill />
                            </div>
                            <div className='d-inline'>
                                <BsFillStarFill />
                            </div>
                            <div className='py-2'>
                                4 stars | 451 Ratings
                            </div>
                        </div>
                    </div>
                    <div className='border-0'>
                        <strong><label className='display-1  font-weight-bold'>Rs 499</label></strong>
                    </div>
                    <div className='d-flex border-0'>
                        <BsFillArrowDownCircleFill /> <a href="#!" className='text-decoration-none'> View More Details</a>
                    </div>
                    <div className='my-2'>
                        <small className='text-danger text-small'>Enter the pincode For Hassle Free Delivery</small>
                    </div>
                    <div className='d-flex my-2'>
                        <div className='d-inline'><input type="text" name="" id="" placeholder='Enter Pincode or Location' /></div>
                        <div className='d-inline px-4'><input type="datetime-local" name="" id="" /></div>
                    </div>

                    <div className='d-flex'>
                        <div className='d-inline'><button className='btn btn-secondary'><BsFillCartPlusFill></BsFillCartPlusFill> Add To Cart</button></div>
                        <div className='d-inline px-4'><button className='btn btn-danger buy-now-cart'><BsFillLightningFill></BsFillLightningFill> Buy Now</button></div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-evenly'>
                        <div className="d-inline">
                            <div className='d-flex'>
                                <img className='img-thumbnail rounded custom-image' src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className=''><label htmlFor="">Small </label></div>
                                <div className=' text-danger'> Rs. 499/-</div>
                            </div>
                        </div>
                        <div className="d-inline">
                            <div className='d-flex'>
                                <img className='img-thumbnail rounded custom-image' src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className=''><label htmlFor="">Medium </label></div>
                                <div className=' text-danger'> Rs. 499/-</div>
                            </div>
                        </div>
                        <div className="d-inline">
                            <div className='d-flex'>
                                <img className='img-thumbnail rounded custom-image' src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className=''><label htmlFor="">Bigger </label></div>
                                <div className=' text-danger'> Rs. 499/-</div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        </Col>
    )
}
