import React from 'react'
import ReactTable from 'react-table';
import { Button, Nav, NavItem, NavLink, } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, Input, FormGroup, Label } from 'reactstrap';

import { makeData, Logo, Tips } from "./Utils";
import HapusCEEF from './HapusCEEF';

import BuatCEEF from './BuatCEEF';
class CEEF extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      isOpen: false,
      modal: false,
      namaCEEF: '',
      idCEEF: '0',
      idSBR: '0',
      unitStatistik: '',
      kodeKBLI: 'A',
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onChangeNama = this.onChangeNama.bind(this);
    this.handleOptStatistik = this.handleOptStatistik.bind(this);
    this.handleOptKode = this.handleOptKode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({
      unitStatistik: e.target.value,
    });
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

  handleSubmit(e) {
    e.preventDefault();
    console.log('state: ', this.state);
  }


  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <div>
            {/* <Button color="info" onClick={this.toggleModal}>Buat CEEF</Button> */}
            <BuatCEEF />
            {/* <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
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
                      <FormGroup tag="fieldset" row>
                        <Col sm={10}>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="enterpriseGrop" checked={this.state.unitStatistik === 'enterpriseGrop'} onChange={this.handleOptStatistik} name="checkbox2" />{' '}
                              Enterprise Group
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="unitPenunjang" checked={this.state.unitStatistik === 'unitPenunjang'} onChange={this.handleOptStatistik} name="checkbox3" />{' '}
                              Unit Penunjang
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="enterprise" checked={this.state.unitStatistik === 'enterprise'} onChange={this.handleOptStatistik} name="checkbox4" />{' '}
                              Enterprise
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="establishment" checked={this.state.unitStatistik === 'establishment'} onChange={this.handleOptStatistik} name="checkbox5" />{' '}
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
                              <Input type="checkbox" value="B" checked={this.state.kodeKBLI === 'B'} onChange={this.handleOptkode} name="B" />{' '}
                              B
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="C" checked={this.state.kodeKBLI === 'C'} onChange={this.handleOptkode} name="C" />{' '}
                              C
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="D" checked={this.state.kodeKBLI === 'D'} onChange={this.handleOptkode} name="D" />{' '}
                              D
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="E" checked={this.state.kodeKBLI === 'E'} onChange={this.handleOptkode} name="E" />{' '}
                              E
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="F" checked={this.state.kodeKBLI === 'F'} onChange={this.handleOptkode} name="F" />{' '}
                              F
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="G" checked={this.state.kodeKBLI === 'G'} onChange={this.handleOptkode} name="G" />{' '}
                              G
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="H" checked={this.state.kodeKBLI === 'H'} onChange={this.handleOptkode} name="H" />{' '}
                              H
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="I" checked={this.state.kodeKBLI === 'I'} onChange={this.handleOptkode} name="I" />{' '}
                              I
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="J" checked={this.state.kodeKBLI === 'J'} onChange={this.handleOptkode} name="J" />{' '}
                              J
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="K" checked={this.state.kodeKBLI === 'K'} onChange={this.handleOptkode} name="K" />{' '}
                              K
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="L" checked={this.state.kodeKBLI === 'L'} onChange={this.handleOptkode} name="L" />{' '}
                              L
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="M" checked={this.state.kodeKBLI === 'M'} onChange={this.handleOptkode} name="M" />{' '}
                              M
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="N" checked={this.state.kodeKBLI === 'N'} onChange={this.handleOptkode} name="N" />{' '}
                              N
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="O" checked={this.state.kodeKBLI === 'O'} onChange={this.handleOptkode} name="O" />{' '}
                              O
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="P" checked={this.state.kodeKBLI === 'P'} onChange={this.handleOptkode} name="P" />{' '}
                              P
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="Q" checked={this.state.kodeKBLI === 'Q'} onChange={this.handleOptkode} name="Q" />{' '}
                              Q
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="R" checked={this.state.kodeKBLI === 'R'} onChange={this.handleOptkode} name="R" />{' '}
                              R
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="S" checked={this.state.kodeKBLI === 'S'} onChange={this.handleOptkode} name="S" />{' '}
                              S
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="T" checked={this.state.kodeKBLI === 'T'} onChange={this.handleOptkode} name="T" />{' '}
                              T
                        </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" value="U" checked={this.state.kodeKBLI === 'U'} onChange={this.handleOptkode} name="U" />{' '}
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
            </Modal> */}
          </div>
        </div>
        <div className="loc-center">Jumlah Total Perusahaan :</div>
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Nama CEEF",
                accessor: "namaCEEF"
              },
              {
                Header: "Tanggal Pembuatan",
                accessor: "tanggalPembuatan"
              },
              {
                Header: "Jumlah Establishment (sesuai kriteria)",
                accessor: "jumlahEst"
              },
              {
                Header: "Deskripsi",
                accessor: "deskripsi"
              },
              {
                accessor: "delete",
                maxWidth: 50,
                Cell: row => (
                  <div>
                    {/* <Button color="danger" onClick={this.toggleModal}>x</Button> */}
                    <HapusCEEF />
                    {/* <Modal isOpen={this.state.toggleModal} toggle={this.toggleModal} className={this.props.className}>
                      <ModalHeader toggle={this.toggleModal}>Hapus CEEF</ModalHeader>
                      <ModalBody>
                        Apakah anda yakin hendak menghapus CEEF {this.props.namaCEEF}? <br />
                        Menghapus CEEF tida menghapus CEEF terkait.
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" onClick={this.toggleModal}>OK</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                      </ModalFooter>
                    </Modal> */}
                  </div>
                )
              },
              {
                accessor: "export",
                maxWidth: 50,
                Cell: row => (
                  <div>
                    <a href="http://github.com" target="_blank" > <Button color="success" onClick={this.toggleModal}>v</Button></a>
                  </div>
                )
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default CEEF;