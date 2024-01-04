// React Imports
import { useState } from "react";
// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {};

  return (
    <Navbar
      expand="md"
      sticky="top"
      collapseOnSelect
      // className="bg-body-primary"
      // className="bg-body-primary justify-content-between"
      // bg="dark"
      // bg="primary"
      // data-bs-theme="dark"
      style={{
        backgroundColor: "#ffffff",
        // display: "flex",
        // justifyContent: "between",
        borderBottom: "1px solid #000000",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#home"
          className="justify-content-start flex-grow-1 ps-1 fs-4"
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
            <Nav.Item className="navButton">
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
                // onClick={() => {
                //   setDarkMode(!darkMode);
                // }}
                onChange={toggleDarkMode}
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
