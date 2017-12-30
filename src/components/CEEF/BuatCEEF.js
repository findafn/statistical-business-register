import React from 'react'
import { Button, Container, Row, Col, NavItem, NavLink, Input, FormGroup, Label } from 'reactstrap';

class CEEF extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '1',
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="dialog-box-big">
        <Container>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label>Masukkan nama CEEF</Label>
                <Input placeholder="Nama CEEF" value={this.state.namaCeef} onChange={this.onChangeNama} />
              </FormGroup>
              <p>Tanggal Snapshot: </p>
              <p>Creator: {this.props.idSBR}</p><hr />
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>Deskripsi CEEF (Tujuan penggunaan, periode, dan informasi lainnya</Label>
                <Input type="textarea" placeholder="Deskripsi CEEF" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label for="exampleSelect">Pilih Snapshot</Label>
                <Input type="select" name="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <p>Pilih unit statistik (bisa lebih dari 1):</p>
              <FormGroup tag="fieldset" row>
                <legend>Unit Statistik</legend>
                <Col sm={10}>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" value="1" checked={this.state.unitStatistik === '1'} onChange={this.handleOptStatistik} name="radio2" />{' '}
                      Enterprise Group
                        </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" value="2" checked={this.state.unitStatistik === '2'} onChange={this.handleOptStatistik} name="radio3" />{' '}
                      Unit Pengunjung
                        </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" value="3" checked={this.state.unitStatistik === '3'} onChange={this.handleOptStatistik} name="radio4" />{' '}
                      Enterprise
                        </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" value="4" checked={this.state.unitStatistik === '4'} onChange={this.handleOptStatistik} name="radio5" />{' '}
                      Establishment
                        </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CEEF;