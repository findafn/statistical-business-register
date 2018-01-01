
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, NavItem, NavLink, Input, FormGroup, Label } from 'reactstrap';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import axios from 'axios';
import config from '../../config';

class BuatCEEF extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      nama: '',
      nomorSnapshot: '-',
      creator: '',
      deskripsi: '',
      unitStatistiks: [],
      katKBLIs: [],
      snapshot: [],
      tanggal: Date.now()
    };
    this.toggleOK = this.toggleOK.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onChangeNama = this.onChangeNama.bind(this);
    this.onChangeCreator = this.onChangeCreator.bind(this);
    this.onChangeDeskripsi = this.onChangeDeskripsi.bind(this);
    this.handleOptStatistik = this.handleOptStatistik.bind(this);
    this.handleOptKode = this.handleOptKode.bind(this);
    this.handleChangeSnapshot = this.handleChangeSnapshot.bind(this);
  }

  toggleOK() {
    const { nama, tanggal, deskripsi, creator, nomorSnapshot, katKBLIs, unitStatistiks } = this.state;
    const data = { nama, tanggal, deskripsi, creator, nomorSnapshot, katKBLIs, unitStatistiks };
    const urlCreateCEEF = config.liveSBRUrl + '/ceef';
    console.log(data);
    axios.post(urlCreateCEEF, data)
    .then(({data}) => {
      if (data.success) {
        alert(data.message);
      } else {
        alert(data.message);
      }
      this.setState({
        modal: !this.state.modal
      });
    })
    .catch((err) => {
      alert('Terjadi error');
      this.setState({
        modal: !this.state.modal
      });
    });
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChangeNama(e) {
    this.setState({
      nama: e.target.value,
    });
    e.persist();
  }
  onChangeCreator(e) {
    this.setState({
      creator: e.target.value,
    });
    e.persist();
  }
  onChangeDeskripsi(e) {
    this.setState({
      deskripsi: e.target.value,
    });
    e.persist();
  }
  handleOptStatistik(e) {
    this.setState(p => ({
      unitStatistiks: e,
    }));
    console.log('You have selected:', this.state.unitStatistiks);
  }
  handleOptKode(e) {
    this.setState({
      katKBLIs: e,
    });
    console.log('You have selected:', this.state.katKBLIs);
  }

  handleChangeSnapshot(e){
    this.setState(p => ({
      ...p,
      nomorSnapshot : e.target.value,
    }));
    e.persist();
  }

  componentDidMount() {
    const urlEstablishment = config.liveSBRUrl + '/snapshot';
    axios.get(urlEstablishment)
    .then(({ data }) => {
      if (data.success) {
        this.setState(p => ({
          ...p,
          snapshot : data.result,
          nomorSnapshot : data.result[0].nomorSnapshot,
        }));
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
  }
  render() {
    let views = <option>-</option>;
    const {snapshot} = this.state;
    if (snapshot && snapshot.length > 0) {
      views = snapshot.map(s => (
        <option value={s.nomorSnapshot}>{s.nomorSnapshot}</option>
      ))
    }
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
                    <Input placeholder="Nama CEEF" value={this.state.nama} onChange={this.onChangeNama} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Masukkan nama creator</Label>
                    <Input placeholder="Creator" value={this.state.creator} onChange={this.onChangeCreator} />
                  </FormGroup>
                  <p>Tanggal CEEF: {(new Date(this.state.tanggal)).toString()}</p><br/>
                </Col>
                <Col sm={6}>
                  <FormGroup >
                    <Label>Deskripsi CEEF (Tujuan penggunaan, periode, dan informasi lainnya</Label>
                    <Input style={{ height: 80 }} type="textarea" placeholder="Deskripsi CEEF" onChange={this.onChangeDeskripsi} value={this.state.deskripsi}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="exampleSelect">Pilih Snapshot</Label>
                    <Input type="select" name="select" value={this.state.nomorSnapshot} onChange={this.handleChangeSnapshot}>
                      {views}
                    </Input>
                  </FormGroup>
                  <p>Pilih unit statistik (bisa >1):</p>
                  <CheckboxGroup
                    name="unitStatistiks"
                    value={this.state.unitStatistiks}
                    onChange={this.handleOptStatistik}>

                    <label><Checkbox value="1" /> Enterprise Group</label><br />
                    <label><Checkbox value="2" /> Enterprise</label><br />
                    <label><Checkbox value="3" /> Establishment</label><br />
                    <label><Checkbox value="4" /> Unit Penunjang</label>
                    
                  </CheckboxGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Pilih kategori KBLI (bisa >1):</p>
                  <CheckboxGroup
                    name="katKBLIs"
                    value={this.state.katKBLIs}
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
            <Button color="primary" onClick={this.toggleOK}>OK</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BuatCEEF;