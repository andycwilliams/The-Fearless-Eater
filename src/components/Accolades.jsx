// Bootstrap Imports
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const accoladesList = [
  {
    image: "assets/award_placeholder.svg",
    title: "Culinary Excellence Award",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sunt harum soluta dicta eos nihil libero debitis. Odit, aspernatur harum?",
  },
  {
    image: "assets/award_placeholder.svg",
    title: "Dining Innovation Prize",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sunt harum soluta dicta eos nihil libero debitis. Odit, aspernatur harum?",
  },
  {
    image: "assets/award_placeholder.svg",
    title: "Eatery Achievement Trophy",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sunt harum soluta dicta eos nihil libero debitis. Odit, aspernatur harum?",
  },
  {
    image: "assets/award_placeholder.svg",
    title: "Epicurean Plaque",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sunt harum soluta dicta eos nihil libero debitis. Odit, aspernatur harum?",
  },
];

const AwardCard = ({ image, title, description }) => (
  <Card className="card mb-4 rounded-3 shadow-sm" style={{ height: "auto" }}>
    <Card.Title className="py-3">
      <div className="my-0 fs-5">{title}</div>
    </Card.Title>
    <Card.Img
      className="rounded-3"
      src={image}
      height="120px"
      alt={`Placeholder for ${title}`}
      style={{ backgroundColor: "#fff" }}
    />
    <Card.Body>
      <Card.Text>
        <small>{description}</small>
      </Card.Text>
    </Card.Body>
  </Card>
);

const Accolades = () => {
  return (
    <Container className="pageSection pt-3 px-5 text-center" id="accolades">
      <Card.Title className="fs-2">Accolades</Card.Title>
      <Card.Text>See some of our awards and recognition.</Card.Text>
      <Row>
        {accoladesList.map(({ image, title, description }, idx) => (
          <Col key={idx} xs={12} sm={6} md={3}>
            <AwardCard image={image} title={title} description={description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Accolades;
