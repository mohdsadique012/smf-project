import React from 'react';
import './ProductDetails.css';
import { Col } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsWhatsapp, BsGoogle } from "react-icons/bs";

export default function ProductCarousel() {
    return (
        <Col className='d-flex'>
            <>
                <div className='main_box w-80'>
                    <div class="card">
                        <img className="card-img-top" src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="Card image cap" />
                    </div>
                    <div className='d-flex flex-row bottomimages'>
                        <div className='d-inline'>
                            <img className='img-thumbnail' src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                        </div>
                        <div className='d-inline'>
                            <img className='img-thumbnail' src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                        </div>
                        <div className='d-inline'>
                            <img className='img-thumbnail rounded' src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="" />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <label htmlFor="">Share :</label>
                        </div>
                        <div>
                            <label htmlFor=""> <BsFacebook></BsFacebook></label>
                        </div>
                        <div>
                            <label htmlFor=""> <BsInstagram></BsInstagram></label>
                        </div>
                        <div>
                            <label htmlFor=""> <BsWhatsapp></BsWhatsapp></label>
                        </div>
                        <div>
                            <label htmlFor=""> <BsGoogle></BsGoogle></label>
                        </div>
                    </div>
                </div>
            </>
        </Col>
    )
}

