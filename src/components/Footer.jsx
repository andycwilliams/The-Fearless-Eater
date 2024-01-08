// React Imports
import { useEffect, useState } from "react";
// Bootstrap Imports
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
// Dependency Imports
import dayjs from "dayjs";

const BusinessHours = () => {
  return (
    <Stack direction="vertical">
      <small>Sunday 4pm-9pm</small>
      <small>Monday Closed</small>
      <small>Tuesday Closed</small>
      <small>Wednesday 4pm-9pm</small>
      <small>Thursday 4pm-9pm</small>
      <small>Friday 4pm-9pm</small>
      <small>Saturday 5pm-6pm</small>
    </Stack>
  );
};

const SocialLinkas = () => (
  <Stack direction="vertical">
    <Stack direction="horizontal" className="justify-content-center" gap={3}>
      <a href="/" aria-label="Facebook">
        <img
          src="assets/facebook.svg"
          alt="Facebook icon"
          width="24"
          height="24"
        />
      </a>
      <a href="/" aria-label="Twitter-X">
        <img
          src="assets/twitter-x.svg"
          alt="Twitter-X icon"
          width="24"
          height="24"
        />
      </a>
      <a href="/" aria-label="Instagram">
        <img
          src="assets/instagram.svg"
          alt="Instagram icon"
          width="24"
          height="24"
        />
      </a>
    </Stack>
  </Stack>
);

const Copyright = () => {
  const currentYear = dayjs().year();

  return (
    <Row className="text-center py-3 border-top bg-body-secondary">
      <Col className="text-muted" xs={12}>
        The Fearless Eater &copy; {currentYear}
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
      className="pageSection bg-body-tertiary"
      style={{ borderTop: "1px solid #000000" }}
    >
      <Container className="pt-3" fluid>
        <Row>
          <Col xs={12} sm={6} md={3} className="text-center">
            <h5>
              <b>Address</b>
            </h5>
            <address>
              <Stack direction="vertical" className="mb-3">
                <small>123 Fake Street</small>
                <small>Chicago, IL 11111</small>
              </Stack>
            </address>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center">
            <h5>
              <b>Contact</b>
            </h5>
            <Stack direction="vertical" className="mb-3">
              <small>
                <b>Phone number:</b> (555) 555-5555
              </small>
              <small>
                <b>Email:</b> example@address.com
              </small>
            </Stack>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center mb-3">
            <h5>
              <b>Hours</b>
            </h5>
            <BusinessHours />
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center mb-3">
            <h5>
              <b>Follow Us</b>
            </h5>
            <SocialLinkas />
          </Col>
        </Row>
        <Copyright />
      </Container>
      {showScrollToTopButton && <small onClick={scrollToTop}></small>}
    </Card.Footer>
  );
};

export default Footer;
