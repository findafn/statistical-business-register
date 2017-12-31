
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, NavItem, NavLink, Input, FormGroup, Label } from 'reactstrap';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class BuatCEEF extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      namaCEEF: '',
      idCEEF: '0',
      unitStatistik: [],
      kodeKBLI: [],
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
      unitStatistik: e,
    }));
    console.log('You have selected:', this.state.unitStatistik);
  }
  handleOptKode(e) {
    this.setState({
      kodeKBLI: e,
    });
    console.log('You have selected:', this.state.kodeKBLI);
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
                  <CheckboxGroup
                    name="unitStatistik"
                    value={this.state.unitStatistik}
                    onChange={this.handleOptStatistik}>

                    <label><Checkbox value="1" /> Enterprise Group</label>
                    <label><Checkbox value="2" /> Unit Penunjang</label><br />
                    <label><Checkbox value="3" /> Enterprise</label><br />
                    <label><Checkbox value="4" /> Establishment</label>
                  </CheckboxGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Pilih kategori KBLI (bisa >1):</p>
                  <CheckboxGroup
                    name="kodeKBLI"
                    value={this.state.kodeKBLI}
                    onChange={this.handleOptKode}>

                    <label><Checkbox value="B" /> B</label>{' '}
                    <label><Checkbox value="C" /> C</label>{' '}
                    <label><Checkbox value="D" /> D</label>{' '}
                    <label><Checkbox value="E" /> E</label>{' '}
                    <label><Checkbox value="F" /> F</label>{' '}
                    <label><Checkbox value="G" /> G</label>{' '}
                    <label><Checkbox value="H" /> H</label>{' '}
                    <label><Checkbox value="I" /> I</label>{' '}
                    <label><Checkbox value="J" /> J</label>{' '}
                    <label><Checkbox value="K" /> K</label>{' '}
                    <label><Checkbox value="L" /> L</label><br />
                    <label><Checkbox value="M" /> M</label>{' '}
                    <label><Checkbox value="N" /> N</label>{' '}
                    <label><Checkbox value="O" /> O</label>{' '}
                    <label><Checkbox value="P" /> P</label>{' '}
                    <label><Checkbox value="Q" /> Q</label>{' '}
                    <label><Checkbox value="R" /> R</label>{' '}
                    <label><Checkbox value="S" /> S</label>{' '}
                    <label><Checkbox value="T" /> T</label>{' '}
                    <label><Checkbox value="U" /> U</label>{' '}
                  </CheckboxGroup>
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