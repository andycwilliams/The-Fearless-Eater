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

const Hero = () => {
  return (
    <>
      <img
        src="assets\heroImage.jpg"
        alt="The Fearless Eater hero section"
        style={{
          // width: "100%",
          // height: "500px",
          // backgroundPosition: "50% 50%",
          // backgroundSize: "auto",
          // backgroundAttachment: "fixed",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundRepeat: "none",
          // backgroundSize: "cover",
          // position: "relative",
        }}
      />
      <br /> <br /> <br /> <br /> <br />
      <Card.ImgOverlay
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <Card.Title>The Fearless Eater</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
      </Card.ImgOverlay>
    </>
  );
};

export default Hero;
