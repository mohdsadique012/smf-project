import { map } from "jquery";
import React, { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import { BsDisplay } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import SidebarCart from "./SidebarCart";


function Sidebar({ addCart, show, cartCount,flipcart}  ) {



let [addcart,setAddcart]=useState([])

useEffect(()=>{
  setAddcart(...addcart,addCart);
},[addCart]);

// close cart
 
const handleclick =(e)=>{
   flipcart(false);
}
   
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
   
  return (
    
    <div  className={drawerClasses} >
      <div className="wishlist-header">
        <i class="fa-regular fa-heart"></i>
        <h3>Wishlist</h3>
        <div onClick={()=>{handleclick()}} className="btn">
          <i className="fa fa-times"></i>
        </div>
      </div>

      
        { addcart.map((element)=>{
          console.log(element)
     
          return(
         <Link to="/checkout_details">    
    <SidebarCart 
         datapass={element}
         value ={element} />
         </Link>
      
          )
         
      })}
    
    
      
    
     
      <Button className="primary d-block mx-auto p-1 w-75 mt-2">
        <a href="/Cart" style={{ color: "white" }}>
          Checkout
        </a>
      </Button>
      
    </div>
  );
}


export default Sidebar
