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
// emailjs Imports
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    emailjs
      .sendForm(
        process.env.CONTACT_SERVICE,
        process.env.CONTACT_FORM,
        form.current,
        process.env.YOUR_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
      }, console.error());
    e.target.reset();

    // try {
    //   await setShowAlert(true);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container className="mt-4 px-5 text-center" sm={12} id="contact">
      {/* <form></form> */}
      <Card.Title>Contact</Card.Title>
      <Card.Text>
        To reserve a time,...For questions or special restrictions...We will do
        our best to accommodate your needs.
      </Card.Text>
      <Card.Text>
        You can contact us by phone 555-555-5555, email PLACEHOLDER, or send us
        a message using this form:
      </Card.Text>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contactFormName">
          <Form.Control
            type="password"
            placeholder="Name"
            name="name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactFormEmail">
          <Form.Control
            type="email"
            placeholder="Email address"
            name="email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide an email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactFormReservationTime">
          <Form.Control
            placeholder="Reserve a time (optional)"
            name="reservation"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactFormMessage">
          <Form.Control
            placeholder="Message or requests"
            as="textarea"
            name="message"
            rows={3}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your message or requests.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" id="contactFormCheckbox">
          <Form.Check
            type="checkbox"
            label="Yes, I would like to sign up for the Fearless Eater newsletter"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="rounded-pill">
          Send
        </Button>
      </Form>

      {/* <Alert
        variant={alertVariant}
        className="border border-primary w-50 mx-auto "
      >
        <div>{message}</div>
      </Alert> */}

      {showAlert ? (
        <Alert
          variant={"success"}
          className="border border-primary w-50 mx-auto "
        >
          <div>Message sent!</div>
        </Alert>
      ) : (
        <Alert
          variant={"danger"}
          // style={{ width: "100%" }}
        >
          <Container>
            There was an error sending your message. Please try again.
          </Container>
        </Alert>
      )}
    </Container>
  );
};

export default ContactForm;
