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
    <Container className="pageSection" id="about" fluid>
      {/* <Fade in> */}
      <Row
      // className="col-md-8"
      >
        <Col
          // sm="true"
          sm={6}
        >
          <Image
            src="assets\aboutImage.jpeg"
            alt="The Fearless Eater about section"
            style={{
              // height: 200,
              // backgroundSize: "cover",
              // backgroundSize: "contain",
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              // mx: "auto",
              // objectFit: "contain",
              // maxWidth: "90%",
              // height: '70px',
              // mb: "15%",
              // padding: 50,
              borderRadius: "5px",
            }}
          />
        </Col>
        <Col
          // sm="true"
          sm={6}
          className="p-3"
          style={
            {
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "flex-start",
              // alignItems: "center",
            }
          }
        >
          <Card.Title className="text-center">
            <h2>About</h2>
          </Card.Title>
          <Card.Text className="text-center">
            <>Est. 1997</>
          </Card.Text>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            perferendis tempora alias magnam placeat mollitia asperiores
            aspernatur quae unde, modi fuga dignissimos repellat sit, dolorem
            pariatur natus dolorum. Quo asperiores laborum, consequuntur
            reiciendis amet necessitatibus molestiae!
          </Card.Text>
          <Card.Text>
            Iure vel quae repellendus quo quidem non corporis, aperiam in
            nesciunt nam maxime debitis tempora sint ex at consequatur excepturi
            cum dolore laudantium velit eaque laboriosam praesentium doloribus.
            Consequuntur fuga soluta culpa voluptatem, at accusamus laudantium
            explicabo necessitatibus, vero eligendi dignissimos ad saepe
            reiciendis consequatur harum amet officia molestiae quam cumque
            libero dolores magni illum iusto! Harum adipisci, aspernatur non
            totam ullam asperiores quasi!
          </Card.Text>
        </Col>
      </Row>
      {/* </Fade> */}
    </Container>
  );
};

export default About;
