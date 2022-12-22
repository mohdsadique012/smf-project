import SubFooter from "../layout/Sub_Footer";
import Footer from "../layout/Footer";
import React from "react";
import CardComponent from "../component/Card/CardComponent";
import Divider from "../component/Divider/Divider";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import {
  Row,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
  Container,
  Col,
} from "react-bootstrap";
const arrCount = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const product_categories = () => {
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
      padding: "12px 35px",
      fontWeight: "700",
      marginRight: "2rem",
      marginBottom: "2rem",
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

  return (
    <>
      <Row>
        <div className="highlight-title p-2">
          <a href="/">
            Home <i class="fa-solid fa-chevron-right"></i>
          </a>
          <a href="">
            Cakes <i class="fa-solid fa-chevron-right"></i>
          </a>
          <a href="">
            All Cakes <i class="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </Row>
      <div
        className="selection-part d-flex align-items-center"
        style={mySelection.row}
      >
        {/* <h5>Refine Selection:</h5> */}
        <div className="selection-btn">
          {[
            "Select Cake Type",
            "Select Weight",
            "Select Shapes",
            "Select Favor",
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
      <Container fluid>
        <Row>
          <div
            className="category-title d-flex align-items-center"
            style={{ marginBottom: 30, marginTop: 30 }}
          >
            <h3 style={{ marginLeft: 50 }}>All Cakes</h3>
          </div>
        </Row>
        <Row>
          <div
            className="category-filter d-flex align-items-center mb-3"
            style={{ marginLeft: 0 }}
          >
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
                Mango Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Cartoon Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Designer Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Photo Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Birthday Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Love Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Kids Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Anniversary Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                Cartoon Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                ICE Cakes
              </Button>{" "}
              <Button variant="" style={mySelection.filterbtn}>
                New Cakes
              </Button>{" "}
            </div>
          </div>
        </Row>
        <Row>
          {arrCount.map((el, key) => (
            <Col
              key={key}
              className="home-card-layout"
              xs={12}
              sm={6}
              lg={4}
              xl={3}
            >
              <CardComponent
                source={"../official/Cake_Gifts/chocolate.jpg"}
                cardContent={"Money Plant In Square Glass Vase"}
                showContent={false}
                value="200"
              />
            </Col>
          ))}
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
      <SubFooter />
      <Footer />
    </>
  );
};

export default product_categories;
