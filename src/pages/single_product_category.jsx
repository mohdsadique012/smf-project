import React ,{useState,useEffect} from "react";
import SubFooter from "../layout/Sub_Footer";
import Footer from "../layout/Footer";
import Card from "../component/Card/Card";
import Divider from "../component/Divider/Divider";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Row,
  Container,
  Button,
  Col,
} from "react-bootstrap";

// import Posts from "./Posts";

// import Divider from "../component/Divider/Divider";
// const arrCount = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

const Product_category = () => {



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
        className="selection-part d-flex align-items-center"
        style={mySelection.row}
      >
        <h5>Refine Selection:</h5>
        <div className="selection-btn">
          {[
            "Select Recipient",
            "Select Relationship",
            "Birthday",
            "Select Personality",
          ].map((variant) => (
            <DropdownButton
              style={mySelection.btn}
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Demo</Dropdown.Item>
              <Dropdown.Item eventKey="2">Demo2</Dropdown.Item>
              <Dropdown.Item eventKey="3">Demo3</Dropdown.Item>
            </DropdownButton>
          ))}
        </div>
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

        <Row>
          <div className="category-filter d-flex align-items-center mb-5">
            <h5>Quick Filter</h5>
            <div className="filter-btn">
              <Button variant="" style={mySelection.filterbtn}>
                Bestseller
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Chocolate Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Exotic Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Designer Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Photo Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Kids Cakes
              </Button>{" "}
            </div>
          </div>
        </Row>
      </Container>
      <Container fluid>
        <div className="row">
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="9,999"
            newPrice="9999"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="batman"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="599"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="blackpanter"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="7999"
            newPrice="7000"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="arthur"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="999"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="kashima"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="7999"
            newPrice="7000"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="arthur"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="999"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="kashima"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="7999"
            newPrice="7000"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="arthur"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="999"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="kashima"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="7999"
            newPrice="7000"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="arthur"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="999"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="kashima"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="7999"
            newPrice="7000"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="arthur"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="999"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="kashima"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="9,999"
            newPrice="9999"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="batman"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="599"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="blackpanter"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="7999"
            newPrice="7000"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="arthur"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="999"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="kashima"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="9,999"
            newPrice="9999"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="batman"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="599"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="blackpanter"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="7999"
            newPrice="7000"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="arthur"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="999"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="kashima"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="9,999"
            newPrice="9999"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="batman"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="599"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="blackpanter"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="7999"
            newPrice="7000"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="arthur"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="999"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="kashima"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="9,999"
            newPrice="9999"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="batman"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="599"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="blackpanter"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Frosty Chocolate Cake (Half Kg)"
            images="../official/Cake_Gifts/flowerwithchocolate.jpg"
            old_price="7999"
            newPrice="7000"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="arthur"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
          <Card
            title="Pineapple Cake with Cerry Topings (Half Kg)"
            images="../official/Cake_Gifts/chocolate.jpg"
            old_price="999"
            newPrice="500"
            rupess="&#x20B9;"
            discount="14% OFF"
            alt="kashima"
            rating="4.3"
            star="&#9733;"
            total_rating="(242)"
            delivery="Same Day Delivery"
          />
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
      <Footer />
    </>
  );
};

export default Product_category;
