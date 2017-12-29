import React from 'react'
import { Row, Col, Input, Form, FormGroup, Label, } from 'reactstrap';

import ButtonSave from '../../commons/ButtonSave';
import ButtonChange from '../../commons/ButtonChange';

class Indikator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      idSBR: '',
      namaPerusahaan: 'tes',
      namaKomersial: '',
      nilaiProduksi: '',
      nilaiBalasJasa: '',
      totalTenagaKerja: '',
      nilaiPengeluaran: '',
    };
   
    this.onChangePerusahaan = this.onChangePerusahaan.bind(this);
    this.onChangeKomersial = this.onChangeKomersial.bind(this);
    this.onChangeProduksi = this.onChangeProduksi.bind(this);
    this.onChangeBalasJasa = this.onChangeBalasJasa.bind(this);
    this.onChangeTenagaKerja = this.onChangeTenagaKerja.bind(this);
    this.onChangePengeluaran = this.onChangePengeluaran.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChangePerusahaan(e) {
    this.setState(p => ({
      ...p,
      namaPerusahaan: e.target.value,
    }));
    console.log('typed');
    e.persist();
  }
  onChangeKomersial(e) {
    this.setState(p => ({
      ...p,
      namaKomersial: e.target.value,
    }));
    e.persist();
  }
  onChangeProduksi(e) {
    this.setState(p => ({
      ...p,
      nilaiProduksi: e.target.value,
    }));
    e.persist();
  }
  onChangeBalasJasa(e) {
    this.setState(p => ({
      ...p,
      nilaiBalasJasa: e.target.value,
    }));
    e.persist();
  }
  onChangeTenagaKerja(e) {
    this.setState(p => ({
      ...p,
      totalTenagaKerja: e.target.value,
    }));
    e.persist();
  }
  onChangePengeluaran(e) {
    this.setState(p => ({
      ...p,
      nilaiPengeluaran: e.target.value,
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
        <Form>
          <FormGroup row>
            <Label for="Nama-Perusahaan" sm={5}>Nama Perusahaan</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.namaPerusahaan} onChange={this.onChangePerusahaan} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama-Komersial" sm={5}>Nama Komersial</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Komersial"value={this.state.namaKomersial} onChange={this.onChangeKomersial} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nilai-Produksi" sm={5}>Nilai Produksi/ Pendapatan/ Penjualan selama 1 thn (Rp)</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nilai-Produksi" value={this.state.nilaiProduksi} onChange={this.onChangeProduksi} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Nilai Balas Jasa Pekerja/ gaji selama 1 thn (Rp)</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.nilaiBalasJasa} onChange={this.onChangeBalasJasa} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Total Tenaga Kerja (org)</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" vvalue={this.state.totalTenagaKerja} onChange={this.onChangeTenagaKerja} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Nilai Pengeluaran selama 1 thn (Rp)</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value={this.state.nilaiPengeluaran} onChange={this.onChangePengeluaran} />
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

export default Indikator;