import { Row, Col, Container } from "react-bootstrap";

const ProductList = ({ auth, setAuth, activePage, setactivePage }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
