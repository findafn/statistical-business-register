import React from 'react'
import { Form, FormGroup, Label, Row, Col, Input } from 'reactstrap'

import ButtonSave from '../../commons/ButtonSave';
import ButtonChange from '../../commons/ButtonChange';

class Umum extends React.PureComponent {
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
            <Label for="Unit-Statistik" sm={5}>Unit Statistik</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Unit-Statistik" value="Unit Statistik" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Kegiatan Utama</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Kegiatan Utama" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Kategori KBLI</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Kategori KBLI" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Produk Utama</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Produk Utama" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama-Komersial" sm={5}>Kode KBLI</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Komersial" value="Nama Komersial" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Unit-Statistik" sm={5}>Alamat</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Unit-Statistik" value="Unit Statistik" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Kabupaten/Kota</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Kegiatan Utama" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Provinsi</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Kategori KBLI" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Nama Perusahaan" sm={5}>Status</Label>
            <Col sm={7}>
              <Input type="text" name="text" id="Nama-Perusahaan" value="Produk Utama" />
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