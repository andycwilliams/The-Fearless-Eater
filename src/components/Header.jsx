// React Imports
import { useState } from "react";
// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <Navbar
      sticky="top"
      // className="bg-white"
      expand="md"
      collapseOnSelect
      // className="bg-body-primary"
      // className="bg-body-primary justify-content-between"
      bg={darkMode ? "dark" : "white"}
      // bg="primary"
      style={{
        // display: "flex",
        // justifyContent: "between",
        borderBottom: "1px solid #000",
        // borderBottom: {
        //   ...(darkMode ? "1px solid #fff" : "1px solid #000"),
        // },
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
        <Navbar.Collapse className="justify-content-end flex-grow-1 pe-1">
          <Nav>
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
              <Nav.Link href="#accolades">Accolades</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Form.Check
                className="m-2"
                type="switch"
                id="light-mode-switch"
                label={
                  darkMode ? (
                    <img
                      src="assets\dark_mode_white_24dp.svg"
                      alt="Moon icon"
                    />
                  ) : (
                    <img
                      src="assets\light_mode_black_24dp.svg"
                      alt="Sun icon"
                    />
                  )
                }
                onClick={toggleDarkMode}
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
