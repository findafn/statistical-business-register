import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, NavItem, NavLink, Input, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

import config from '../../config';

class HapusCEEF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleHapus = this.toggleHapus.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleHapus() {
    axios.delete(config.liveSBRUrl + '/ceef/' + this.props.nomorCEEF)
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
          <ModalHeader toggle={this.toggle}>Hapus CEEF</ModalHeader>
          <ModalBody>
           Apakah anda yakin hendak menghapus CEEF {this.props.nomorCEEF}? <br/>
           Menghapus CEEF tidak menghapus Snapshot terkait. 
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

export default HapusCEEF;