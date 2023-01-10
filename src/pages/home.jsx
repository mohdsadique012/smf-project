import React, { useEffect, useState , useContext } from "react";
import CardComponent from "../component/Card/CardComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import HomeMenuCard from "../component/HomeMenuCard/HomeMenuCard";
import Jumbotron from "../component/Jumbotron/Jumbotron";
import Divider from "../component/Divider/Divider";
import CategoriesBox from "../component/Categories/Categories";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SubFooter from "../layout/Sub_Footer";
import Footer from "../layout/Footer";
import BestSelling from "../component/Card/BestSelling";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import TrendingCards from "../component/Card/TrendingCards";
import SimpleCardComponent from "../component/Card/SimpleCardComponent";
import axios from "axios";
import {AppContext} from "../context/productcontext"
import { GiConsoleController } from "react-icons/gi";

const arrCount = [1, 2, 3, 4, 5, 6];
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
const menuTitle = [
  { icon: "official/Icons/Birthday_Gifts.png", title: "Birthday Gift" },
  { icon: "official/Icons/Anniversary_Gift.png", title: "Annivesary Gift" },
  { icon: "official/Icons/Flower_Gift.jpeg", title: "Flowers Gift" },
  { icon: "official/Icons/Cake_Gifts.jpeg", title: "Cakes Gift" },
  { icon: "official/Icons/Personalized_Gifts.png", title: "Personlized Gift" },
  { icon: "official/Icons/Pant_Gifts.webp", title: "Plants Gift" },
  { icon: "official/Icons/International_Gifts.jpeg", title: "International" },
];


const trendingCards = [
  { icon: "official/Best_Selling_Gifts/1.png", title: "Birthday Gift" },
  { icon: "official/Best_Selling_Gifts/2.png", title: "Annivesary Gift" },
  { icon: "official/Best_Selling_Gifts/3.png", title: "Flowers Gift" },
  { icon: "official/Best_Selling_Gifts/4.png", title: "Cakes Gift" },
  { icon: "official/Best_Selling_Gifts/3.png", title: "Flowers Gift" },
];

const cakesGifts = [
  { icon: "official/Best_Selling_Gifts/1.png", title: "Pineapple Cake" },
  { icon: "official/Cake_Gifts/1.png", title: "Pineapple Cake" },
  { icon: "official/Cake_Gifts/2.png", title: "Choco-Truffle Cake" },
  { icon: "official/Cake_Gifts/3.png", title: "Chocolate Cake" },
];

const flowerGifts = [
  { icon: "official/Best_Selling_Gifts/1.png", title: "Birthday Gift" },
  { icon: "official/Flower_Gifts/1.png", title: "Special Bouquet" },
  { icon: "official/Flower_Gifts/2.png", title: "Gerbera" },
  { icon: "official/Flower_Gifts/3.png", title: "Red Rose" },
];

const combos = [
  { icon: "official/Combos/1.png", title: "Birthday Gift" },
  { icon: "official/Combos/1.png", title: "Flowers with Dry Fruit" },
  { icon: "official/Combos/2.png", title: "Flowers with Sweets" },
  { icon: "official/Combos/3.png", title: "Flowers with Chocolates" },
];

const Plants_Gifts = [
  { icon: "official/Plants_Gifts/1.png", title: "Birthday Gift" },
  { icon: "official/Plants_Gifts/1.png", title: "Special Plants" },
  { icon: "official/Plants_Gifts/2.png", title: "Bamboo Plants" },
  { icon: "official/Plants_Gifts/3.png", title: "Lucky Plant" },
];

const Home = ({ cartCount, addCart }) => {
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
  const settings2 = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
  };
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

     let context_Data= useContext(AppContext)
     console.log(context_Data.products,"context_Data")
     let toprated_data_catogaries =context_Data.products
     var category_third = context_Data.single_product
    console.log(category_third,'category_third')


  /* Best Selling API */
  /* useState => Initilize To variable , array or object for the first time
  Syntax useState(variable, updateFunction)
  */
  const [bestSelling, updateBestSelling] = useState([]);

// category--3 part =>

