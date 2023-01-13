import React , {useState,useEffect} from "react";
import ProductCarousel from "../component/Product/ProductCarousel";
import ProductPricing from "../component/Product/ProductPricing";
import ProducAddOn from "../component/Product/ProducAddOn";
import { Col, Container, Row } from "react-bootstrap";
import SubFooter from "../layout/Sub_Footer";
import Footer from "../layout/Footer";
import BestSelling from "../component/Card/BestSelling";
import Slider from "react-slick";
import Divider from "../component/Divider/Divider";
import "./product_details.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const bestSelling = [
  { icon: "official/Best_Selling_Gifts/1.png", title: "Birthday Gift" },
  { icon: "official/Best_Selling_Gifts/2.png", title: "Annivesary Gift" },
  { icon: "official/Best_Selling_Gifts/3.png", title: "Flowers Gift" },
  { icon: "official/Best_Selling_Gifts/4.png", title: "Cakes Gift" },
  { icon: "official/Best_Selling_Gifts/1.png", title: "Birthday Gift" },
  { icon: "official/Best_Selling_Gifts/2.png", title: "Annivesary Gift" },
  { icon: "official/Best_Selling_Gifts/3.png", title: "Flowers Gift" },
  { icon: "official/Best_Selling_Gifts/4.png", title: "Cakes Gift" },
];

const settingsBestSelling = {
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
};

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

const settingVertical = {
  infinite: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  vertical: true,
};

