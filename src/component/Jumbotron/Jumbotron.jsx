import React from 'react'
import './Jumbotron.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Jumbotron({ back_img }) {
    // const styles = {
    //     background: back_img
    // }
    return (
        <div className='jumbotron'>
            <div className="overlay"></div>

            <img src={back_img} alt="" />

            <div className="search-area">
                <Container>
                    <Form>
                        <Row className={['jumbo-row']}>
                            <div className="jumbo-form">

                            </div>
                            <div className="col-sm-1">
                                <h5>DELIVERY <br /> CITY</h5>
                            </div>
                            <div className="col-sm-3">
                                <select name="" id="" className="form-control">
                                    <option>Select City</option>
                                    <option value="1">DELHI</option>
                                    <option value="2">BENGAL</option>
                                    <option value="3">COMIBATORE</option></select>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-sm-1">
                                <h5>
                                PINCODE
                                </h5>
                            </div>
                            <div className="col-sm-3">
                                <select name="" id="" className="form-control">
                                    <option>Select Pincode</option>
                                    <option value="1">147852</option>
                                    <option value="2">123654</option>
                                    <option value="3">963258</option>
                                </select>
                            </div>
                            <div className="col-1"></div>

                            <Col id="submit-btn" xs xm={2}>
                                <Button variant="danger" className={"jumbotronBtn"}>FIND GIFTS</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div >
    )
}

export default Jumbotron