let category_3 = [];
  category_3=toprated_data_catogaries.filter((el)=>
            el.categorytype=='Category-3'
  );
  console.log(category_3,'category_33333333333')

  var categoriess =[]
    
  category_3.forEach(el=>{
            let variable=category_third.filter(item=>item.categorytype.toLowerCase()== el.name.toLowerCase())
            categoriess =  categoriess.concat(variable);    
         })
        
         console.log(categoriess,"888888888888")
         const category_grouping = categoriess.reduce((category_grouping, item) => {
          const group = (category_grouping[item.categorytype] || []);
          group.push(item);
          category_grouping[item.categorytype] = group;
          return category_grouping;
        }, {});
         
        let a=[]
        console.log(categoriess,"categoriessggggg11111g");
        let   categoriesss = Object.keys(category_grouping)
        console.log(categoriess,'total key')
        categoriesss.forEach((gender) => {
          category_grouping[gender].slice(0,4).map(el=>{
            a.push(el)
              
          })
 })
      console.log(a,"ajabhai")

 let uniquecategorykey_3= [
  ...new Map(a.map((item)=>[item["name"],item])).values()
 ];
  
 console.log(uniquecategorykey_3,'uniquecategorykey_3ajajajaja')

  
      // toprated category part
       
  let toprated=[];
   toprated= toprated_data_catogaries.filter((el)=>
    el.categorytype=='Top rated Category'
     );

let uniquecategorykey = [
  ...new Map(toprated.map((item)=>[item["description"],item])).values()
     ];
      
     // category_3 part =>

let categoryy=[];
  categoryy= toprated_data_catogaries.filter((el)=>
     el.categorytype=='Category-2'
     );
 
  
    
