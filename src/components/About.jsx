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

const About = () => {
  return (
    <Container id="about">
      <Row>
        <Col>
          <Card className="text-white">
            <Card.Img
              src="assets\heroImage.jpg"
              alt="The Fearless Eater hero"
              style={{
                height: 200,
              }}
            />
          </Card>
        </Col>
        <Col>
          <Card.Title>About</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            officia consequuntur corrupti velit nulla incidunt laudantium
            quaerat hic, animi aperiam dignissimos nam doloremque ut excepturi
            asperiores omnis tempora at, tempore, voluptas ipsum? Commodi labore
            magni repellat, cum quam excepturi veritatis.
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
