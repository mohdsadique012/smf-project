import React from "react";
import { Row, Col } from "react-bootstrap";
import CardComponent from "../component/Card/CardComponent";
import CategoryFilter from "../component/Categories/Category_filter";
import Divider from "../component/Divider/Divider";
import Footer from "../layout/Footer";
import Slider from "react-slick";
import SubFooter from "../layout/Sub_Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const arrCount = [1, 2, 3, 4];
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
  //any thing add fdssdfg
function category() {
  return (
    <>
      <CategoryFilter />
      <Divider content="Cakes By Flavours" />
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
              source={
                "https://www.fnp.com/images/pr/x/v20210407125349/black-forest-designer-cake-half-kg_1.jpg"
              }
              cardContent={"Money Plant In Square Glass Vase"}
              showContent={false}
              value="200"
            />
          </Col>
        ))}
      </Row>
      <Divider content="Cakes By Types" />
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
              source={
                "https://www.fnp.com/images/pr/l/v20211026183515/adorable-monkey-chocolate-truffle-cake_1.jpg"
              }
              cardContent={"Money Plant In Square Glass Vase"}
              showContent={false}
              value="200"
            />
          </Col>
        ))}
      </Row>
      <Divider content="Delicious Cakes" />
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
              source={
                "https://www.fnp.com/images/pr/l/v20200828161920/fruit-overload-cake_1.jpg"
              }
              cardContent={"Money Plant In Square Glass Vase"}
              showContent={false}
              value="200"
            />
          </Col>
        ))}
      </Row>
      <Divider content="Cakes for kids" />
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
              source={
                "https://www.fnp.com/images/pr/l/v20210303165420/rose-paradise-chocolate-cake_1.jpg"
              }
              cardContent={"Half Birthday Cake"}
              showContent={false}
              value="200"
            />
          </Col>
        ))}
      </Row>
      <Divider content="Cartoon Cakes" />
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
              source={
                "https://www.fnp.com/images/pr/x/v20211026183553/cute-pikachu-butterscotch-cake-2-kg_1.jpg"
              }
              cardContent={"Cute Pikachu Butterscotch Cake"}
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
      <SubFooter />
      <Footer />
    </>
  );
}

export default category;
