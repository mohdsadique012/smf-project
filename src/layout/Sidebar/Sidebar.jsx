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
 console.log(addcart,"addcartaddcartaddcartaddcartaddcart")
const handleclick =(e)=>{
   flipcart(false);
}
   
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
  let product_get = JSON.parse(localStorage.getItem('product_data'));
  const [cart , setCart]= useState([])
  let auth = JSON.parse(localStorage.getItem('userdetail'));
  let data=JSON.stringify({
    product_detail:product_get,
    authantication:auth
  })
  
    useEffect(()=>{
      if(auth){
      fetch(`http://localhost:7600/add_cart?${data}`)
      .then(response=>{response.json()})
      .then(data=>{
        console.log(data,"...mmm.....")
  
      })
      .catch(error=>{
        console.log(error)
      })
    }
  },[])


  return (
    
    <div  className={drawerClasses} >
      <div className="wishlist-header">
        <i class="fa-regular fa-heart"></i>
        <h3>Wishlist</h3>
        <div onClick={()=>{handleclick()}} className="btn">
          <i className="fa fa-times"></i>
        </div>
      </div>

      
        {  product_get?.map((element)=>{
          console.log(element,"sidebarjumbroton")
     
          return(
         <Link to="/checkout_details">    
    <SidebarCart 
   
         datapass={element.product}
         value ={element.product}
         />
         
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
