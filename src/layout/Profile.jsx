import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Slider from "react-slick";
import BestSelling from "../component/Card/BestSelling";
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


// import { SocialIcon } from "react-social-icons";
function Profile() {
  return (
    <>
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
    </>
  );
}

export default Profile;
