import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, NavItem, NavLink, Input, FormGroup, Label } from 'reactstrap';

class BuatSnapshot extends React.Component {
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
        <Button color="info" onClick={this.toggle}>Buat Snapshot</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Buat Snapshot</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Masukkan nama Snapshot</Label>
              <Input placeholder="Nama Snapshot" value={this.state.namaCeef} onChange={this.onChangeNama} />
            </FormGroup>
            <p>Tanggal Snapshot: </p>
            <p>Creator: {this.props.idSBR}</p>
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

export default BuatSnapshot;