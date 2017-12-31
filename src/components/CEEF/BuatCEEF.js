
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, NavItem, NavLink, Input, FormGroup, Label } from 'reactstrap';

class BuatCEEF extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      namaCEEF: '',
      idCEEF: '0',
      unitStatistik: '',
      kodeKBLI: 'A',
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onChangeNama = this.onChangeNama.bind(this);
    this.handleOptStatistik = this.handleOptStatistik.bind(this);
    this.handleOptKode = this.handleOptKode.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChangeNama(e) {
    this.setState({
      namaCEEF: e.value.target,
    });
    e.persist();
  }
  handleOptStatistik(e) {
    this.setState(p => ({
      ...p,
      unitStatistik: e.target.value,
    }));
    console.log('You have selected:', this.state.unitStatistik);
    e.persist();
  }
  handleOptKode(e) {
    this.setState({
      kodeKBLI: e.target.value,
    });
    console.log('You have selected:', this.state.kodeKBLI);
    e.persist();
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggleModal}>Buat CEEF</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}>Buat CEEF</ModalHeader>
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
               
                    <Col sm={10}>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" value="1" checked={this.state.unitStatistik === '1'} onChange={this.handleOptStatistik} name="checkbox2" />{' '}
                          Enterprise Group
                      </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" value="2" checked={this.state.unitStatistik === '2'} onChange={this.handleOptStatistik} name="checkbox3" />{' '}
                          Unit Pengunjung
                      </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" value="3" checked={this.state.unitStatistik === '3'} onChange={this.handleOptStatistik} name="checkbox4" />{' '}
                          Enterprise
                      </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" value="4" checked={this.state.unitStatistik === '4'} onChange={this.handleOptStatistik} name="checkbox5" />{' '}
                          Establishment
                      </Label>
                      </FormGroup>
                    </Col>
               
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Pilih kategori KBLI (bisa >1):</p>
                  <FormGroup tag="fieldset" row>
                    <Col sm={10}>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="B" checked={this.state.kodeKBLI === 'B'} onChange={this.handleOptKode} name="B" />{' '}
                          B
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="C" checked={this.state.kodeKBLI === 'C'} onChange={this.handleOptKode} name="C" />{' '}
                          C
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="D" checked={this.state.kodeKBLI === 'D'} onChange={this.handleOptKode} name="D" />{' '}
                          D
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="E" checked={this.state.kodeKBLI === 'E'} onChange={this.handleOptKode} name="E" />{' '}
                          E
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="F" checked={this.state.kodeKBLI === 'F'} onChange={this.handleOptKode} name="F" />{' '}
                          F
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="G" checked={this.state.kodeKBLI === 'G'} onChange={this.handleOptKode} name="G" />{' '}
                          G
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="H" checked={this.state.kodeKBLI === 'H'} onChange={this.handleOptKode} name="H" />{' '}
                          H
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="I" checked={this.state.kodeKBLI === 'I'} onChange={this.handleOptKode} name="I" />{' '}
                          I
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="J" checked={this.state.kodeKBLI === 'J'} onChange={this.handleOptKode} name="J" />{' '}
                          J
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="K" checked={this.state.kodeKBLI === 'K'} onChange={this.handleOptKode} name="K" />{' '}
                          K
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="L" checked={this.state.kodeKBLI === 'L'} onChange={this.handleOptKode} name="L" />{' '}
                          L
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="M" checked={this.state.kodeKBLI === 'M'} onChange={this.handleOptKode} name="M" />{' '}
                          M
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="N" checked={this.state.kodeKBLI === 'N'} onChange={this.handleOptKode} name="N" />{' '}
                          N
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="O" checked={this.state.kodeKBLI === 'O'} onChange={this.handleOptKode} name="O" />{' '}
                          O
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="P" checked={this.state.kodeKBLI === 'P'} onChange={this.handleOptKode} name="P" />{' '}
                          P
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="Q" checked={this.state.kodeKBLI === 'Q'} onChange={this.handleOptKode} name="Q" />{' '}
                          Q
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="R" checked={this.state.kodeKBLI === 'R'} onChange={this.handleOptKode} name="R" />{' '}
                          R
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="S" checked={this.state.kodeKBLI === 'S'} onChange={this.handleOptKode} name="S" />{' '}
                          S
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="T" checked={this.state.kodeKBLI === 'T'} onChange={this.handleOptKode} name="T" />{' '}
                          T
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" value="U" checked={this.state.kodeKBLI === 'U'} onChange={this.handleOptKode} name="U" />{' '}
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
            <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BuatCEEF;