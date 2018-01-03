import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, NavItem, NavLink, Input, FormGroup, Label } from 'reactstrap';
import axios from 'axios';
import config from '../../config';

class BuatSnapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nama : '',
      creator : '',
      tanggal : '',
    };
    this.onChangeNama = this.onChangeNama.bind(this);
    this.onChangeCreator = this.onChangeCreator.bind(this);
    this.toggleDo = this.toggleDo.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onChangeNama(e) {
    this.setState(p => ({
      ...p,
      nama : e.target.value,
    }));
    e.persist();
  }

  onChangeCreator(e) {
    this.setState(p => ({
      ...p,
      creator : e.target.value,
    }));
    e.persist();
  }

  toggleDo() {
    const { nama, tanggal, creator } = this.state;
    const data = { nama, tanggal, creator };
    const urlCreateSnapshot = config.liveSBRUrl + '/snapshot';
    axios.post(urlCreateSnapshot, data)
    .then(({data}) => {
      if (data.success) {
        alert(data.message);
        this.props.onTambahSnapshot(data.result);
      } else {
        alert(data.message);
      }
      this.toggle();
    })
    .catch((err) => {
      alert('Terjadi error');
      this.toggle();
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      nama: '',
      creator: '',
      tanggal: Date.now(),
    });
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>Buat Snapshot</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Buat Snapshot</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Masukkan nama Snapshot</Label>
              <Input placeholder="Nama Snapshot" value={this.state.nama} onChange={this.onChangeNama} />
            </FormGroup>
            <FormGroup>
              <Label>Masukkan nama creator</Label>
              <Input placeholder="Creator" value={this.state.creator} onChange={this.onChangeCreator} />
            </FormGroup>
            <p>Tanggal Snapshot: {(new Date(this.state.tanggal)).toString()}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleDo}>OK</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BuatSnapshot;