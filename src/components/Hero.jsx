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

import imageTest from "./heroImage.jpg";

const Hero = () => {
  return (
    <div
    // style={{ position: "relative" }}
    >
      <div
        // src="assets\heroImage.jpg"
        alt="The Fearless Eater hero section"
        style={{
          width: "100%",
          // maxWidth: "100%",
          // height: "208px",
          // backgroundImage: "url(assets/heroImage.jpg) no-repeat left -10px",
          backgroundImage: `url("${imageTest}")`,
          height: "100vh",
          // marginTop: "-70px",
          // fontSize: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // overflow: false,
          // margin: 0,
          // padding: 0,
          // boxSizing: "border-box",
        }}
      />
      <Card.ImgOverlay
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          // position: "static",
          color: "#ffffff",
        }}
      >
        <Card.Title>The Fearless Eater</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
      </Card.ImgOverlay>
    </div>
  );
};

export default Hero;
