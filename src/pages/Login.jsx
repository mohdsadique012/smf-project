import React,{useState} from "react";
import { Row, Col } from "react-bootstrap";
import "./Login.css";
import  Axios  from 'axios';
import { Link } from "react-router-dom";
function Login() {
  const [boxx, setBoxx]=useState(false)
  const [emaill , setEmaill]=useState("")
  const [name , setNamee]=useState("")
  const [mobile , setMobile]=useState("")
  const [Password , setPassword]=useState("")
const handlechangeName= (e)=>{
  e.preventDefault();
  setNamee(e.target.value)
}
const handlechangeemail= (e)=>{
  e.preventDefault();
  setEmaill(e.target.value)
}
const handlechangemobile= (e)=>{
  e.preventDefault();
  setMobile(e.target.value)
}
const handlechangepassword= (e)=>{
  e.preventDefault();
  setPassword(e.target.value)
}
const data = {
  name: name,
  email: emaill,
  password:Password,
  phone:mobile
};

const handleclickregister=(e)=>{
  e.preventDefault();
  Axios.post('https://admin.thesoftwarecompany.in/register')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  
}

console.log(boxx,"boxx")
  return (
    // <div className="loginPage">
    <>
      <div className="bg-image"></div>
      <Row id="inner-page">
        <Col sm={6}>
          {boxx?<div className="center-div">
          <div className="col gr-back position-relative">
            
            <h4 style={{ fontWeight: 700 }}> <span onClick={()=>{setBoxx(false)}}style={{ fontWeight: 700 }}>LOGIN/</span><span style={{ fontWeight: 700 }}>REGISTER</span></h4>
            <input
            type="text"
            placeholder="ENTER YOUR NAME"
            className="control-form"
            onChange={(e)=>{handlechangeName(e)}}
             />
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL-ID "
              className="control-form"
              onChange={(e)=>{handlechangeemail(e)}}
               />
              <input
              type="text"
              placeholder="ENTER MOBILE NUMBER"
              className="control-form"
              onChange={(e)=>{handlechangemobile(e)}}
               />
              <input
              type="text"
              placeholder="ENTER PASSWORD"
              className="control-form"
              onChange={(e)=>{handlechangepassword(e)}}
              />
          
        
            <button  onClick={(e)=>handleclickregister(e)} className="btn btn-danger"> REGISTER</button>
        
          </div>
          
         
           


        
        
        </div> 
              
            :( <div className="center-div">
            <div className="col gr-back position-relative">
              <span className="cusBtn">1</span>
              <h4 style={{ fontWeight: 700 }}> <span style={{ fontWeight: 700 }}>LOGIN/</span><span onClick={()=>{setBoxx(true)}} style={{ fontWeight: 700 }}>REGISTER</span></h4>
              <input
                type="text"
                placeholder="EMAIL ID OR MOBILE NUMBER"
                className="control-form"
              />
              <input
              type="text"
              placeholder="ENTER PASSWORD"
              className="control-form"
            />
             <Link to="/Admin/Layout/user_profile">
              <button className="btn btn-danger"> Continue</button>
             </Link>
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
          </div> ) }
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
