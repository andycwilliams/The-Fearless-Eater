// Bootstrap Imports
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const menuItems = [
  {
    itemName: "Bread & Butter",
    itemDescription: "Homemade focaccia, clarified butter",
    itemPrice: 10.75,
  },
  {
    itemName: "Fried Cauliflower Bites",
    itemDescription:
      "Served with choice of ranch (V), Bleu cheese (VEG), or vegan buffalo (V)",
    itemPrice: 14.37,
  },
  {
    itemName: "Hummus Plate",
    itemDescription: "Organic hummus with crudités",
    itemPrice: 12.21,
  },
  {
    itemName: "Mixed Greens",
    itemDescription:
      "Red wine vinaigrette, seasonal fruit, walnuts, blue cheese",
    itemPrice: 20,
  },
  {
    itemName: "Risotto al Funghi",
    itemDescription:
      "Creamy Arborio rice cooked with a medley of wild mushrooms, garlic, and Parmesan cheese.",
    itemPrice: 15.99,
  },
  {
    itemName: "Truffle-infused Lobster Pasta",
    itemDescription:
      "Handmade fettuccine tossed with succulent lobster tail, cherry tomatoes, and a rich truffle cream sauce.",
    itemPrice: 42.5,
  },
  {
    itemName: "Caprese Salad Tower",
    itemDescription:
      "Layers of fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic glaze, served with crispy ciabatta.",
    itemPrice: 12.95,
  },
];

const MenuItem = ({ itemName, itemDescription, itemPrice }) => (
  <div className="mb-2">
    <Card.Title>{itemName}</Card.Title>
    <Card.Text>
      {itemDescription}
      <small className="fw-light">{`$${itemPrice.toFixed(2)}`}</small>
    </Card.Text>
  </div>
);

const MenuImage = () => (
  <Col md={6}>
    <Card.Img
      src="assets/menuImage.jpeg"
      alt="The Fearless Eater menu section"
      className="img-fluid"
      style={{
        borderRadius: "5px",
        boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
      }}
    />
  </Col>
);

const Menu = () => {
  return (
    <Container className="pageSection p-3" id="menu">
      <Row>
        <Col md={6} gap={1}>
          <Card.Title className="text-center fs-2">Menu</Card.Title>
          <Card.Text className="text-center">Small Plates</Card.Text>
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </Col>
        <MenuImage />
      </Row>
    </Container>
  );
};

export default Menu;
