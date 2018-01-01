import React from 'react'
import { Row, Col, Input, Form, FormGroup, Label, } from 'reactstrap';

import ButtonSave from '../../commons/ButtonSave';
import ButtonChange from '../../commons/ButtonChange';

class Indikator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChangePerusahaan = this.onChangePerusahaan.bind(this);
    this.onChangeKomersial = this.onChangeKomersial.bind(this);
    this.onChangeProduksi = this.onChangeProduksi.bind(this);
    this.onChangeBalasJasa = this.onChangeBalasJasa.bind(this);
    this.onChangeTenagaKerja = this.onChangeTenagaKerja.bind(this);
    this.onChangePengeluaran = this.onChangePengeluaran.bind(this);
    this.onClickChange = this.onClickChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onChangePerusahaan(e) {
    this.props.onChangePerusahaan(e.target.value);
  }
  onChangeKomersial(e) {
    this.props.onChangeKomersial(e.target.value);
  }
  onChangeProduksi(e) {
    this.props.onChangeProduksi(e.target.value);
  }
  onChangeBalasJasa(e) {
    this.props.onChangeBalasJasa(e.target.value);
  }
  onChangeTenagaKerja(e) {
    this.props.onChangeTenagaKerja(e.target.value);
  }
  onChangePengeluaran(e) {
    this.props.onChangePengeluaran(e.target.value);
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
            <Label for="Nama-Perusahaan" sm={5}>Nama Perusahaan</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.namaPerusahaan} onChange={this.onChangePerusahaan} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama-Komersial" sm={5}>Nama Komersial</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.namaKomersial} onChange={this.onChangeKomersial} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nilai-Produksi" sm={5}>Nilai Produksi/ Pendapatan/ Penjualan selama 1 thn (Rp)</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.nilaiProduksi} onChange={this.onChangeProduksi} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Nilai Balas Jasa Pekerja/ gaji selama 1 thn (Rp)</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.nilaiUpah} onChange={this.onChangeBalasJasa} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Total Tenaga Kerja (org)</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.totalNaker} onChange={this.onChangeTenagaKerja} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Nilai Pengeluaran selama 1 thn (Rp)</Label>
            <Col sm={7}>
              <Input type="text" disabled={!this.props.enable} value={this.props.data.nilaiPengeluaran} onChange={this.onChangePengeluaran} />
            </Col>
          </FormGroup>
          <Row>
            <Col xs="9">
              <ButtonSave idSBR={this.props.data.idSBR} onClickSave={this.onClickSave} enable={this.props.enable} />
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

export default Indikator;