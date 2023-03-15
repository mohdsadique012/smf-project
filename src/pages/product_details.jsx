import React, { useState, useEffect, useContext } from "react";
import ProductCarousel from "../component/Product/ProductCarousel";
import ProductPricing from "../component/Product/ProductPricing";
import ProducAddOn from "../component/Product/ProducAddOn";
import { Col, Container, Row } from "react-bootstrap";
import SubFooter from "../layout/Sub_Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../layout/Footer";
import BestSelling from "../component/Card/BestSelling";
import Slider from "react-slick";
import Divider from "../component/Divider/Divider";
import "./product_details.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AppContext } from "../context/productcontext";
import { useProductGlobal } from "../context/productcontext";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const bestSelling = [
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSb5uvRreE7v-ZYFrtjdYEnnJB9iLbW1GBnA&usqp=CAU",
    title: "Birthday Gift",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntJFPnQdD-EBn7Kfo7fiUWsA3PtjLKlg9CA&usqp=CAU",
    title: "Annivesary Gift",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_PcZs4PJ6rYTheMRqITuwkU8cmw28HF3ow&usqp=CAU",
    title: "Flowers Gift",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycKZHTxTVQwqBv0H4xf_Gl8F2kGlyolGw_A&usqp=CAU",
    title: "Cakes Gift",
  },
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
  const { getSingleProductListByproduct, one_product ,time_slot } = useProductGlobal();
  const { oneproduct } = useParams();
  let Data = useContext(AppContext);
  const AllProductApi = "https://admin.thesoftwarecompany.in/product_data";
  let data = one_product[0];
  let data2=Data.time_slot
console.log(data2,"earlytimeslot")
  useEffect(() => {
    getSingleProductListByproduct(
      `${AllProductApi}?product_slug=${oneproduct}`
    );
    // getProductListByCategory(AllProductApi);
  }, []);

  console.log(one_product, "oneproduct");

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // useEffect({
  //     document.querySelector();
  // }, [])

  //1111

  // console.log(props.data ,88888)
  const handleclickAdd = (e) => {
    alert("Your product has been added in cart");
    // setProduct(product);
    props.dataAdd(data);
  };
  const [startDate, setStartDate] = useState(new Date());
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () =>{setShow(true); setBoxx(false)} 
//time-slot part


    let timeslot=[]
   const datetimeslot= data2.map(el=>{
          if(el.delivery_management_id==1){
            let { delivery_management_id,start_time, end_time,standred_delivery_price,management_name } = el;
             let newObject = { id:delivery_management_id,start_time, end_time,management_name,price: standred_delivery_price };
             timeslot.push(newObject)
          }else if(el.delivery_management_id==2){
            let { delivery_management_id,start_time, end_time,fix_delivery_price,management_name } = el;
            let newObject = {id:delivery_management_id, start_time, end_time,management_name, price:fix_delivery_price };
            timeslot.push(newObject)
          }else if(el.delivery_management_id==3){
            let {delivery_management_id, start_time, end_time,midnight_delivery_price,management_name } = el;
            let newObject = {id:delivery_management_id, start_time, end_time,management_name, price:midnight_delivery_price };
            timeslot.push(newObject)
          }else if(el.delivery_management_id==4){
            let {delivery_management_id, start_time, end_time,early_morning_delivery_price,management_name } = el;
            let newObject = {id:delivery_management_id, start_time, end_time,management_name, price:early_morning_delivery_price };
            timeslot.push(newObject)
          }else if(el.delivery_management_id==5){
            let { delivery_management_id,start_time, end_time,courier_delivery_price,management_name } = el;
            let newObject = {id:delivery_management_id, start_time, end_time,management_name, price:courier_delivery_price };
            timeslot.push(newObject)
          }

   })
  
  let uniquedelivery = [
    ...new Map(timeslot.map((item) => [item["management_name"], item])).values(),
  ];

  const [dateslot , setDateslot]=useState([])

const [boxx, setBoxx]=useState(false)
const functionopen = (e)=>{
  var  datetime=  timeslot.filter((item) =>{
          return item.id==e
         
  })
  setDateslot(datetime)
  setBoxx(true)
}

