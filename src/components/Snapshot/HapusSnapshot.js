import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, NavItem, NavLink, Input, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

import config from '../../config';

class HapusSnapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.toogleHapus = this.toggleHapus.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleHapus() {
    axios.delete(config.liveSBRUrl + '/snapshot/' + this.props.nomorSnapshot)
    .then(({data}) => {
      if (data.success) {
        alert(data.message);
      }
      else {
        alert(data.message);
      }
      this.setState({
        modal: !this.state.modal
      });
    })
    .catch((err) => {
      console.log(err);
      this.setState({
        modal: !this.state.modal
      });
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>x</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Hapus Snapshot</ModalHeader>
          <ModalBody>
           Apakah anda yakin hendak menghapus snapshot {this.props.nomorSnapshot}? <br/>
           Menghapus Snapshot dapat memengaruhi CEEF terkait. 
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggleHapus}>OK</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default HapusSnapshot;