import React from 'react'
import { Form, FormGroup, Label, Row, Col, Input } from 'reactstrap'

import ButtonSave from '../../commons/ButtonSave';
import ButtonChange from '../../commons/ButtonChange';

class Umum extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      idSBR: '',
      namaPerusahaan: 'tes',
      namaKomersial: '',
      unitStatistik: '',
      kegiatanUtama: '',
      kategoriKBLI: '',
      produkUtama: '',
      kodeKBLI: '',
      alamat: '',
      kota: '',
      provinsi: '',
      status: '',
    };
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onChangePerusahaan = this.onChangePerusahaan.bind(this);
    this.onChangeKomersial = this.onChangeKomersial.bind(this);
    this.onChangeStatistik = this.onChangeStatistik.bind(this);
    this.onChangeKegiatan = this.onChangeKegiatan.bind(this);
    this.onChangeKategori = this.onChangeKategori.bind(this);
    this.onChangeProduk = this.onChangeProduk.bind(this);
    this.onChangeKode = this.onChangeKode.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.onChangeKota = this.onChangeKota.bind(this);
    this.onChangeProvinsi = this.onChangeProvinsi.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChangeSearch(idSBR) {
    this.setState(p => ({
      ...p,
      idSBR,
    }));
  }
  onChangePerusahaan(e) {
    this.setState(p => ({
      ...p,
      namaPerusahaan: e.target.value,
    }));
    e.persist();
  }
  onChangeKomersial(e) {
    this.setState(p => ({
      ...p,
      namaKomersial: e.target.value,
    }));
    e.persist();
  }
  onChangeStatistik(e) {
    this.setState(p => ({
      ...p,
      unitStatistik: e.target.value,
    }));
    e.persist();
  }
  onChangeKegiatan(e) {
    this.setState(p => ({
      ...p,
      kegiatanUtama: e.target.value,
    }));
    e.persist();
  }
  onChangeKategori(e) {
    this.setState(p => ({
      ...p,
      kategoriKBLI: e.target.value,
    }));
    e.persist();
  }
  onChangeProduk(e) {
    this.setState(p => ({
      ...p,
      produkUtama: e.target.value,
    }));
    e.persist();
  }
  onChangeKode(e) {
    this.setState(p => ({
      ...p,
      kodeKBLI: e.target.value,
    }));
    e.persist();
  }
  onChangeAlamat(e) {
    this.setState(p => ({
      ...p,
      alamat: e.target.value,
    }));
    e.persist();
  }
  onChangeKota(e) {
    this.setState(p => ({
      ...p,
      kota: e.target.value,
    }));
    e.persist();
  }
  onChangeProvinsi(e) {
    this.setState(p => ({
      ...p,
      provinsi: e.target.value,
    }));
    e.persist();
  }
  onChangeStatus(e) {
    this.setState(p => ({
      ...p,
      status: e.target.value,
    }));
    e.persist();
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('state: ', this.state);
  }
  render() {
    return (
      <div className="detail-box">
        <p><b>Detail Perusahaan</b></p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="Nama-Perusahaan" sm={5}>Nama Perusahaan</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.namaPerusahaan} onChange={this.onChangePerusahaan} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama-Komersial" sm={5}>Nama Komersial</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Komersial" value={this.state.namaKomersial} onChange={this.onChangeKomersial} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Unit-Statistik" sm={5}>Unit Statistik</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Unit-Statistik" value={this.state.unitStatistik} onChange={this.onChangeStatistik} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Kegiatan Utama</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" vvalue={this.state.kegiatanUtama} onChange={this.onChangeKegiatan} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Kategori KBLI</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.kategoriKBLI} onChange={this.onChangeKategori} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Produk Utama</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.produkUtama} onChange={this.onChangeProduk} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama-Komersial" sm={5}>Kode KBLI</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Komersial" value={this.state.kodeKBLI} onChange={this.onChangeKode} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Unit-Statistik" sm={5}>Alamat</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Unit-Statistik" value={this.state.alamat} onChange={this.onChangeAlamat} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Kabupaten/Kota</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.kota} onChange={this.onChangeKota} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Provinsi</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.provinsi} onChange={this.onChangeProvinsi} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Status</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.status} onChange={this.onChangestatus} />
            </Col>
          </FormGroup>
          <Row>
            <Col xs="9">
              <ButtonSave idSBR={this.state.idSBR} />
            </Col>
            <Col xs="3">
              <ButtonChange idSBR={this.state.idSBR} />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Umum;