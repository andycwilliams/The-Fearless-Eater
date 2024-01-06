// Bootstrap Imports
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const menuItems = [
  {
    itemName: "Bread & Butter",
    itemDescription: "Homemade focaccia, clarified butter",
    itemPrice: "10.75",
  },
  {
    itemName: "Fried Cauliflower Bites",
    itemDescription:
      "Served with choice of ranch (V), Bleu cheese (VEG), or vegan buffalo (V)",
    itemPrice: " 14.37",
  },
  {
    itemName: "Hummus Plate",
    itemDescription: "Organic hummus with crudités",
    itemPrice: "12.21",
  },
  {
    itemName: "Mixed Greens",
    itemDescription:
      "Red wine vinaigrette, seasonal fruit, walnuts, blue cheese",
    itemPrice: "20",
  },
  {
    itemName: "item",
    itemDescription: "description",
    itemPrice: "9001",
  },
  {
    itemName: "item",
    itemDescription: "description",
    itemPrice: "400,000",
  },
  {
    itemName: "item",
    itemDescription: "description",
    itemPrice: "400",
  },
];

const Menu = () => {
  return (
    <Container
      className="pageSection p-3"
      id="menu"
      style={
        {
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "flex-start",
          // alignItems: "center",
        }
      }
    >
      <Row>
        <Col
          md={6}
          // className="p-3"
          gap={1}
        >
          <Card.Title className="text-center fs-2">Menu</Card.Title>
          <Card.Text className="text-center">Small Plates</Card.Text>
          {menuItems.map(({ itemName, itemDescription, itemPrice }, idx) => (
            <div
              key={idx}
              // style={{ padding: 10 }}
              className="mb-2"
            >
              <Card.Title>{itemName}</Card.Title>
              <Card.Text>
                {itemDescription}{" "}
                <small className="fw-light">{itemPrice}</small>
              </Card.Text>
            </div>
          ))}
        </Col>
        <Col md={6}>
          <Card.Img
            src="assets\menuImage.jpeg"
            alt="The Fearless Eater menu section"
            style={{
              // height: 150,
              // width: 150,
              // margin: "5px",
              // padding: "5px",
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "flex-start",
              // alignItems: "center",
              borderRadius: "5px",
              boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
