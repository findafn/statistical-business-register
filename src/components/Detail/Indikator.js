import React from 'react'
import { Row, Col, Input, Form, FormGroup, Label, } from 'reactstrap';

import ButtonSave from '../../commons/ButtonSave';
import ButtonAdd from '../../commons/ButtonAdd';

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
            <Label for="Nilai-Produksi" sm={5}>Nilai Produksi</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nilai-Produksi" value="Nilai Produksi" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Nilai Balas Jasa</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Nilai Balas Jasa" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Total Tenaga Kerja</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Total Tenaga Kerja" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Nilai Pengeluaran</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Nilai Pengeluaran" />
            </Col>
          </FormGroup>
          <Row>
            <Col xs="9">
              <ButtonSave idSBR={this.state.idSBR} />
            </Col>
            <Col xs="3">
              <ButtonAdd idSBR={this.state.idSBR} />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Indikator;