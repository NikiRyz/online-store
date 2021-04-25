import React from "react";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from '../components/TypeBar'
const Shop = observer(() => {
  return (
    <Container fluid>
      <Row className="mt-2">
        <Col md={3}>
            <TypeBar/>
        </Col>
        <Col md={9}>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
