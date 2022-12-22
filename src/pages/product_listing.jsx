import React,{useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import CardComponent from "../component/Card/CardComponent";
import SingleHeading from "../component/Card/SingleHeading";
import CategoryFilter from "../component/Categories/Category_filter";
import Divider from "../component/Divider/Divider";
import SubFooter from "../layout/Sub_Footer";
import Footer from "../layout/Footer";
const arrCount = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function Product_listing(e) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])
  
  return (
    <>
      <CategoryFilter circle={false} />
      <Divider content="Cakes By Flavours" />
      <Row>
        {arrCount.slice(0, 9).map((el, key) => (
          <SingleHeading />
        ))}
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
              source={
                "../official/Cake_Gifts/flowerwithchocolate.jpg"
              }
              cardContent={"Money Plant In Square Glass Vase"}
              showContent={false}
              value="200"
            />
          </Col>
        ))}
      </Row>
      <SubFooter />
      <Footer />
    </>
  );
}

export default Product_listing;
