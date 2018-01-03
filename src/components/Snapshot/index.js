import React from 'react'
import ReactTable from 'react-table';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, Input, FormGroup, Label } from 'reactstrap';
import { Link, NavLink as RRNavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import config from '../../config';
import { makeData, Logo, Tips } from "./Utils";
import BuatSnapshot from './BuatSnapshot';
import HapusSnapshot from './HapusSnapshot';

class Snapshot extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isOpen: false,
      modal: false,
      idSnapshot: '0',
      namaSnapshot: '',
      idSBR: '0',
      date: new Date(),
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onChangeNama = this.onChangeNama.bind(this);
    this.onTambahSnapshot = this.onTambahSnapshot.bind(this);
    this.onHapusSnapshot = this.onHapusSnapshot.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    const urlEstablishment = config.liveSBRUrl + '/snapshot';
    axios.get(urlEstablishment)
      .then(({ data }) => {
        if (data.success) {
          this.setState(p => ({
            ...p,
            data : data.result,
          }));
        }
        console.log('data ', {data});
      })
      .catch(err => {
        console.log("Tidak bisa mendapatkan data establishment");
      });
  }

  componentDidMount() {
    this.updateState();
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

  onTambahSnapshot(newSnapshot) {
    let newData = this.state.data;
    newData.push(newSnapshot);
    this.setState({
      data : newData,
    });
    this.props.toggleCEEF();
  }

  onHapusSnapshot(deletedSnapshot) {
    let newData = this.state.data;
    newData = newData.filter(snapshot =>
      snapshot.nomorSnapshot !== deletedSnapshot
    );
    this.setState({
      data : newData,
    });
    this.props.toggleCEEF();
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <div>
            <BuatSnapshot onTambahSnapshot={this.onTambahSnapshot}/>
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
        <div className="loc-center">Jumlah Total Snapshot : {this.state.data.length}</div>
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Nomor Snapshot",
                accessor: "nomorSnapshot"
              },
              {
                Header: "Nama Snapshot",
                accessor: "nama"
              },
              {
                Header: "Tanggal Pembuatan",
                accessor: "tanggal"
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
                accessor: "nomorSnapshot",
                maxWidth: 50,
                Cell: row => (
                  <div>
                    <HapusSnapshot onHapusSnapshot={this.onHapusSnapshot} nomorSnapshot={row.value}/>
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