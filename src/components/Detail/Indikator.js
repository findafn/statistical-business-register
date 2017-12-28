import React from 'react'
import { Row, Col, Input, Form, FormGroup, Label, } from 'reactstrap';

import ButtonSave from '../../commons/ButtonSave';
import ButtonChange from '../../commons/ButtonChange';

class Indikator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.state = {
      idSBR: '',
    };
  }

  onChangeSearch(idSBR) {
    this.setState(p => ({
      ...p,
      idSBR,
    }));
  }
  render() {
    return (
      <div className="detail-box">
        <p><b>Detail Perusahaan</b></p>
        <Form>
          <FormGroup row>
            <Label for="Nama-Perusahaan" sm={5}>Nama Perusahaan</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Nama Perusahaan" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama-Komersial" sm={5}>Nama Komersial</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Komersial" value="Nama Komersial" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nilai-Produksi" sm={5}>Nilai Produksi/ Pendapatan/ Penjualan selama 1 thn (Rp)</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nilai-Produksi" value="Nilai Produksi" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Nilai Balas Jasa Pekerja/ gaji selama 1 thn (Rp)</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Nilai Balas Jasa" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Total Tenaga Kerja (org)</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Total Tenaga Kerja" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Nilai Pengeluaran selama 1 thn (Rp)</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Nilai Pengeluaran" />
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