const [finaltimedispaly , setFinaltimedisplay]=useState([])
const handleclicktime=(e)=>{
  var  finaldisplaydate=  timeslot.filter((item) =>{
    return item.start_time==e
})
setFinaltimedisplay(finaldisplaydate)
setShow(false)
}
  const styles = {
    marginTop: "150px",
  };



  const [selectedValue, setSelectedValue] = useState([]);
//   const [cities,setCities]=useState("jaipur")
//     //  setCities( Cookies.get('citypincode')) ;
// useEffect(()=>{
//   let filterdata = cities.filter(el=>{
//     return    el.city==cities
//  })
//  setSelectedValue(filterdata);
// },[cities])
  return (
    <>
      {/* <Row>
                    <>
                        <ProductCarousel></ProductCarousel>
                        <ProductPricing></ProductPricing>
                        <ProducAddOn></ProducAddOn>

                    </>
                </Row > */}

      <div className="product-detail-container detail-flex-row">
        <div className="flower-container">
          <div className="Product-detail-flower detail-flex-column">
            <div className="flower-img-box">
              <img
                className="flower-img imge"
                src={"https://admin.thesoftwarecompany.in/" + data?.product_image}
              />
            </div>
            <div className="small-img-container detail-flex-row">
              <div className="small-img-box">
                <img
                  className="small-img"
                  src={"https://admin.thesoftwarecompany.in/" + data?.product_short_image1}
                />
              </div>
              <div className="small-img-box">
                <img
                  className="small-img"
                  src={"https://admin.thesoftwarecompany.in/" + data?.product_short_image2}
                />
              </div>
              <div className="small-img-box">
                <img
                  className="small-img"
                  src={"https://admin.thesoftwarecompany.in/" + data?.product_short_image3}
                />
              </div>
            </div>
          </div>
          <div className="product-detail-share-icon">
            <span className="detail-share">Share : </span>
            <span>
              <i
                className="fa fa-facebook-official detail-icon-size facebook-color"
                aria-hidden="true"
              ></i>
            </span>
            <span>
              <i
                className="fa fa-instagram detail-icon-size insta-color"
                aria-hidden="true"
              ></i>
            </span>
            <span>
              <i
                className="fa fa-whatsapp detail-icon-size whatsap-color"
                aria-hidden="true"
              ></i>
            </span>
            <span>
              <i
                className="fa fa-google-plus detail-icon-size"
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>

        {/* product detail pricing container */}

        <div className="product-detail-pricing-container">
          <div className="detail-pricing">
            <p className="detail-redrose">{data?.product_name}</p>
            <br />
            <p>
              <span>
                <i className="fa fa-star detail-star" aria-hidden="true"></i>
              </span>
              <span>
                <i className="fa fa-star detail-star" aria-hidden="true"></i>
              </span>
              <span>
                <i className="fa fa-star detail-star" aria-hidden="true"></i>
              </span>
              <span>
                <i className="fa fa-star detail-star" aria-hidden="true"></i>
              </span>
              <span>
                <i className="fa fa-star " aria-hidden="true"></i>
              </span>
              <span className="detail-rating"> 4 Star | 551 ratings</span>
            </p>
            <p>
              <span className="detail-rs">Rs</span>
              <span className="detail-Rs">{data?.product_price }</span>
              <p>
                <span>
                  <i
                    className="fa fa-arrow-down down-arrow"
                    aria-hidden="true"
                  ></i>
                </span>
                <span className="detail-view">View more details</span>
              </p>
            </p>

            <p className="detail-enter">
              Enter correct pincode for hassle free delivery
            </p>
          </div>
          <div>
          <div className="displaydte">
          <select name="" id="" className="form-control">
          <option value='all'>select by pincode</option>
          {selectedValue.map(city => (
              
              <option key={city.pincode_id} value="select pincode">{city?.pincode}</option>
            ))}
          </select>
            <DatePicker
             className="datepicker"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                handleShow();
              }}
              minDate={minDate} // set minimum date
              maxDate={maxDate} // set maximum date
            />
            </div>
            {finaltimedispaly?finaltimedispaly.map(el=>{
              return <div className="finaldisplaybox"> 
              <p className="finalmargin"><span className="Finaldisplayname">{el.management_name}</span><span className="Finaldisplayname finlpricemargin">Rs{el.price}</span></p>
              <p className="finalmargin"><span className="slottime11">Slot-time -</span>  <span ><span className="slottime11">{el.start_time}</span >-<span className="slottime11">{el.end_time}</span></span></p>
              </div>
            }):""}
           
          </div>
          <div className="detail-flex-row detail-button-box">
            <button
              onClick={handleclickAdd}
              className="detail-button detail-background-color-grey"
            >
              {" "}
              <span>
                <i
                  className="fa fa-cart-plus detail-button-icon"
                  aria-hidden="true"
                ></i>
              </span>
              <span className="detail-button-name">ADD TO CART</span>
            </button>
            <button className="detail-button detail-background-color-red">
              {" "}
              <span>
                <i
                  className="fa fa-bandcamp detail-button-icon"
                  aria-hidden="true"
                ></i>
              </span>
              <span className="detail-button-name">BUY NOW</span>
            </button>
          </div>
          <div className="small-img-container detail-flex-row detail-margin">
            <div className="detail-lf">
              <div className="small-img-box1">
                <img
                  className="small-img1"
                  src={"https://admin.thesoftwarecompany.in/" + data?.image}
                />
              </div>
              <div className="detail-space detail-flex-row">
                <span className="detail-color-rate">small </span>
                <span className="detail-color-rates"> Rs. 699</span>
              </div>
            </div>
            <div className="detail-lf">
              <div className="small-img-box1">
                <img
                  className="small-img1"
                  src={"https://admin.thesoftwarecompany.in/" + data?.image}
                />
              </div>
              <div className="detail-space detail-flex-row">
                <span className="detail-color-rate">medim </span>
                <span className="detail-color-rates"> Rs. 699</span>
              </div>
            </div>
            <div className="detail-lf">
              <div className="small-img-box1">
                <img
                  className="small-img1"
                  src={"https://admin.thesoftwarecompany.in/" + data?.image}
                />
              </div>
              <div className="detail-space detail-flex-row">
                <span className="detail-color-rate">large </span>
                <span className="detail-color-rates"> Rs. 699</span>
              </div>
            </div>
          </div>
        </div>

        {/* product detail another type container */}

        <div className="last-container">
          <div className="last-box-container">
            <p>ADD ONS</p>
            <div className="detail-grid">
              <div className="background-black">
                <img
                  className="detail-small-igm"
                  src={"https://admin.thesoftwarecompany.in/" + data?.image}
                />
                <p className="detail-two">2 layer bamboo plan</p>
                <h className="detail-space">
                  <span className="rs-p">Rs 799</span>
                  <span className="mrg-bt">
                    <i className="fa fa-plus rspe" aria-hidden="true"></i>
                  </span>
                </h>
              </div>
              <div className="background-black">
                <img
                  className="detail-small-igm"
                  src={"https://admin.thesoftwarecompany.in/" + data?.image}
                />
                <p className="detail-two">2 layer bamboo plan</p>
                <h className="detail-space">
                  <span className="rs-p">Rs 799</span>
                  <span className="mrg-bt">
                    <i className="fa fa-plus rspe" aria-hidden="true"></i>
                  </span>
                </h>
              </div>
              <div className="background-black">
                <img
                  className="detail-small-igm"
                  src={"https://admin.thesoftwarecompany.in/" + data?.image}
                />
                <p className="detail-two">2 layer bamboo plan</p>
                <h className="detail-space">
                  <span className="rs-p">Rs 799</span>
                  <span className="mrg-bt">
                    <i className="fa fa-plus rspe" aria-hidden="true"></i>
                  </span>
                </h>
              </div>
              <div className="background-black">
                <img
                  className="detail-small-igm"
                  src={"https://admin.thesoftwarecompany.in/" + data?.image}
                />
                <p className="detail-two">2 layer bamboo plan</p>
                <h className="detail-space">
                  <span className="rs-p">Rs 799</span>
                  <span className="mrg-bt">
                    <i className="fa fa-plus rspe" aria-hidden="true"></i>
                  </span>
                </h>
              </div>
            </div>
          </div>
          <div className="detail-grid mini-box-size">
            <div className="detail-mini-box">
              <i class="fa fa-motorcycle ic-color" aria-hidden="true"></i>
              <p className="boldee">EARLY MORNING DELIVERY</p>
            </div>
            <div className="detail-mini-box">
              <p className="boldee">FIXED TIME DELIVERY</p>
              <i class="fa fa-motorcycle ic-color" aria-hidden="true"></i>
            </div>
            <div className="detail-mini-box">
              <i class="fa fa-motorcycle ic-color" aria-hidden="true"></i>
              <p className="boldee">MID NIGHT DELIVERY</p>
            </div>
            <div className="detail-mini-box">
              <p className="boldee">THREE OUR DELIVERY</p>
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
        <div className="detail-specification">
          <p className="detail-specification-main">PRODUCT SPECIFICATION</p>
          <ul>
            <li className="detail-specification-list">SKU: HD13587</li>
            <li className="detail-specification-list">
              Colour of flower: Assorted
            </li>
            <li className="detail-specification-list">
              Type of flower: Mixed Flower
            </li>
            <li className="detail-specification-list">No. of items: 8</li>
          </ul>

          <p className="detail-specification-main">
            THIS MAKE A PERFECT GIFT FOR
          </p>
          <ul>
            <li className="detail-specification-list">
              Your Daughter, Sister or Friend Gift on Baby shower
            </li>
            <li className="detail-specification-list">
              Your Son or Brother to wish them best for the new beginning on
              their wedding
            </li>
          </ul>
          <p className="detail-specification-main">DISCLAMER</p>
          <ul>
            <li className="detail-specification-list">
              Delivery product might be slightly from the image shown.
            </li>
            <li className="detail-specification-list">
              this product is perishable therefore dilevery will be attemply
              once
            </li>
            <li className="detail-specification-list">
              The delivery cannot be redirected to another address
            </li>
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
                    <img
                      src="https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Priya </p>
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
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8A2wOvDj7sAobit1mD4lCc6ilEaBm_CF3AQ&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Adil</p>
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
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsyVVdxkz5zyuE-yRKpdwtre_R234HkS2gQ&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
                <div className="right-card">
                  <div className="">
                    <p className="red-mark-statement">
                      Please Update your tracking system, otherwise happy with
                      the service.
                    </p>
                    <p className="personName">Sumit</p>
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
            <li>
              <h5>PRODUCT IS A VERY GOOD QUALITY </h5>{" "}
            </li>
            <li>
              <h5>SERVICE WAS VERY GOOD </h5>
            </li>
          </ul>
        </div>
        <div className="detail-flex-column size2">
          <h2> Share Your Review</h2>
          <input className="viewinput"></input>
          <button className="viewbutton">submit</button>
        </div>
      </div>

      <SubFooter />
      <Footer />

      <Modal show={show} onHide={handleClose} animation={false} style={styles}>
        <Modal.Header closeButton>
          <Modal.Title>Select Time  Slot</Modal.Title>
        </Modal.Header>
        
            <div className="ssss" >


            { boxx ?  <Modal.Body >
              <div>
              <h4 className="psp">{dateslot[0]?.management_name} Rs{dateslot[0]?.price}</h4>
              <div className="modalll" >

              {dateslot ? (
                
                dateslot.map((el, key) => (
               
                    <p className="slotboder" onClick={()=>handleclicktime(el.start_time)}>
                    <input className="checkbox-modal" type="checkbox" /><span className="slottime1">{el.start_time}</span>-<span className="slottime1">{el.end_time}</span></p>
                
                ))
              
                ) : (
                  <h1>Hello Rajat </h1>
                )}  </div>
                </div>
              </Modal.Body>:( <Modal.Body>
                <div className="midllecenter">
                {uniquedelivery ? (
                  uniquedelivery.map((el, key) => (
                 
                    <div className="modall">
                    <div className="div-modl" >
                      <p onClick={()=>{functionopen(el.id)}}  className="modal-p">
                        {" "}
                        <input className="checkbox-modal" type="checkbox" />
                        {el.management_name}
                      </p>{" "}
                      <p onClick={()=>{functionopen(el.id)}} className="modalspan">Rs {el.price}</p>
                    </div>
                  </div>
                  ))
                  ) : (
                    <h1>Hello Rajat </h1>
                  )}
                  </div>
                </Modal.Body>) }
             
            </div>
        
      </Modal>
    </>
  );
}

export default Home;
