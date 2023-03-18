import React, { useEffect, useState, useContext } from "react";
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
import Card from 'react-bootstrap/Card';


import { AiOutlineHeart } from "react-icons/ai";

import TrendingCards from "../component/Card/TrendingCards";
import SimpleCardComponent from "../component/Card/SimpleCardComponent";
import axios from "axios";
import { AppContext } from "../context/productcontext";
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

const Home = ({ cartCount, datarroute, addCart }) => {
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

  let context_Data = useContext(AppContext);

  let toprated_data_catogaries = context_Data.products;
  var category_third = context_Data.single_product;
  let bestselling_product = context_Data.bestselling_product;
  let trending = context_Data.trending_product;

  console.log(bestselling_product, "bestselling_databestselling_data");
  // setProduct(product);
  /* Best Selling API */
  /* useState => Initilize To variable , array or object for the first time
  Syntax useState(variable, updateFunction)
  */
  const [bestSelling, updateBestSelling] = useState([]);

  // category--3 part =>
  let Allcategory = [
    ...new Map(toprated_data_catogaries.map((item) => [item["name"], item])).values(),
  ];

  let category_3 = [];
  category_3 = toprated_data_catogaries.filter(
    (el) => el.categorytype == "Category-3"
  );

  var categoriess = [];

  category_3.forEach((el) => {
    console.log(el.name, " el.name");
    let variable = category_third.filter((item) => {
      console.log(item.categorytype, " item.categorytype");
      return item.categorytype == el.name;
    });

    categoriess = categoriess.concat(variable);
  });

  const category_grouping = categoriess.reduce((category_grouping, item) => {
    const group = category_grouping[item.categorytype] || [];
    group.push(item);
    category_grouping[item.categorytype] = group;
    return category_grouping;
  }, {});

  let a = [];

  let categoriesss = Object.keys(category_grouping);
  console.log(categoriess, "total key");
  categoriesss.forEach((gender) => {
    category_grouping[gender].slice(0, 4).map((el) => {
      a.push(el);
    });
  });

  let uniquecategorykey_3 = [
    ...new Map(a.map((item) => [item["name"], item])).values(),
  ];

  // toprated category part

  let toprated = [];
  toprated = toprated_data_catogaries.filter(
    (el) => el.categorytype == "Top rated Category"
  );

  let uniquecategorykey = [
    ...new Map(toprated.map((item) => [item["name"], item])).values(),
  ];

  // category_2 part =>

  let categoryy = [];
  categoryy = toprated_data_catogaries.filter(
    (el) => el.categorytype == "Category-2"
  );

  let uniquecategory2key = [
    ...new Map(categoryy.map((item) => [item["name"], item])).values(),
  ];

  //  setCategories21(categoryy)
  //'http://admin.thesoftwarecompany.in/
  console.log( uniquecategorykey_3,"Allcategory")
  let subcategoryslug1= uniquecategorykey_3[2]?.category_slug;
  let subcategoryslug2= uniquecategorykey_3[6]?.category_slug;
  let subcategoryslug3= uniquecategorykey_3[10]?.category_slug;
  let subcategoryslug4= uniquecategorykey_3[14]?.category_slug;
  let subcategoryslug5= uniquecategorykey_3[18]?.category_slug;
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
              source={"http://admin.thesoftwarecompany.in/" + el.image}
              cardContent={el.name}
              showContent={false}
              value={el.value}
              slug={el.slug}
            />
          </Col>
        ))}
      </Row>
      <Divider content="Best Selling Gift" />
      <Row style={{ marginBottom: "2.8%" }}>
        <Slider {...settingsBestSelling}>
          {bestselling_product
            ? bestselling_product.map(
                (el, key) =>
                  console.log(el, "||||||||||||") || (
                    <Card >
                    <Link to="/product_details">
        
                        <>
                        <Link to={`/product_details/${el.product_slug}`}>
                            <Card.Img variant="top"  src={"http://admin.thesoftwarecompany.in/"+el.product_image}
                            alt=""  style={{borderRadius: "20px"}} />
                         
                            <span className="wishList">
                                <AiOutlineHeart />
                            </span>
                            <div className="ribbon">Customizable</div>
                            <Card.Body>
                            <Card.Title>{el.product_name}</Card.Title>
                            <Card.Text className='card-content-best-sel'><span> ₹{el.product_price }</span>
                                <span className='best-sel-star-rate'>
                                    <span className="star-box">
                                        4.2
                                        <AiFillStar />
                                    </span>
                                    <small>10 Reviews</small>
                                </span>
                            </Card.Text>
                            {/* */}
                            <Card.Text className={['best_sell_card_highlighter']}>Earliest Delivery: Today</Card.Text>
                        </Card.Body> 
                        </Link>
                        </>
                    
                                <>
                                   
                                </>
                               
                      
                    </Link>
                    {/* <button className='btn btn-danger' onClick={addCart}>+</button> */}
                </Card>
                  )
              )
            : ""}
        </Slider>
      </Row>
      <Divider content="Trending Now" />
      <Row>
      <Slider {...settingsBestSelling}>
      {bestselling_product
        ? bestselling_product.map(
            (el, key) =>
              console.log(el, "||||||||||||") || (
                <Card >
                <Link to="/product_details">
    
                    <>
                    <Link to={`/product_details/${el.product_slug}`}>
                        <Card.Img variant="top" src={"http://admin.thesoftwarecompany.in/"+el.product_image}
                        alt=""  style={{borderRadius: "20px"}} />
                     
                        <span className="wishList">
                            <AiOutlineHeart />
                        </span>
                        <div className="ribbon">Customizable</div>
                        <Card.Body>
                        <Card.Title>{el.product_name}</Card.Title>
                        <Card.Text className='card-content-best-sel'><span>₹{el.product_price } </span>
                            <span className='best-sel-star-rate'>
                                <span className="star-box">
                                    4.2
                                    <AiFillStar />
                                </span>
                                <small>10 Reviews</small>
                            </span>
                        </Card.Text>
                        {/* */}
                        <Card.Text className={['best_sell_card_highlighter']}>Earliest Delivery: Today</Card.Text>
                    </Card.Body> 
                    </Link>
                    </>
                
                            <>
                               
                            </>
                           
                  
                </Link>
                {/* <button className='btn btn-danger' onClick={addCart}>+</button> */}
            </Card>
              )
          )
        : ""}
    </Slider>
      </Row>

      <div className="container-fluid" style={{ marginTop: "2%" }}>
        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ? (
              uniquecategorykey_3.slice(0, 4).map((el, key) => (
                <Col
                  key={key}
                  className="Green-card home-card-layout"
                  xs={12}
                  sm={6}
                  lg={4}
                  xl={3}
                >
                  <Link to={`single_product_bysubcategory/${el.slug}`}>
                    <SimpleCardComponent
                      checker={key}
                      custContentImg={true}
                      custContent={el.categorytype}
                      source={"http://admin.thesoftwarecompany.in" + el.image}
                      cardContent={el.name}
                      showContent={false}
                      value="200"
                      slug={el.slug}
                      slug2={el.category_slug}
                    />
                  </Link>
                </Col>
              ))
            ) : (
              <h1>Hello Rajat </h1>
            )}
            <Link to={`single_product_category/${subcategoryslug1}`}>
            <span className={"view_all_btn"}>View All</span>
            </Link>
          </Row>
        </div>

        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ? (
              uniquecategorykey_3.slice(4, 8).map((el, key) => (
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
                    source={"http://admin.thesoftwarecompany.in" + el.image}
                    cardContent={el.name}
                    showContent={false}
                    value="200"
                    slug={el.slug}
                      slug2={el.category_slug}
                  />
                </Col>
              ))
            ) : (
              <h1>Hello Rajat </h1>
            )}
            <Link to={`single_product_category/${subcategoryslug2}`}>
            <span className={"view_all_btn"}>View All</span>
            </Link>
          </Row>
        </div>

        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ? (
              uniquecategorykey_3.slice(8, 12).map((el, key) => (
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
                    source={"http://admin.thesoftwarecompany.in" + el.image}
                    cardContent={el.name}
                    showContent={false}
                    value={el.regularprice}
                    slug={el.slug}
                    slug2={el.category_slug}
                  />
                </Col>
              ))
            ) : (
              <h1>Hello Rajat </h1>
            )}
            <Link to={`single_product_category/${subcategoryslug3}`}>
            <span className={"view_all_btn"}>View All</span>
            </Link>
          </Row>
        </div>

        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ? (
              uniquecategorykey_3.slice(12, 16).map((el, key) => (
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
                    source={"http://admin.thesoftwarecompany.in" + el.image}
                    cardContent={el.name}
                    showContent={false}
                    value="200"
                    slug={el.slug}
                    slug2={el.category_slug}
                  />
                </Col>
              ))
            ) : (
              <h1>Hello Rajat </h1>
            )}
            <Link to={`single_product_category/${subcategoryslug4}`}>
            <span className={"view_all_btn"}>View All</span>
            </Link>
          </Row>
        </div>

        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {uniquecategorykey_3 ? (
              uniquecategorykey_3.slice(16, 20).map((el, key) => (
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
                    source={"http://admin.thesoftwarecompany.in" + el.image}
                    cardContent={el.name}
                    showContent={false}
                    value="200"
                    slug={el.slug}
                    slug2={el.category_slug}
                    
                  />
                 
                </Col>
              ))
            ) : (
              <h1>Hello Rajat </h1>
            )}
            <Link to={`single_product_category/${subcategoryslug5}`}>
            <span className={"view_all_btn"}>View All</span>
            </Link>
          </Row>
        </div>
      </div>

      <Divider content="Browse By Categories" />
     
      <Slider {...settingsBestSelling}>
        {Allcategory
          ? Allcategory.map(
              (el, key) =>
                console.log(el, "||||||||||||") || (
                  <Link to={`single_product_category/${el.slug}`}>
                  <div className="custom-design border-secondary  flex-wrap order-2 man">
                    <img
                      className="Allcategory-imge"
                      src={"http://admin.thesoftwarecompany.in/"+ el.image}
                    />
                    <button className="btn bg-white outline-0 btn-outline-success border-0 w-100">
                     {el.name}
                    </button>
                  </div>
                  </Link>
                )
            )
          : ""}
      </Slider>
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&usqp=CAU"
                    alt=""
                  />
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
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU"
                    alt=""
                  />
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
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsyVVdxkz5zyuE-yRKpdwtre_R234HkS2gQ&usqp=CAU"
                    alt=""
                  />
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
          {bestSelling
            ? bestSelling.map((el, key) => (
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
              ))
            : ""}
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
