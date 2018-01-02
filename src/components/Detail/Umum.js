import React from 'react'
import { Form, FormGroup, Label, Row, Col, Input } from 'reactstrap'

import ButtonSave from '../../commons/ButtonSave';
import ButtonChange from '../../commons/ButtonChange';

class Umum extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onChangePerusahaan = this.onChangePerusahaan.bind(this);
    this.onChangeKomersial = this.onChangeKomersial.bind(this);
    this.onChangeNPWP = this.onChangeNPWP.bind(this);
    this.onChangeStatistik = this.onChangeStatistik.bind(this);
    this.onChangeKegiatan = this.onChangeKegiatan.bind(this);
    this.onChangeKategori = this.onChangeKategori.bind(this);
    this.onChangeProduk = this.onChangeProduk.bind(this);
    this.onChangeKode = this.onChangeKode.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.onChangeKota = this.onChangeKota.bind(this);
    this.onChangeProvinsi = this.onChangeProvinsi.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onClickChange = this.onClickChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onChangeSearch(idSBR) {
    this.setState(p => ({
      ...p,
      idSBR,
    }));
  }
  onChangePerusahaan(e) {
    this.props.onChangePerusahaan(e.target.value);
  }
  onChangeKomersial(e) {
    this.props.onChangeKomersial(e.target.value);
  }
  onChangeNPWP(e) {
    this.props.onChangeNPWP(e.target.value);
  }
  onChangeStatistik(e) {
    this.props.onChangeStatistik(e.target.value);
  }
  onChangeKegiatan(e) {
    this.props.onChangeKegiatan(e.target.value);
  }
  onChangeKategori(e) {
    this.props.onChangeKategori(e.target.value);
  }
  onChangeProduk(e) {
    this.props.onChangeProduk(e.target.value);
  }
  onChangeKode(e) {
    this.props.onChangeKode(e.target.value);
  }
  onChangeAlamat(e) {
    this.props.onChangeAlamat(e.target.value);
  }
  onChangeKota(e) {
    this.props.onChangeKota(e.target.value);
  }
  onChangeProvinsi(e) {
    this.props.onChangeProvinsi(e.target.value);
  }
  onChangeStatus(e) {
    this.props.onChangeStatus(e.target.value);
  }
  onClickSave() {
    this.props.onClickSave();
  }
  onClickChange() {
    this.props.onClickChange();
  }

  render() {
    
    return (
      <div className="detail-box">
        <p><b>Detail Perusahaan</b></p>
        <Form>
          <FormGroup row>
            <Label sm={5}>Nama Perusahaan</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.namaPerusahaan} onChange={this.onChangePerusahaan} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={5}>Nama Komersial</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.namaKomersial} onChange={this.onChangeKomersial} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={5}>NPWP</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.npwp} onChange={this.onChangeNPWP} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={5}>Unit Statistik</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.unitStatistik} onChange={this.onChangeStatistik} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={5}>Kegiatan Utama</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} vvalue={this.props.data.kegiatanUtama} onChange={this.onChangeKegiatan} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={5}>Kategori KBLI</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.kategoriKBLI} onChange={this.onChangeKategori} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={5}>Produk Utama</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.produkUtama} onChange={this.onChangeProduk} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama-Komersial" sm={5}>Kode KBLI</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.kodeKBLI} onChange={this.onChangeKode} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Unit-Statistik" sm={5}>Alamat</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.alamat} onChange={this.onChangeAlamat} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={5}>Kabupaten/Kota</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.kodeKabKot} onChange={this.onChangeKota} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={5}>Provinsi</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.kodeProv} onChange={this.onChangeProvinsi} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={5}>Status</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.status} onChange={this.onChangeStatus} />
            </Col>
          </FormGroup>
          <Row>
            <Col xs="9">
              <ButtonSave idSBR={this.props.data.idSBR} onClickSave={this.onClickSave} enable={this.props.enable}/>
            </Col>
            <Col xs="3">
              <ButtonChange idSBR={this.props.data.idSBR} onClickChange={this.onClickChange} enable={this.props.enable}/>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Umum;