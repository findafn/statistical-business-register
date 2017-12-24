import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { Form, FormGroup, Label, FormText } from 'reactstrap'

class Umum extends React.PureComponent {
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
                <Label for="Unit-Statistik" sm={4}>Unit Statistik</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Unit-Statistik" value="Unit Statistik" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Kegiatan Utama</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Kegiatan Utama" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Kategori KBLI</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Kategori KBLI" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Produk Utama</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Produk Utama" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama-Komersial" sm={4}>Nama Komersial</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Komersial" value="Nama Komersial" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Unit-Statistik" sm={4}>Unit Statistik</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Unit-Statistik" value="Unit Statistik" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Kegiatan Utama</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Kegiatan Utama" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Kategori KBLI</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Kategori KBLI" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Nama Perusahaan" sm={4}>Produk Utama</Label>
                <Col sm={8}>
                    <Input type="text" name="text" id="Nama-Perusahaan" value="Produk Utama" />
                </Col>
                </FormGroup>
            </Form>
            </div>
        );
    }
}

export default Umum;