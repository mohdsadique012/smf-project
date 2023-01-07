import React, { useEffect, useState } from "react";
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


  /* Best Selling API */
  /* useState => Initilize To variable , array or object for the first time
  Syntax useState(variable, updateFunction)
  */
  const [bestSelling, updateBestSelling] = useState([]);
  const [Personalized_Gifts, updatePersonalized_Gifts] = useState([]);
  const [cake_Gifts , updateCake_Gifts]= useState([]);
  const [Flower_Gifts, updateFlower_Gifts] = useState([]);
  const [combos_Lists ,updateCombos_Lists] = useState([]);
  const [Pant_Gifts, updatePant_Gifts]=useState([])
  // console.log(bestSelling,"best");
  /* useEffect */
  const [data , setData]= useState([])

   useEffect(()=>{
    axios.get("http://admin.thesoftwarecompany.in/bestselling_lists")
      .then((result) =>{
        let listOfBestProducts = result.data.bestSellingLists;
          setData(listOfBestProducts);
      })
      .catch(err => console.warn(err));

   },[])
     console.log(data,"data123");

     const catogries={}
     data.forEach(product=>{
     catogries[product['category']]=1
     })
     console.log(catogries, 'catogries')



  //    let [category,setCategory]=useState('all')
  //    useEffect(()=>{
  //      filterSearch("")
  //  },[category])
  //  const handleclick=(e)=>{
  //   console.log(e.target.value,'..handlesele');
  //   setCategory(e.target.value)
    

  // }



  // useEffect(() => {
  //   axios.get('http://localhost:7600/bestselling_lists')
  //     .then((result) => {
  //       let listOfBestProducts = result.data.bestSellingLists;
  //       if (listOfBestProducts) {

  //         listOfBestProducts.map((el, key) => {

  //           if (el.name) {
  //             updateBestSelling([{
  //               icon: el.image ? el.image : "images/cake2.jpg",
  //               title: el.name
  //             }])
  //           }
  //         })
  //       }
  //     })
  //     .catch(err => console.warn(err));

  //   /* Personalized Gift API */
   
    
  //   axios.get("http://admin.thesoftwarecompany.in/personalized_list")
  //     .then((result) => {
  //       let personalizedProduct = result.data.personalizedLists;
  //       console.log(result.data , "personal");
  //       var tempvar = [];
  //       let personalcategory=[];
  //       if (personalizedProduct) {

  //         let personal = personalizedProduct.filter((el,key)=>{
  //           console.log(el,"vnvnv")
  //               return el.categorytype=='Personalized Gifts'
         
  //       })
  //       personalcategory=personal
  //       console.log(personal,"mmmmmm")

  //       personalcategory.map((el, key) => {
  //           if (el.name) {
  //             tempvar.push({
  //               icon: el.image ? 'http://admin.thesoftwarecompany.in/' + el.image : "images/cgift.jpg",
  //               title: el.name, value :el.regularprice,
  //             })
  //           }
  //         })

  //         updatePersonalized_Gifts(...Personalized_Gifts, tempvar)
  //         // console.log(Personalized_Gifts ,"1111")

  //       }
  //     })

  //     //Flower_Gift_list

  //   axios.get("http://admin.thesoftwarecompany.in/Flower_Gift_list")
  //     .then((result) => {
  //     //   console.log(result,'result');
  //       let Flower_Gift_list = result.data.flowergiftslist;
  //       // console.log(Flower_Gift_list,"flower")
  //       var temp = [];
  //       let flowercategory=[]
  //       if (Flower_Gift_list) {
  //         let flower = Flower_Gift_list.filter((el,key)=>{
  //           console.log(el,"vnvnv")
  //               return el.categorytype=='Flowers gift'
         
  //       })
  //       flowercategory=flower

  //       flowercategory.map((el, key) => {
  //           // console.log(el,"el")
  //           if (el.name) {
  //             temp.push({
  //               icon: el.image ? 'http://admin.thesoftwarecompany.in/' + el.image : "images/cgift.jpg",
  //               title: el.name, value :el.regularprice,
  //             })
  //           }
  //       })
  //       // console.log(temp,"temp")

  //       updateFlower_Gifts(...Flower_Gifts, temp)
       

  //     }
  //   })

  //   .catch(err => console.warn(err,"ggggg"));



  //   // plant gift
     
    
  //   axios.get("http://admin.thesoftwarecompany.in/cake_Gifts_lists")
  //     .then((result) => {
  //       console.log(result,'plant1212');
  //       let Pant_Gifts_lists = result.data.bestSellingLists;
  //       console.log(Pant_Gifts_lists,"Pant_Gifts_lists22222")
  //       var temp = [];
  //       let plantsubcategory=[]
  //       if (Pant_Gifts_lists) {
  //         let plant = Pant_Gifts_lists.filter((el,key)=>{
  //           console.log(el,"vnvnv")
  //               return el.categorytype=='Plants Gift'
         
  //       })
  //       plantsubcategory=plant


  //       plantsubcategory.map((el, key) => {
  //           // console.log(el,"el")
  //           if (el.name) {
  //             temp.push({
  //               icon: el.image ? 'http://admin.thesoftwarecompany.in/' + el.image : "images/cgift.jpg",
  //               title: el.name, value :el.regularprice,
  //             })
  //           }
  //       })
  //       console.log(temp,"plant temp")

  //       updatePant_Gifts(...Pant_Gifts, temp)
       

  //     }
  //   })

  //   .catch(err => console.warn(err,"ggggg"));


  //   //combos

  //   axios.get("http://admin.thesoftwarecompany.in/bestselling_lists")
  //     .then((result) => {
  //       let combos_lists = result.data.cakegiftlist;
  //         console.log(result.data,"main data")
  //       var tempvar = [];
  //       var tcs = [];
  //       if (combos_lists) {
  //            let combo = combos_lists.filter((el,key)=>{
  //             console.log(el,"vnvnv")
  //                 return el.categorytype=='combos'
           
  //         })
         
      
  //         tcs=combo
         


  //         tcs.map((el, key) => {
  //           if (el.name) {
  //             tempvar.push({
  //               icon: el.image ? 'http://admin.thesoftwarecompany.in/' + el.image : "images/cgift.jpg",
  //               title: el.name, value :el.regularprice,
  //             })
  //           }
  //         })
  //         updateCombos_Lists(...combos_Lists, tempvar)
         

  //       }
  //     })
        
      

  //     // gift
  //     axios.get("http://admin.thesoftwarecompany.in/Pant_Gifts_lists")
  //       .then((result) => {
  //       //  console.log(result,'result');
  //         let cakegift = result.data.plant_gifts;
  //         console.log(result.data,"cake")
  //         var temp = [];
  //         let  cakesubcategory =[];
  //         if (cakegift) {
  //           let cake = cakegift.filter((el,key)=>{
  //             console.log(el,"vnvnv")
  //                 return el.categorytype=='Cakes Gift'
           
  //         })
         
      
  //         cakesubcategory=cake;
  //         console.log( cakesubcategory,' cakesubcategory')
  //         cakesubcategory.map((el, key) => {
  //             // console.log(el,"el")
  //             if (el.name) {
  //               temp.push({
  //                 icon: el.image ? 'http://admin.thesoftwarecompany.in/' + el.image : "images/cgift.jpg",
  //                 title: el.name, value :el.regularprice,
  //               })
  //             }
  //         })
  //         console.log(temp,"temp0000")

  //         updateCake_Gifts(...cake_Gifts, temp)
         

  //       }
  //     })

  //     .catch(err => console.warn(err,"ggggg"));
  // }, []);

  

  //  console.log(cake_Gifts,"chl")

 console.log(Personalized_Gifts,"combolist" );
 console.log(Pant_Gifts,'Pant_Gifts11111')





  return (
    <>
      <Row>
        <HomeMenuCard menus={catogries} />
      </Row>
      <Jumbotron back_img={"official/Slider.png"} />
      <Row className={["second-section-images"]} style={{ marginBottom: "4%" }}>
        {CardFirst.map((el, key) => (
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
              source={el.image}
              cardContent={el.title}
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
            
          {Plants_Gifts.slice(0, 4).map((el, key) => (
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
                  custContent={"Personalized Gifts"}
                  source={el.icon}
                  cardContent={el.title}
                  showContent={true}
                  value={el.value}
                />
              </Col>
            )) }
            <span className={"view_all_btn"}>View All</span>
          </Row>
        </div>

        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {cake_Gifts ? cake_Gifts.slice(0, 4).map((el, key) => (
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
                  custContent={"Cakes Gifts"}
                  source={el.icon}
                  cardContent={el.title} 
                  showContent={false}
                  value={el.value}
                />
              </Col>
            ))  : <h1>Hello Rajat </h1>}
            <span className={"view_all_btn"}>View All</span>
          </Row>
        </div>

        <div className="borderDesign">
          <Row className={["position-relative"]}>
            {Flower_Gifts ? Flower_Gifts.slice(0, 4).map((el, key) => (
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
                  custContent={"Flowers Gifts"}
                  source={el.icon}
                  cardContent={el.title}
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
            {combos_Lists ?combos_Lists.slice(0, 4).map((el, key) => (
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
                  custContent={"Combos"}
                  source={el.icon}
                  cardContent={el.title}
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
            {Pant_Gifts ?Pant_Gifts.slice(0, 4).map((el, key) => (
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
                  custContent={"Plants Gifts"}
                  source={el.icon}
                  cardContent={el.title}
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
