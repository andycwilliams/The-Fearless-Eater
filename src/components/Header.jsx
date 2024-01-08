// React Imports
import { useState } from "react";
// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      sticky="top"
      expand="md"
      collapseOnSelect
      bg={darkMode ? "dark" : "white"}
      style={{
        borderBottom: `1px solid ${darkMode ? "#fff" : "#000"}`,
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="ps-1 fs-4">
          The Fearless Eater
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="text-center text-md-end d-flex align-items-center">
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
              <Nav.Link href="#accolades">Accolades</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Stack direction="horizontal" className="align-items-center">
                <Form.Check
                  className="m-0"
                  // className="m-2"
                  type="switch"
                  id="light-mode-switch"
                  label=""
                  onClick={toggleDarkMode}
                />
                <img
                  src={
                    darkMode
                      ? "assets/dark_mode_white_24dp.svg"
                      : "assets/light_mode_black_24dp.svg"
                  }
                  alt={darkMode ? "Moon icon" : "Sun icon"}
                  width="24"
                  height="24"
                  // className="ms-2 mb-1"
                />
              </Stack>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
