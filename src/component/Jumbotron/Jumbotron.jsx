import React, {useContext,useState } from "react";
import './Jumbotron.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {AppContext} from "../../context/productcontext"

function Jumbotron({ back_img }) {
    let context_Data= useContext(AppContext);
   const cities=context_Data.city
   console.log(cities,"ciuytrewq")
    // const styles = {
    //     background: back_img
    // }
    const [selectedValue, setSelectedValue] = useState(cities);
    const handlechange = (event) => {
        console.log(event,"kkkkk")
        const value = event.target?.value;
        let filterdata = cities.filter(el=>{
           return    el.city==value
        })
        setSelectedValue(filterdata);
       
      }
      console.log(selectedValue,"selectedValue")
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
                                <select name="" id="" className="form-control" onChange={handlechange}>
                                <option value='all'>select by cities</option>
                                {cities.map(city => (
                                    <option key={city.city_id} value={city.city}>{city?.city}</option>
                                  ))}  
                                </select>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-sm-1">
                                <h5>
                                PINCODE
                                </h5>
                            </div>
                            <div className="col-sm-3">
                                <select name="" id="" className="form-control">
                                <option value='all'>select by pincode</option>
                                {selectedValue.map(city => (
                                    
                                    <option key={city.pincode_id} value="select pincode">{city?.pincode}</option>
                                  ))}
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