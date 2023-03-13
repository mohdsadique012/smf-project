import React, {useContext,useState ,useEffect} from "react";
import './Jumbotron.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {AppContext,useProductGlobal} from "../../context/productcontext"

function Jumbotron({ back_img }) {
    const { productBypincodeCity } = useProductGlobal();
    let context_Data= useContext(AppContext);
   const cities=context_Data.city
   console.log(cities,"ciuytrewq")
    // const styles = {
    //     background: back_img
    // }
    const [selectedValue, setSelectedValue] = useState(cities);
    const [slect ,setSlect]= useState("")
    const [value ,setValuee]=useState("jaipur")
    const HandleSelects = (event) => {
        console.log(event,"kkkkk")
        setSlect( event.target.value )
        const value = event.target?.value;
        let filterdata = cities.filter(el=>{
           return    el.city==value
        })
        setSelectedValue(filterdata);
       
      }
    

   
 

    
    const HandleButtonClicks=()=>{
     
            setValuee(slect)
        }
      useEffect(() => {
        productBypincodeCity(value)   
       //getProductListBysubCategory(AllProductApi);
     
     },[value]);


     console.log(slect,"cityyyyctyyyy")
     console.log(value,"valuevalue")
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
                                <select name="" id="" className="form-control" onChange={(el)=>HandleSelects(el)}>
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
                                <Button onClick={()=>HandleButtonClicks()} variant="danger" className={"jumbotronBtn"}>FIND GIFTS</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div >
    )
}

export default Jumbotron