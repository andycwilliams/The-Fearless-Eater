// React Imports
import { useState } from "react";
// Bootstrap Imports
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// emailjs Imports
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageFailure, setMessageFailure] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
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

    try {
      await setShowAlert(true);
    } catch (error) {
      console.log(error);
      setMessageFailure(true);
    } finally {
      setTimeout(() => {
        setShowAlert(false);
        setMessageSuccess(true);
      }, 1000);
    }
  };

  return (
    <Container
      className="pageSection p-3"
      id="contact"
      // className="mt-5 px-5"
      // sm={12}
      // fluid
      style={{ maxWidth: "600px" }}
    >
      <Card.Title className="text-center">
        <h2>Contact</h2>
      </Card.Title>
      <Card.Text
      // className="px-5"
      >
        Contact us to reserve a time, add dietary restrictions, or simply to ask
        question. We do our best to accommodate all needs.
      </Card.Text>
      <Card.Text
      // className="px-5"
      >
        You can reach us by phone (555) 555-5555, by email example@address.com,
        or simply send us a message using this form:
      </Card.Text>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group
            as={Col}
            className="mb-3"
            controlId="contactFormName"
            md={6}
          >
            <Form.Control type="name" placeholder="Name" name="name" required />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="contactFormEmail">
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
        </Row>

        <Form.Group
          as={Col}
          className="mb-3"
          controlId="contactFormReservationTime"
        >
          <Form.Control
            placeholder="Reserve a time (optional)"
            name="reservation"
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="contactFormMessage">
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

        <Form.Group as={Col} className="mb-3" id="contactFormCheckbox">
          <Form.Check
            type="checkbox"
            label="Yes, I would like to sign up for the Fearless Eater newsletter"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="rounded-pill"
          style={{ minWidth: "100px" }}
        >
          Send
        </Button>
      </Form>

      {messageSuccess ? (
        <Alert variant="success" className="mx-auto">
          Your message was successfully sent!
        </Alert>
      ) : null}
      {messageFailure ? (
        <Alert variant="danger" className="mx-auto">
          There was an error. Please try again.
        </Alert>
      ) : null}
    </Container>
  );
};

export default ContactForm;
