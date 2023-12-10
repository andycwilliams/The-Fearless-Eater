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

const menuItems = [
  {
    itemName: "Bread & Butter",
    itemDescription: "Homemade focaccia, clarified butter",
    itemPrice: 10.75,
  },
  {
    itemName: "Fried Cauliflower Bites",
    itemDescription:
      "Served with choice of ranch (V), Bleu cheese (VEG), or vegan buffalo (V)",
    itemPrice: 14.37,
  },
  {
    itemName: "Hummus Plate",
    itemDescription: "Organic hummus with crudités",
    itemPrice: 12.21,
  },
  {
    itemName: "Mixed Greens",
    itemDescription:
      "Red wine vinaigrette, seasonal fruit, walnuts, blue cheese",
    itemPrice: 20,
  },
];

const Menu = () => {
  return (
    <Container id="menu">

        <Card.Title>Menu</Card.Title>
        <Card.Title>Small Plates</Card.Title>
        <Row>
          <Col>
            <Card.Img
              src="assets\heroImage.jpg"
              alt="The Fearless Eater hero"
              style={{
                height: 150,
                width: 150,
              }}
            />
          </Col>
          <Col>
            {menuItems.map(({ itemName, itemDescription, itemPrice }) => (
              <div key={itemName}>
                <Card.Title>{itemName}</Card.Title>
                <Card.Text>
                  <small>{itemDescription + " " + itemPrice}</small>
                </Card.Text>
              </div>
            ))}
          </Col>
        </Row>
  
    </Container>
  );
};

export default Menu;
