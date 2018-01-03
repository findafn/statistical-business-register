import React from 'react'
import { Row, Col } from 'reactstrap';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';

import logo from '../../assets/sbr.png'

class Header extends React.PureComponent {
  render() {
    return (
      <Container>
          {/* <Row>
              <Col className="loc-center">Selamat datang Statistical Bussines Register</Col>
          </Row> */}
          <Row>
          <Col className="loc-center">
            <img style={{marginTop: "15px"}}src={logo} width="220px"/>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default Header;