import React from 'react'
import ReactTable from 'react-table';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, Input, FormGroup, Label } from 'reactstrap';
import { Link, NavLink as RRNavLink, withRouter } from 'react-router-dom';


import { makeData, Logo, Tips } from "./Utils";
import BuatSnapshot from './BuatSnapshot';
import HapusSnapshot from './HapusSnapshot';

class Snapshot extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      isOpen: false,
      modal: false,
      idSnapshot: '0',
      namaSnapshot: '',
      idSBR: '0',
      date: new Date(),
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onChangeNama = this.onChangeNama.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChangeNama(e) {
    this.setState({
      namaSnapshot: e.value.target,
    });
    e.persist();
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <div>
            <BuatSnapshot />
            {/* <Button color="info" onClick={this.toggleModal}>Buat Snapshot</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
              <ModalHeader toggle={this.toggleModal}>Buat Snapshot</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Label>Masukkan nama Snapshot</Label>
                  <Input placeholder="Nama Snapshot" value={this.state.namaSnapshot} onChange={this.onChangeNama} />
                </FormGroup>
                <p>Tanggal Snapshot:  </p>
                <p>Creator: {this.state.idSBR}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
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
                Header: "Nama Snapshot",
                accessor: "namaSnapshot"
              },
              {
                Header: "Tanggal Pembuatan",
                accessor: "tanggalPembuatan"
              },
              {
                Header: "Creator",
                accessor: "creator"
              },
              {
                Header: "Jumlah Establishment",
                accessor: "jumlahEst"
              },
              {
                Header: "Jumlah Establishment Aktif",
                accessor: "jumlahEstAktif"
              },
              {
                accessor: "delete",
                maxWidth: 50,
                Cell: row => (
                  <div>
                    <HapusSnapshot />
                    {/* <Button color="danger" onClick={this.toggleModal}>x</Button>
                    <Modal isOpen={this.state.modal} Modal={this.toggleModal} className={this.props.className}>
                      <ModalHeader toggle={this.toggleModal}>Hapus Snapshot</ModalHeader>
                      <ModalBody>
                        Apakah anda yakin hendak menghapus snapshot {this.props.namaSnapshot}? <br />
                        Menghapus Snapshot dapat memengaruhi CEEF terkait.
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" onClick={this.toggleModal}>OK</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                      </ModalFooter>
                    </Modal> */}
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

export default withRouter(Snapshot);