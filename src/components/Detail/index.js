import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Input, Button } from 'reactstrap';
import { TabContent, TabPane, Table, Nav, NavItem, NavLink } from 'reactstrap';

import Indikator from './Indikator';
import Umum from './Umum';
import InputSearch from '../../commons/InputSearch';
import ButtonSearch from '../../commons/ButtonSearch';
import ButtonHistory from '../../commons/ButtonHistory';
import ChangeLog from '../ChangeLog';


class Detail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.state = {
      activeItem: 'Umum',
      activeHistory: '1',
      idSBR: '',
    };
  }

  toggle(Item) {
    if (this.state.activeItem !== Item) {
      this.setState({
        activeItem: Item
      });
    }
  }

  toggleHistory(History) {
    if (this.state.activeHistory !== History) {
      this.setState({
        activeHistory: History
      });
    }
  }

  onChangeSearch(idSBR) {
    this.setState(p => ({
      ...p,
      idSBR,
    }));
  }

  render() {
    const { activeItem, activeHistory } = this.state
    return (
      <div >
        <TabContent activeTab={activeHistory}>
          <TabPane tabId="1">
            <Container>
              <p>Cari berdasarkan ID SBR</p>
              <Row>
                <Col xs="8">
                  <InputSearch idSBR={this.state.idSBR} onChangeSearch={this.onChangeSearch} />
                </Col>
                <Col xs="4">
                  <ButtonSearch idSBR={this.state.idSBR} />
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <div className="detail-box">
                    <Row>
                      <Col xs="4">
                        <Button outline color="info" active={activeItem === 'Umum'} onClick={() => { this.toggle('Umum'); }}>Variabel Umum</Button>
                      </Col>
                      <Col xs="8">
                        <Button outline color="info" active={activeItem === 'Indikator'} onClick={() => { this.toggle('Indikator'); }}>Variabel Indikator</Button>
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
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                    </Row>
                    <Button color="info" active={activeHistory === '2'} onClick={() => { this.toggleHistory('2'); }}>Lihat Detail History Perubahan</Button>
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
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <ChangeLog />
            <br />
            <Button color="info" active={activeHistory === '1'} onClick={() => { this.toggleHistory('1'); }}>Kembali</Button>
          </TabPane>
        </TabContent>

      </div>
    );
  }
}

export default Detail;