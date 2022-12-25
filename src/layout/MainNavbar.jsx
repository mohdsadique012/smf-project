import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  FaTaxi,
  FaPlane,
  FaRupeeSign,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";

import styles from "./MainNavbar.module.css";
import "./burgermenu.css";
import { GiCakeSlice } from "react-icons/gi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Col, Row } from "react-bootstrap";
import CardComponentForMenu from "../component/Card/CardComponentForMenu";
import { AiFillHeart } from "react-icons/ai";
import { BiSearchAlt, BiPhone, BiMailSend } from "react-icons/bi";

// import Sidebar from './Sidebar/Sidebar';
import { Link } from "react-router-dom";

function MainNavbar({ cartOpen }) {
  const arrCount = [1, 2, 3, 4, 5, 6];
  const [tabIndex, setTabIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  console.log(cartOpen,"giuyhgh")
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards",
  };

  return (
    <>
      <Navbar className={styles.Navbar} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" id={styles.Brand}>
            <Link to="/">
              <img src="logo/SendMyFeelings-01.png" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form id={styles.inputTag} className="d-flex mx-auto MenuInput">
              <Form.Control
                type="search"
                placeholder="Search for gifts, flowers & cakes"
                className="me-2 w-100 d-block"
                aria-label="Search"
              />
              <BiSearchAlt />
            </Form>

            <div className="icons-navbar">
              <Nav
                className="d-flex navbar-icons mx-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">
                  <AiFillHeart />
                  <p>WishList</p>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <BiMailSend />
                  <p>Mail us</p>
                </Nav.Link>
                <NavDropdown
                  title={<FaRupeeSign />}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Indian</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Canadian</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link href="#action2" onClick={cartOpen}>
                  <FaShoppingCart />
                  <p>Cart</p>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Login">
                    <FaUserAlt />
                  </Link>
                  <p>Sign-in</p>
                </Nav.Link>
              </Nav>
              <Nav.Link className="phoneNumber">
                <Link to="#!">
                  <BiPhone />
                  7424012345
                </Link>
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.SubNavbar} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" id={styles.SubBrand}>
            <input
              type="checkbox"
              onClick={() => setShowMenu(!showMenu)}
              id="burger-toggle"
            />
            <label htmlFor="burger-toggle" class="burger-menu">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </label>
          </Navbar.Brand>
          <h5>Browse Gifts</h5>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id={styles.subNavbarScroll}>
            <Nav
              className="d-flex SubMenuLinks my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link>
                <Link to="/checkout_details">
                  Checkout Details
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cart">
                  Open Cart
                </Link>
              </Nav.Link>
              <Nav.Link>

                <Link to="/categories">
                  Categories
                </Link>
              </Nav.Link> */}
              <Nav.Link href="#action1"style={{fontSize: "1.2rem"}}>Same Day Delivery Gifts</Nav.Link>
              <Nav.Link href="#action1" style={{fontSize: "1.2rem"}}>Birthday Gifts</Nav.Link>
              <Nav.Link href="#action1" style={{fontSize: "1.2rem"}}>Plants</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showMenu ? (
        <div style={unmountedStyle} className="BorderInception menu">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(tabIndex) => setTabIndex(tabIndex)}
          >
            <TabList>
              <Tab onMouseEnter={() => setTabIndex(0)}>
                <GiCakeSlice />
                <p>Birthday</p>
              </Tab>
              <Tab onMouseEnter={() => setTabIndex(1)}>
                <GiCakeSlice />
                <p>Special Gift</p>
              </Tab>
              <Tab onMouseEnter={() => setTabIndex(2)}>
                <GiCakeSlice />
                <p>Flowers</p>
              </Tab>
              <Tab onMouseEnter={() => setTabIndex(3)}>
                <GiCakeSlice />
                <p>Cakes</p>
              </Tab>
              <Tab onMouseEnter={() => setTabIndex(4)}>
                <GiCakeSlice />
                <p>Personlized</p>
              </Tab>
              <Tab onMouseEnter={() => setTabIndex(5)}>
                <GiCakeSlice />
                <p>For Her</p>
              </Tab>
              <Tab onMouseEnter={() => setTabIndex(6)}>
                <GiCakeSlice />
                <p>Occasions</p>
              </Tab>
              <Tab onMouseEnter={() => setTabIndex(7)}>
                <GiCakeSlice />
                <p>State Wise</p>
              </Tab>
              <Tab onMouseEnter={() => setTabIndex(8)}>
                <GiCakeSlice />
                <p>Last One</p>
              </Tab>
            </TabList>

            <TabPanel>
              <Container fluid>
                <Row>
                  {arrCount.map((el, key) => (
                    <Col
                      key={key}
                      className="home-card-layout"
                      xs={12}
                      sm={6}
                      lg={3}
                      xl={2}
                    >
                      <CardComponentForMenu
                        menuCards={true}
                        title="Birthday"
                        value="200"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container fluid>
                <Row>
                  {arrCount.map((el, key) => (
                    <Col
                      key={key}
                      className="home-card-layout"
                      xs={12}
                      sm={6}
                      lg={3}
                      xl={2}
                    >
                      <CardComponentForMenu
                        menuCards={true}
                        title="Special Gift"
                        value="200"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container fluid>
                <Row>
                  {arrCount.map((el, key) => (
                    <Col
                      key={key}
                      className="home-card-layout"
                      xs={12}
                      sm={6}
                      lg={3}
                      xl={2}
                    >
                      <CardComponentForMenu
                        menuCards={true}
                        title="Flowers"
                        value="200"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container fluid>
                <Row>
                  {arrCount.map((el, key) => (
                    <Col
                      key={key}
                      className="home-card-layout"
                      xs={12}
                      sm={6}
                      lg={3}
                      xl={2}
                    >
                      <CardComponentForMenu
                        menuCards={true}
                        title="Cakes"
                        value="200"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container fluid>
                <Row>
                  {arrCount.map((el, key) => (
                    <Col
                      key={key}
                      className="home-card-layout"
                      xs={12}
                      sm={6}
                      lg={3}
                      xl={2}
                    >
                      <CardComponentForMenu
                        menuCards={true}
                        title="Personlized"
                        value="200"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container fluid>
                <Row>
                  {arrCount.map((el, key) => (
                    <Col
                      key={key}
                      className="home-card-layout"
                      xs={12}
                      sm={6}
                      lg={3}
                      xl={2}
                    >
                      <CardComponentForMenu
                        menuCards={true}
                        title="For Her"
                        value="200"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container fluid>
                <Row>
                  {arrCount.map((el, key) => (
                    <Col
                      key={key}
                      className="home-card-layout"
                      xs={12}
                      sm={6}
                      lg={3}
                      xl={2}
                    >
                      <CardComponentForMenu
                        menuCards={true}
                        title="Occassions"
                        value="200"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container fluid>
                <Row>
                  {arrCount.map((el, key) => (
                    <Col
                      key={key}
                      className="home-card-layout"
                      xs={12}
                      sm={6}
                      lg={3}
                      xl={2}
                    >
                      <CardComponentForMenu
                        menuCards={true}
                        title="State Wise"
                        value="200"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container fluid>
                <Row>
                  {arrCount.map((el, key) => (
                    <Col
                      key={key}
                      className="home-card-layout"
                      xs={12}
                      sm={6}
                      lg={3}
                      xl={2}
                    >
                      <CardComponentForMenu
                        menuCards={true}
                        title="Last One"
                        value="200"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </TabPanel>
          </Tabs>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default MainNavbar;
