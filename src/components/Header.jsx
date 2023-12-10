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

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Navbar
      // expand="lg"
      className="bg-body-primary justify-content-between"
      // bg="dark"
      // bg="primary"
      // data-bs-theme="dark"
    >
      {/* <Container> */}
      <Navbar.Brand href="/">The Fearless Eater</Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#menu">Menu</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Form.Check
          // className="mb-2"
          type="switch"
          // variant="secondary"
          id="light-and-dark-mode-switch"
          label={darkMode ? "Dark" : "Light"}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
      </Nav>
      {/* </Container> */}
    </Navbar>
  );
};

export default Header;
