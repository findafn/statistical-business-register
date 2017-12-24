import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { Form, FormGroup, Label, FormText } from 'reactstrap'

class Indikator extends React.PureComponent {
    render() {
        return(
            <div className="detail-box">
            <p>Detail Perusahaan</p>
            <Form>
                <FormGroup row>
                <Label for="Nama-Perusahaan" sm={4}>Nama Perusahaan</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Nama Perusahaan" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama-Komersial" sm={4}>Nama Komersial</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Komersial" value="Nama Komersial" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nilai-Produksi" sm={4}>Nilai Produksi</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nilai-Produksi" value="Nilai Produksi" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Nilai Balas Jasa</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Nilai Balas Jasa" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Total Tenaga Kerja</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Total Tenaga Kerja" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Nilai Pengeluaran</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Nilai Pengeluaran" />
                </Col>
                </FormGroup>
            </Form>
            </div>
        );
    }
}

export default Indikator;