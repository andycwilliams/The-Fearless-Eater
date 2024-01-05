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
import ToggleButton from "react-bootstrap/ToggleButton";

const accoladesList = [
  {
    image: "assets/awardPlaceholder1.svg",
    title: "Award 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sunt harum soluta dicta eos nihil libero debitis. Odit, aspernatur harum?",
  },
  {
    image: "assets/awardPlaceholder1.svg",
    title: "Award 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sunt harum soluta dicta eos nihil libero debitis. Odit, aspernatur harum?",
  },
  {
    image: "assets/awardPlaceholder1.svg",
    title: "Award 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sunt harum soluta dicta eos nihil libero debitis. Odit, aspernatur harum?",
  },
];

const Accolades = () => {
  return (
    <Container
      className="pageSection p-3"
      id="accolades"
      // fluid
    >
      <Card.Title className="text-center fs-2">Accolades</Card.Title>
      <Card.Text className="text-center ">
        See some of our awards and recognition.
      </Card.Text>
      <Row className="mt-3">
        {accoladesList.map(({ image, title, description }, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} gap={1}>
            <Card
              className="text-center p-2"
              key={idx}
              style={{ borderRadius: "5%" }}
            >
              <Card.Img
                // variant="top"
                src={image}
                width="140"
                height="140"
                alt=""
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Accolades;
