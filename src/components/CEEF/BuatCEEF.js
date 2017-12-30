
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, NavItem, NavLink, Input, FormGroup, Label } from 'reactstrap';

class BuatCEEF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>Buat CEEF</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Buat CEEF</ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col sm={6}>
                  <FormGroup>
                    <Label>Masukkan nama CEEF</Label>
                    <Input placeholder="Nama CEEF" value={this.state.namaCeef} onChange={this.onChangeNama} />
                  </FormGroup>
                  <p>Tanggal CEEF: </p>
                  <p>Creator: {this.props.idSBR}</p><hr />
                </Col>
                <Col sm={6}>
                  <FormGroup >
                    <Label>Deskripsi CEEF (Tujuan penggunaan, periode, dan informasi lainnya</Label>
                    <Input style={{ height: 80 }} type="textarea" placeholder="Deskripsi CEEF" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="exampleSelect">Pilih Snapshot</Label>
                    <Input type="select" name="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <p>Pilih unit statistik (bisa >1):</p>
                  <FormGroup tag="fieldset" row>
                    <Col sm={10}>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="1" checked={this.state.unitStatistik === '1'} onChange={this.handleOptStatistik} name="checkbox2" />{' '}
                          Enterprise Group
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="2" checked={this.state.unitStatistik === '2'} onChange={this.handleOptStatistik} name="checkbox3" />{' '}
                          Unit Pengunjung
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="3" checked={this.state.unitStatistik === '3'} onChange={this.handleOptStatistik} name="checkbox4" />{' '}
                          Enterprise
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="4" checked={this.state.unitStatistik === '4'} onChange={this.handleOptStatistik} name="checkbox5" />{' '}
                          Establishment
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                <p>Pilih kategori KBLI (bisa >1):</p>
                  <FormGroup tag="fieldset" row>
                    <Col sm={10}>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="1" checked={this.state.unitStatistik === '1'} onChange={this.handleOptStatistik} name="B" />{' '}
                          B
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="2" checked={this.state.unitStatistik === '2'} onChange={this.handleOptStatistik} name="C" />{' '}
                          C
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="3" checked={this.state.unitStatistik === '3'} onChange={this.handleOptStatistik} name="D" />{' '}
                          D
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="4" checked={this.state.unitStatistik === '4'} onChange={this.handleOptStatistik} name="E" />{' '}
                          E
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="1" checked={this.state.unitStatistik === '1'} onChange={this.handleOptStatistik} name="F" />{' '}
                          F
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="2" checked={this.state.unitStatistik === '2'} onChange={this.handleOptStatistik} name="G" />{' '}
                          G
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="3" checked={this.state.unitStatistik === '3'} onChange={this.handleOptStatistik} name="H" />{' '}
                          H
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="4" checked={this.state.unitStatistik === '4'} onChange={this.handleOptStatistik} name="I" />{' '}
                          I
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="1" checked={this.state.unitStatistik === '1'} onChange={this.handleOptStatistik} name="J" />{' '}
                          J
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="2" checked={this.state.unitStatistik === '2'} onChange={this.handleOptStatistik} name="K" />{' '}
                          K
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="3" checked={this.state.unitStatistik === '3'} onChange={this.handleOptStatistik} name="L" />{' '}
                          L
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="4" checked={this.state.unitStatistik === '4'} onChange={this.handleOptStatistik} name="M" />{' '}
                          M
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="1" checked={this.state.unitStatistik === '1'} onChange={this.handleOptStatistik} name="N" />{' '}
                          N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="2" checked={this.state.unitStatistik === '2'} onChange={this.handleOptStatistik} name="O" />{' '}
                          O
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="3" checked={this.state.unitStatistik === '3'} onChange={this.handleOptStatistik} name="P" />{' '}
                          P
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="4" checked={this.state.unitStatistik === '4'} onChange={this.handleOptStatistik} name="Q" />{' '}
                          Q
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="1" checked={this.state.unitStatistik === '1'} onChange={this.handleOptStatistik} name="R" />{' '}
                          R
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="2" checked={this.state.unitStatistik === '2'} onChange={this.handleOptStatistik} name="S" />{' '}
                          S
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="3" checked={this.state.unitStatistik === '3'} onChange={this.handleOptStatistik} name="T" />{' '}
                          T
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="4" checked={this.state.unitStatistik === '4'} onChange={this.handleOptStatistik} name="U" />{' '}
                          U
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BuatCEEF;