/* eslint-disable no-unused-vars */
// React Imports
import { useEffect, useState } from "react";
// Bootstrap Imports
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Fade from "react-bootstrap/Fade";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Placeholder from "react-bootstrap/Placeholder";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// Other Imports
import dayjs from "dayjs";

const BusinessHours = () => {
  return (
    <Stack
      direction="vertical"
      // gap={1}
    >
      <div className="">Sunday 4pm-9pm</div>
      <div className="">Monday Closed</div>
      <div className="">Tuesday Closed</div>
      <div className="">Wednesday 4pm-9pm</div>
      <div className="">Thursday 4pm-9pm</div>
      <div className="">Friday 4pm-9pm</div>
      <div className="">Saturday 5pm-6pm</div>
    </Stack>
  );
};

const Copyright = () => {
  return (
    <Row className="text-center text-muted my-2">
      <Col
        className=""
        sm={12}
        // md={6}
      >
        {"Copyright ©" + dayjs().year() + "."}
      </Col>
      <Col
        className=""
        sm={12}
        // md={6}
      >
        <a color="inherit" href="/">
          The Fearless Eater
        </a>
      </Col>
    </Row>
  );
};

const Footer = () => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Card.Footer
      className="bg-body-tertiary"
      style={{ borderTop: "1px solid #000000" }}
    >
      <Container
        className="mt-3 pt-3"
        // fluid="md"
        fluid
      >
        <Row>
          <Col sm={12} md={3} className="text-center">
            <h5 component="h3">
              <b>Address</b>
            </h5>
            <Stack
              direction="vertical"
              // gap={1}
              // className="text-align-left"
            >
              <div className="">123 Fake Street</div>
              <div className="">Chicago, IL 11111</div>
            </Stack>
          </Col>
          <Col sm={12} md={3} className="text-center">
            <h5 component="h3">
              <b>Contact</b>
            </h5>
            <Stack
              direction="vertical"
              // gap={1}
            >
              <div className="">
                <b>Phone number:</b> 555-555-5555
              </div>
              <div className="">
                <b>Email:</b> PLACEHOLDER
              </div>
            </Stack>
          </Col>
          <Col sm={12} md={3} className="text-center">
            <h5 component="h3">
              <b>Hours</b>
            </h5>
            <BusinessHours />
          </Col>
          <Col sm={12} md={3} className="text-center">
            <h5 component="h3">
              <b>Follow Us</b>
            </h5>
            <Stack
              direction="vertical"
              // className="justify-content-center"
              // gap={1}
            >
              <Stack
                direction="horizontal"
                className="justify-content-center"
                gap={3}
              >
                <a href="/">
                  <img
                    src="assets\facebook.svg"
                    alt="Facebook icon"
                    width="24"
                    height="24"
                  />
                </a>
                <a href="/">
                  <img
                    src="assets\twitter-x.svg"
                    alt="Twitter-X icon"
                    width="24"
                    height="24"
                  />
                </a>
                <a href="/">
                  <img
                    src="assets\instagram.svg"
                    alt="Instagram icon"
                    width="24"
                    height="24"
                  />
                </a>
              </Stack>
            </Stack>
          </Col>
        </Row>
        <Copyright />
      </Container>
      {showScrollToTopButton && <div onClick={scrollToTop}></div>}
    </Card.Footer>
  );
};

export default Footer;
