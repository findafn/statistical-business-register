import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import { TabContent, TabPane, Table } from 'reactstrap';

import Indikator from './Indikator';
import Umum from './Umum';
import InputSearch from '../commons/InputSearch';

class Detail extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: 'Umum',
    };
  }

  toggle(Item) {
    if (this.state.activeItem !== Item) {
      this.setState({
        activeItem: Item
      });
    }
  }
  
  render() {
    const { activeItem } = this.state
    return (
      <div className="detail-box">
      <Container>
        <Row>
          <Col xs="10">
            <p>Cari berdasarkan ID SBR</p>
            <InputSearch />
          </Col>
        </Row>
        <Row>
          <Col xs="10">
            <Row>
              <Col xs="6">
              <div className="detail-box">
                <Row>
                  <Col xs="6">
                    <Button color="info" active={activeItem === 'Umum'} onClick={() => { this.toggle('Umum'); }}>Variabel Umum</Button>
                  </Col>
                  <Col xs="6">
                    <Button color="info" active={activeItem === 'Indikator'} onClick={() => { this.toggle('Indikator'); }}>Variabel Indikator</Button>
                  </Col>
                </Row><br />
                <p>Daftar Perubahan</p>
                <Row>
                  <Col>
                  <div>
                    <Table>
                      <thead>
                        <tr>
                          <th>Tanggal Perubahan</th>
                          <th>Asal Perubahan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr> */}
                      </tbody>
                    </Table>
                  </div>
                  </Col>
                </Row>
                </div>
              </Col>
              <Col xs="6">
              <TabContent activeTab={activeItem}>
                <TabPane tabId="Umum">
                  <Umum />
                </TabPane>
                <TabPane tabId="Indikator">
                  <Indikator />
                </TabPane>
              </TabContent>
              </Col>
            </Row>
          </Col>
          <Col xs="2">
            <div className="pojok">
              <Button color="info">Ubah Data</Button><br/>
              <Button color="info">Simpan perubahan</Button>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Detail;