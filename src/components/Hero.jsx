import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        aria-label="The Fearless Eater hero section"
        style={{
          width: "100%",
          height: "75vh",
          backgroundImage: `url(assets/heroImage.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Container>
        <Row
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            textAlign: "left",
          }}
        >
          <Col
            xs={12}
            md={6}
            style={{
              color: "#ffffff",
              marginBottom: "25px",
              marginLeft: "25px",
            }}
          >
            <h1 style={{ fontSize: "2.5em" }}>The Fearless Eater</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