function Home(props) {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])
  
  // useEffect({
  //     document.querySelector();
  // }, [])
  const [product,setProduct]= useState({name:"https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg",detail:"this one of the best product", rate:"633"})


  // console.log(props.data ,88888)
  const handleclickAdd = (e)=>{
    alert("Your product has been added in cart")
    // setProduct(product);
     props.dataAdd(product)
  }
  return (
    <>
      {/* <Row>
                    <>
                        <ProductCarousel></ProductCarousel>
                        <ProductPricing></ProductPricing>
                        <ProducAddOn></ProducAddOn>

                    </>
                </Row > */}

                <div className='product-detail-container detail-flex-row'>
             <div className='flower-container'>
                  <div className='Product-detail-flower detail-flex-column'>
                       <div className='flower-img-box'>
                            <img className='flower-img' src='https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                       </div>
                       <div className='small-img-container detail-flex-row'>
                            <div className='small-img-box'>
                                  <img className='small-img' src='https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                            </div>
                            <div className='small-img-box'>
                                 <img className='small-img' src='https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                            </div>
                            <div className='small-img-box'>
                                 <img className='small-img' src='https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                            </div>
                       </div>

                  </div>
                  <div className='product-detail-share-icon'>
                     <span className='detail-share'>Share : </span>
                     <span><i className="fa fa-facebook-official detail-icon-size facebook-color" aria-hidden="true"></i></span>
                     <span><i className="fa fa-instagram detail-icon-size insta-color" aria-hidden="true"></i></span>
                     <span><i className="fa fa-whatsapp detail-icon-size whatsap-color" aria-hidden="true"></i></span>
                     <span><i className="fa fa-google-plus detail-icon-size" aria-hidden="true"></i></span>
                  </div>
             </div>

             {/* product detail pricing container */}

              <div className='product-detail-pricing-container'>
                  <div className='detail-pricing'>
                      <p className='detail-redrose'>Red Rose Surprise</p><br/>
                      <p>
                       <span><i className="fa fa-star detail-star" aria-hidden="true"></i></span>
                       <span><i className="fa fa-star detail-star" aria-hidden="true"></i></span>
                       <span><i className="fa fa-star detail-star" aria-hidden="true"></i></span>
                       <span><i className="fa fa-star detail-star" aria-hidden="true"></i></span>
                       <span><i className="fa fa-star " aria-hidden="true"></i></span>
                       <span className='detail-rating'> 4 Star | 551 ratings</span>
                     </p>
                     <p>
                       <span className='detail-rs'>Rs</span>
                       <span className='detail-Rs'>499</span>
                       <p>
                       <span><i className="fa fa-arrow-down down-arrow" aria-hidden="true"></i></span>
                       <span className='detail-view'>View more details</span>
                       </p>
                    </p>
                   
                   <p className='detail-enter'>Enter correct pincode for hassle free delivery</p>

                  </div>
                  <div>
                       <input className='detail-input' type="number" placeholder=" Enter pincode or locaton   " />
                       <input  className='detail-input'  type="text" placeholder='select dilevery date'/>
                  </div>
                  <div className='detail-flex-row detail-button-box'>
                       <button onClick={handleclickAdd} className='detail-button detail-background-color-grey'>   <span><i className="fa fa-cart-plus detail-button-icon" aria-hidden="true"></i></span><span className='detail-button-name'>ADD TO CART</span></button>
                       <button className='detail-button detail-background-color-red'> <span><i className="fa fa-bandcamp detail-button-icon" aria-hidden="true"></i></span><span className='detail-button-name'>BUY NOW</span></button>
                  </div>
                  <div className='small-img-container detail-flex-row detail-margin'>
                            <div className='detail-lf'> 
                                <div className='small-img-box1'>
                                  <img className='small-img1' src='https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                                 
                                </div>
                                <div  className='detail-space detail-flex-row'>
                                  <span className='detail-color-rate'>small  </span> 
                                  <span className='detail-color-rates'> Rs. 699</span> 
                                </div>
                            </div>
                            <div className='detail-lf'>
                              <div className='small-img-box1'>
                                 <img className='small-img1' src='https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                                
                              </div>
                              <div  className='detail-space detail-flex-row'>
                                  <span className='detail-color-rate'>medim  </span> 
                                  <span className='detail-color-rates'> Rs. 699</span> 
                                </div>
                            </div>
                            <div className='detail-lf'>
                               <div className='small-img-box1'>
                                 <img className='small-img1' src='https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                               </div>
                               <div  className='detail-space detail-flex-row'>
                                  <span className='detail-color-rate'>large  </span> 
                                  <span className='detail-color-rates'> Rs. 699</span> 
                                </div>
                            </div>

                         </div>

               </div>

                 {/* product detail another type container */}

               <div className='last-container'>
                  <div className='last-box-container'>
                      <p>ADD ONS</p>
                   <div className='detail-grid'>
                      <div className='background-black'>
                         <img  className='detail-small-igm' src= 'https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                         <p className='detail-two'>2 layer bamboo plan</p>
                         <h className='detail-space'>
                              <span className='rs-p'>Rs 799</span>
                              <span className='mrg-bt'><i className="fa fa-plus rspe" aria-hidden="true"></i></span>
                         </h>
                     </div>
                     <div className='background-black'>
                         <img  className='detail-small-igm' src= 'https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                         <p className='detail-two'>2 layer bamboo plan</p>
                         <h className='detail-space'>
                              <span className='rs-p'>Rs 799</span>
                              <span className='mrg-bt'><i className="fa fa-plus rspe" aria-hidden="true"></i></span>
                         </h>
                     </div>
                      <div className='background-black'>
                         <img  className='detail-small-igm' src= 'https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                         <p className='detail-two'>2 layer bamboo plan</p>
                         <h className='detail-space'>
                              <span className='rs-p'>Rs 799</span>
                              <span className='mrg-bt'><i className="fa fa-plus rspe" aria-hidden="true"></i></span>
                         </h>
                     </div>
                     <div className='background-black'>
                         <img  className='detail-small-igm' src= 'https://www.fnp.com/images/pr/l/v20221202065954/luxe-love-10-orchids-bouquet_1.jpg'/>
                         <p className='detail-two'>2 layer bamboo plan</p>
                         <h className='detail-space'>
                              <span className='rs-p'>Rs 799</span>
                              <span className='mrg-bt'><i className="fa fa-plus rspe" aria-hidden="true"></i></span>
                         </h>
                     </div>
                    </div>
                 </div>
                 <div className='detail-grid mini-box-size'>
                    <div className='detail-mini-box'>
                    <i class="fa fa-motorcycle ic-color" aria-hidden="true"></i>
                    <p className='boldee'>EARLY MORNING DELIVERY</p>
                    </div>
                    <div className='detail-mini-box'>
                    <p  className='boldee'>FIXED TIME DELIVERY</p>
                    <i class="fa fa-motorcycle ic-color" aria-hidden="true"></i>
                  
                    </div>
                    <div className='detail-mini-box'>
                    <i class="fa fa-motorcycle ic-color" aria-hidden="true"></i>
                    <p  className='boldee'>MID NIGHT DELIVERY</p>
                    </div>
                    <div className='detail-mini-box'>
                    <p  className='boldee'>THREE OUR DELIVERY</p>
                    <i class="fa fa-motorcycle ic-color" aria-hidden="true"></i>
                   
                    </div>
                 </div>
               </div>

      </div>

      <Container fluid style={{ padding: "20px 20px" }}>
        <Row>
          <button className="product_pricing_button_heading">
            RECENTLY VIEWED PRODUCTS
          </button>
          <Slider {...settingsBestSelling}>
            {bestSelling.map((el, key) => (
              <Col
                key={key}
                className="home-card-layout"
                xs={12}
                sm={6}
                lg={4}
                xl={3}
              >
                <BestSelling
                  source={el.icon}
                  cardContent={"Product details here........"}
                  cardClass="auto-height-cust"
                  showContent={true}
                  value="200"
                />
              </Col>
            ))}
          </Slider>
        </Row>
          <div className='detail-specification'>
               <p className='detail-specification-main'>PRODUCT SPECIFICATION</p>
               <ul>
                   <li className='detail-specification-list' >SKU: HD13587</li>
                  <li  className='detail-specification-list'>Colour of flower: Assorted</li>
                  <li  className='detail-specification-list'>Type of flower: Mixed Flower</li>
                  <li className='detail-specification-list'>No. of items: 8</li>
                  
               </ul>

               <p className='detail-specification-main'>THIS MAKE A PERFECT GIFT FOR</p>
               <ul>
                   <li className='detail-specification-list'>Your Daughter, Sister or Friend Gift on Baby shower</li>
                  <li className='detail-specification-list'>Your Son or Brother to wish them best for the new beginning on their wedding</li>
                  
               </ul>
               <p className='detail-specification-main'>DISCLAMER</p>
               <ul>
                   <li className='detail-specification-list'>Delivery product might be slightly from the image shown.</li>
                  <li className='detail-specification-list'>this product is perishable therefore dilevery will be attemply once</li>
                  <li className='detail-specification-list'>The delivery cannot be redirected to another address</li>
                  
                  
               </ul>

          </div>
        <Row>
          <button className="product_pricing_button_heading">
            RECOMMENDED PRODUCTS
          </button>
          <Slider {...settingsBestSelling}>
            {bestSelling.map((el, key) => (
              <Col
                key={key}
                className="home-card-layout"
                xs={12}
                sm={6}
                lg={4}
                xl={3}
              >
                <BestSelling
                  source={el.icon}
                  cardContent={"Product details here........"}
                  cardClass="auto-height-cust"
                  showContent={true}
                  value="200"
                />
              </Col>
            ))}
          </Slider>
        </Row>
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

      <div className="detail-flex-row">
         <div className="detail-flex-column size1">
         <h2>Let Customer Spokes for Us</h2>

         <ul>
         <li><h5>PRODUCT IS A VERY GOOD QUALITY </h5> </li>
         <li><h5>SERVICE WAS VERY GOOD </h5></li>
         </ul>

          
         
         </div>
         <div className="detail-flex-column size2">
         <h2 > Share Your Review</h2>
         <input  className="viewinput" ></input>
         <button className="viewbutton">submit</button>
         </div>
      </div>

      <SubFooter />
      <Footer />
    </>
  );
}

export default Home;
