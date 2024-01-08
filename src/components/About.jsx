// Bootstrap Imports
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <Container className="pageSection p-3" id="about">
      <Row>
        <Col md={6}>
          <Image
            src="assets\aboutImage.jpeg"
            alt="The Fearless Eater about section"
            style={{
              borderRadius: "5px",
              boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
            }}
            fluid
          />
        </Col>
        <Col md={6}>
          <Card.Title className="text-center fs-2">About</Card.Title>
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
    </Container>
  );
};

export default About;
