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
      expand="md"
      // className="bg-body-primary"
      // className="bg-body-primary justify-content-between"
      // bg="dark"
      // bg="primary"
      // data-bs-theme="dark"
      sticky="top"
      collapseOnSelect
      // className="bg-body-tertiary justify-content-between"
      style={{
        backgroundColor: "white",
        // display: "flex",
        // justifyContent: "between",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#home"
          className="justify-content-start flex-grow-1 ps-1"
        >
          The Fearless Eater
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-end flex-grow-1 pe-1"
          // className="justify-content-end"
        >
          <Nav
          // className="me-auto"
          >
            <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#menu">Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Form.Check
                className="m-2"
                type="switch"
                // variant="secondary"
                id="light-mode-switch"
                label={
                  darkMode ? (
                    <img src="assets\moon.svg" alt="Moon icon" />
                  ) : (
                    <img src="assets\sun.svg" alt="Sun icon" />
                  )
                }
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
