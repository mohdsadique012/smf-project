import React ,{useState,useEffect,useContext} from "react";
import SubFooter from "../layout/Sub_Footer";
import Footer from "../layout/Footer";
import Card from "../component/Card/Card";
import Divider from "../component/Divider/Divider";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import "./singleproduct.css"
import { useParams } from 'react-router-dom';
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Row,
  Container,
  Button,
  Col,
} from "react-bootstrap";
import { AppContext } from "../context/productcontext";
import { useProductGlobal } from "../context/productcontext";

const CardFirst = [
  { image: "official/9_Categories/1.jpg", title: "Flowers & Cakes" },
  { image: "official/9_Categories/2.png", title: "Personlized Gift" },
  { image: "official/9_Categories/3.png", title: "Find the Perfect Gift" },
  { image: "official/9_Categories/4.png", title: "Birthday Gift" },
  { image: "official/9_Categories/5.png", title: "Annivesary Gift" },
  { image: "official/9_Categories/6.png", title: "Home and Living" },
  { image: "official/9_Categories/7.png", title: "Gifts for Men" },
  { image: "official/9_Categories/8.png", title: "Gifts for Women" },
  { image: "official/9_Categories/9.png", title: "Gifts for Kids" },
];

//https://admin.thesoftwarecompany.in/product_list'
const Product_category = () => {
const { getProductListByCategory, product_lists } = useProductGlobal();
const {product_list} = useParams();  
let Data= useContext(AppContext)







const AllProductApi = 'https://admin.thesoftwarecompany.in/product_lists';
  const mySelection = {
    btn: {
      color: "black",
      background: "rgb(244 244 244)",
      border: "navajowhite",
      boxShadow: "rgb(133 133 133) 5px 5px 6px",
      marginLeft: "16px",
      fontWeight: 700,
    },
    row: {
      height: "80px",
      boxShadow: "rgb(133 133 133) 0px 4px 20px",
      //   marginBottom: "24px",
      paddingLeft: "40px",
    },
    filterbtn: {
      boxShadow: "4px 4px 14px grey",
      padding: "12px 40px",
      fontWeight: "700",
      marginLeft: "16px",
    },
  };
  console.log(product_list,"product_list5555555")


useEffect(() => {
  getProductListByCategory(`${AllProductApi}?categoryId=${product_list}`);   
  // getProductListByCategory(AllProductApi);

},[]);

let singledata =Data.product_lists
console.log(  singledata ,"56464654644",Data,"context_Data125356435")
const [singleproductsss ,setSingleproducts] = useState('')
const [subcategorys ,setSubcategory] = useState('')


useEffect(() => {
  setSingleproducts(singledata)
},[singledata]);

console.log(singleproductsss ,"singleproductssssingleproductssssingleproductsss  ")

let uniquesubcategorykey = [
  ...new Map(singledata.map((item)=>[item["subcategory_name"],item])).values()
     ];
     console.log(uniquesubcategorykey,"uniquesubcategorykey")
    
  const handleClick =(e)=>{
       let filter_data = singledata.filter((el)=>{
                return subcategory_name==e
               
       })       
    
       setSingleproducts(filter_data)
  }
  //hhhhhhhh
  let uniqueFilter = [
    ...new Map(singledata.map((item)=>[item["filtertype"],item])).values()
       ];
       console.log(uniquesubcategorykey,"uniquesubcategorykey")
      
    const handleClickFilter =(e)=>{
         let filter_data = singledata.filter((el)=>{
                  return el.filtertype==e
                 
         })       
      
         setSingleproducts(filter_data)
    }
  

//console.log({"Type":typeof product_list, "product list": product_list} , "fddddddddddddddddddddddffffffffff------------------")

  const settings = { 
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
  };
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  return (
    <>
      {/* <div className="container"> */}

     
      <div
       
      >
        
      
      </div>
      <Row>
        <div
          className="highlight-title"
          style={{ fontWeight: 600, margin: 24 }}
        >
          <a href="/">
            Home <i class="fa-solid fa-chevron-right"></i>
          </a>
          <a href="">
            Cakes <i class="fa-solid fa-chevron-right"></i>
          </a>
          <a href="">
            Birthday Cakes <i class="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </Row>
      <Container fluid>
        <Row>
          <div
            className="category-title d-flex align-items-center"
            style={{ marginBottom: 14 }}
          >
            <h3 style={{ marginRight: 16 }}>Birthday Cakes</h3>
            <span>(251 products)</span>
          </div>
        </Row>
        <div className="flex-11">

         <div className="subcategory">
           <p className="bold">subcategory</p>
         </div>
          <div className="sub-category-button"> 
        
           {
            uniquesubcategorykey ?
            uniquesubcategorykey.map(el =>{
              
  
                return <button onClick={()=>handleClick(el.name)} id="sub-category-butt">{el.name}</button>
             })
             : ''
           }
           
          
          </div>
          </div>

            
     
       
        <Row>
          <div className="category-filter d-flex align-items-center mb-5">
            <h5>Quick Filter</h5>
            <div className="filter-btn">
            {
              uniqueFilter ?
              uniqueFilter.map(el =>{
               
   
                 return <Button onClick={()=>handleClickFilter(el.filtertype)} variant="" style={mySelection.filterbtn}> {el.filtertype}</Button>
              })
              : ''
            }
            
              
             
            </div>
          </div>
        </Row>
      </Container>
      <Container fluid>
        <div className="row">
        
        {
          singleproductsss ? singleproductsss.map(el =>{
          return   <Card
             title={el.carins}
             images={"https://admin.thesoftwarecompany.in "+el.image}
             old_price={el.regularprice}
             newPrice={el.salesprice}
             rupess="&#x20B9;"
             discount="14% OFF"
             alt="blackpanter"
             rating="4.3"
             star="&#9733;"
             total_rating="(242)"
             delivery={el.deliveryinfo}
           />
          })
          : ''
        }

        
        </div>
        <div className="load-more my-5">
          <button>Show More Products (219)</button>
        </div>
        <h5 className="text-center">
          Related Collection | Order Cake Online | Anniversary Cakes | Photo
          Cake for Birthday | Flower with Cakes | Birthday Chocolates | Eggless
          Birthday Cakes
        </h5>
        <Divider content="Customer Stories and Reviews" />
        <div className="row customer-cards">
          <Slider {...settings}>
            <div className="col-sm-4">
              <div className="customer-card-section">
                <div className="left-card">
                  <div className="card-star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <div className="left-card-img">
                    <img src="official/Combos/1.png" alt="" />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Priya a</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="customer-card-section">
                <div className="left-card">
                  <div className="card-star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <div className="left-card-img">
                    <img src="official/Combos/1.png" alt="" />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Priya a</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="customer-card-section">
                <div className="left-card">
                  <div className="card-star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <div className="left-card-img">
                    <img src="official/Combos/1.png" alt="" />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Priya a</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="customer-card-section">
                <div className="left-card">
                  <div className="card-star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <div className="left-card-img">
                    <img src="official/Combos/1.png" alt="" />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Priya a</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="customer-card-section">
                <div className="left-card">
                  <div className="card-star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <div className="left-card-img">
                    <img src="official/Combos/1.png" alt="" />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Priya a</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="customer-card-section">
                <div className="left-card">
                  <div className="card-star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <div className="left-card-img">
                    <img src="official/Combos/1.png" alt="" />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Priya a</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="customer-card-section">
                <div className="left-card">
                  <div className="card-star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <div className="left-card-img">
                    <img src="official/Combos/1.png" alt="" />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Priya a</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <h6 className={"customer_cards_rating_heading"}>
            (Rated 4.6/5 based on 22497 ratings)
          </h6>
        </div>
      </Container>

      <SubFooter />
      <Footer />;
      
    </>
  );
};

export default Product_category;
