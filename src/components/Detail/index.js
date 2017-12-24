import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { Form, FormGroup, Label, FormText } from 'reactstrap';

import Indikator from './Indikator';
import Umum from './Umum';

class Detail extends React.PureComponent {
  render() {
    return (
      <div className="detail-box">
      <Container>
        <Row>
          <Col xs="10">
            <p>Cari berdasarkan ID SBR</p>
            <div>
              <InputGroup>
                <Input placeholder="Masukkan ID SBR" />
                <InputGroupAddon>Cari</InputGroupAddon>
              </InputGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="10">
            <Row>
              <Col xs="6">
              <div className="detail-box">
                <Row>
                  <Col xs="6">
                    <Button color="info">Variabel Umum</Button>
                  </Col>
                  <Col xs="6">
                    <Button color="info">Variabel Indikator</Button>
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
                <Umum />
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