let uniquecategory2key = [
    ...new Map(categoryy.map((item)=>[item["name"],item])).values()
     ];
  
    //  setCategories21(categoryy)
    
  return (
    <>
      <Row>
        <HomeMenuCard menus={uniquecategorykey} />
      </Row>
      <Jumbotron back_img={"official/Slider.png"} />
      <Row className={["second-section-images"]} style={{ marginBottom: "4%" }}>
        {uniquecategory2key.map((el, key) => (
          <Col
            key={key}
            className="home-card-layout category-card"
            xs={12}
            sm={6}
            lg={4}
            xl={4}
          >

            <CardComponent
              addCart={addCart}
              source={'http://admin.thesoftwarecompany.in/' +el.image}
              cardContent={el.name}
              showContent={false}
              value={el.value}
            />

          </Col>
        ))}
      </Row>
      <Divider content="Best Selling Gift" />
      <Row style={{ marginBottom: "2.8%" }}>
        <Slider {...settingsBestSelling}>
          {bestSelling ? bestSelling.map((el, key) => (
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
                value={el.value}
              />
            </Col>
          )) : ''}
        </Slider>
      </Row>
      <Divider content="Trending Now" />
      <Row>
        {/* {
                    trendingCards.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={2}><TrendingCards source={el.icon} cardContent={"Timeless Love Red Roses Bouquet"} cardClass="auto-height-cust" showContent={true} value="200" /></Col>)
                } */}
        <Slider {...settingsBestSelling}>
          {bestSelling ? bestSelling.map((el, key) => (
       
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
                value={el.value}
              />
            </Col>
          )) : ''}
        </Slider>
      </Row>

      <div className="container-fluid" style={{ marginTop: "2%" }}>
        
    
            <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ?uniquecategorykey_3.slice(0, 4).map((el, key) => (
              <Col
                key={key}
                className="Green-card home-card-layout"
                xs={12}
                sm={6}
                lg={4}
                xl={3}
              >
                <SimpleCardComponent
                  checker={key}
                  custContentImg={true}
                  custContent={el.categorytype}
                  source={'http://admin.thesoftwarecompany.in/' + el.image}
                  cardContent={el.name}
                  showContent={false}
                  value="200"
                />
              </Col>
            ))  : <h1>Hello Rajat </h1>}
            <span className={"view_all_btn"}>View All</span>
          </Row>
        </div>

           <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ?uniquecategorykey_3.slice(4, 8).map((el, key) => (
              <Col
                key={key}
                className="Green-card home-card-layout"
                xs={12}
                sm={6}
                lg={4}
                xl={3}
              >
                <SimpleCardComponent
                  checker={key}
                  custContentImg={true}
                  custContent={el.categorytype}
                  source={'http://admin.thesoftwarecompany.in/' + el.image}
                  cardContent={el.name}
                  showContent={false}
                  value="200"
                />
              </Col>
            ))  : <h1>Hello Rajat </h1>}
            <span className={"view_all_btn"}>View All</span>
          </Row>
        </div>

        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ? uniquecategorykey_3.slice(8,12).map((el, key) => (
              <Col
                key={key}
                className="Green-card home-card-layout"
                xs={12}
                sm={6}
                lg={4}
                xl={3}
              >
                <SimpleCardComponent
                  checker={key}
                  custContentImg={true}
                  custContent={el.categorytype}
                  source={'http://admin.thesoftwarecompany.in/'+ el.image}
                  cardContent={el.name}
                  showContent={false}
                  value={el.regularprice}
                />
              </Col>
            ))  : <h1>Hello Rajat </h1>}
            <span className={"view_all_btn"}>View All</span>
          </Row>
        </div>

        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ?uniquecategorykey_3.slice(12, 16).map((el, key) => (
              <Col
                key={key}
                className="Green-card home-card-layout"
                xs={12}
                sm={6}
                lg={4}
                xl={3}
              >
                <SimpleCardComponent
                  checker={key}
                  custContentImg={true}
                  custContent={el.categorytype}
                  source={'http://admin.thesoftwarecompany.in/' + el.image}
                  cardContent={el.name}
                  showContent={false}
                  value="200"
                />
              </Col>
            ))  : <h1>Hello Rajat </h1>}
            <span className={"view_all_btn"}>View All</span>
          </Row>
        </div>

        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ?uniquecategorykey_3.slice(16,20).map((el, key) => (
                     
              <Col
                key={key}
                className="Green-card home-card-layout"
                xs={12}
                sm={6}
                lg={4}
                xl={3}
              >
                <SimpleCardComponent
                  checker={key}
                  custContentImg={true}
                  custContent={el.categorytype}
                  source={'http://admin.thesoftwarecompany.in/' + el.image}
                  cardContent={el.name}
                  showContent={false}
                  value="200"
                />
              </Col>
            )) : <h1>Hello Rajat </h1>}
            <span className={"view_all_btn"}>View All</span>
          </Row>
        </div>
      </div>

      <Divider content="Browse By Categories" />
      <div className="container-fluid">
        <div className="homeSmallCard">
          {/* <div className="smallCardHeader">
                        <h5>Occasions</h5>
                    </div> */}
          <div className="row occasionCard align-items-center justify-content-center my-3">
            <div className="col-md-10">
              <div className="row check">
                <div className="col-4 d-flex flex-column one">
                  <div className="custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap">
                    <button className="btn bg-white outline-0 btn-outline-success border-0 w-100">
                      Birthday
                    </button>
                  </div>
                  <div className="custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap">
                    <button className="btn bg-white outline-0 btn-outline-success border-0 w-100">
                      Baby Shower
                    </button>
                  </div>
                </div>
                <div className="col-4 d-flex flex-column two">
                  <div className="custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap order-2">
                    <button className="btn bg-white outline-0 btn-outline-success border-0 w-100">
                      Wedding
                    </button>
                  </div>
                  <div className="custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap order-1">
                    <button className="btn bg-white outline-0 btn-outline-success border-0 w-100">
                      House Warming
                    </button>
                  </div>
                </div>
                <div className="col-4 d-flex flex-column three">
                  <div className="custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap">
                    <button className="btn bg-white outline-0 btn-outline-success border-0 w-100">
                      Anniversary
                    </button>
                  </div>
                  <div className="custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap">
                    <button className="btn bg-white outline-0 btn-outline-success border-0 w-100">
                      Best Wishes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 explore_more_categories">
              <button className="btn btn-lg border border-secondary border-top-0">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

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
                    Please Update your tracking system, otherwise happy with the
                    service.
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
                    Please Update your tracking system, otherwise happy with the
                    service.
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
                    Please Update your tracking system, otherwise happy with the
                    service.
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
                    Please Update your tracking system, otherwise happy with the
                    service.
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
                    Please Update your tracking system, otherwise happy with the
                    service.
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
                    Please Update your tracking system, otherwise happy with the
                    service.
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
                    Please Update your tracking system, otherwise happy with the
                    service.
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

      <Divider content="Recently Viewed Products" />

      {/* <Container>
                <Slider {...settings2}>
                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Special Festive Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                </Slider>

            </Container> */}
      <div style={{ marginBottom: "3%" }}>
        <Slider {...settingsBestSelling}>
          {bestSelling ? bestSelling.map((el, key) => (
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
          )) : ''}
        </Slider>
      </div>

      <Divider content="Send Gifts World Wide" />

      <div className="container-fluid" style={{ marginBottom: "0%" }}>
        <div className="homeSmallCard">
          {/* <div className="smallCardHeader">
                        
                    </div> */}
          <div className="smallCardBody">
            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>

            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>

            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>

            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>

            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>
            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>

            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>

            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>

            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>

            <div className="cardBody">
              <div className="img-body">
                <img
                  src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
                  className="img-thumbnail"
                  alt=""
                />
              </div>
              <div className="img-content">Demo Content</div>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
      <Footer />
    </>
  );
};

export default Home;
