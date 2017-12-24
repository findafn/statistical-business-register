import React from 'react'
import { Row, Col } from 'reactstrap';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';

class Header extends React.PureComponent {
  render() {
    return (
      <Container>
          <Row>
              <Col className="loc-center">Selamat datang Statistical Bussines Register</Col>
          </Row>
          <Row>
          <Col className="loc-center">
            <h3>Logo SBR</h3>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default Header;