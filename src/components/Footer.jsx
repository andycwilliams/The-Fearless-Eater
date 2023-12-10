/* eslint-disable no-unused-vars */
// React Imports
import { useState } from "react";
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

const Footer = () => {
  return (
    <Card.Footer className="text-center">
      <Container>
        <Row>
          <Col>
            <Stack direction="vertical" gap={0}>
              <div className="">Address</div>
              <div className="">123 Fake Street</div>
              <div className="">Chicago, IL 11111</div>
            </Stack>
          </Col>
          <Col>
            <Stack direction="vertical" gap={0}>
              <div className="">Phone number/email</div>
              <div className="">555-555-5555</div>
              <div className="">PLACEHOLDER</div>
            </Stack>
          </Col>
          <Col>
            <Stack direction="vertical" gap={0}>
              <div className="">Hours</div>
              <div className="">Sunday 4-9 PM</div>
              <div className="">Monday Closed</div>
              <div className="">Tuesday Closed</div>
              <div className="">Wednesday 4-9 PM</div>
              <div className="">Thursday 4-9 PM</div>
              <div className="">Friday 4-9 PM</div>
              <div className="">Saturday 5-6 PM</div>
            </Stack>
          </Col>
          <Col>
            <Stack direction="vertical" gap={0}>
              <div className="">Social media links</div>
              <div className="">Links</div>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col className="text-muted">
            {"Copyright ©" + dayjs().year()}
            <a color="inherit" href="/">
              The Fearless Eater
            </a>
            {"."}
          </Col>
        </Row>
      </Container>
    </Card.Footer>
  );
};

export default Footer;
