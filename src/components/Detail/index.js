import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Input, Button } from 'reactstrap';
import { TabContent, TabPane, Table, Nav, NavItem, NavLink } from 'reactstrap';
import axios from 'axios';
import ReactTable from 'react-table';

import config from '../../config';
import Indikator from './Indikator';
import Umum from './Umum';
import InputSearch from '../../commons/InputSearch';
import ButtonSearch from '../../commons/ButtonSearch';
import ButtonHistory from '../../commons/ButtonHistory';
import ChangeLog from '../ChangeLog';
import TabelUmum from './TabelUmum';
import TabelIndikator from './TabelIndikator';


class Detail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.toggleHistory2 = this.toggleHistory2.bind(this);
    this.toggleHistory3 = this.toggleHistory3.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.state = {
      activeItem: 'Umum',
      activeHistory: '1',
      idChange: '1',
      idSBR: '',
      // namaPerusahaan: '',
      // namaKomersial: '',
      // kegiatanUtama: '',
      // kategoriKBLI: '',
      // produkUtama: '',
      // kodeKBLI: '',
      // alamat: '',
      // kodeKabKot: '',
      // kodeProv: '',
      // nilaiProduksi: '',
      // nilaiUpah: '',
      // totalNaker: '',
      // nilaiPengeluaran: '',
      // unitStatistik: '',
      // status: '',
      dataUmum: [],
      dataIdk: [],
      };
  }

  toggle(Item) {
    if (this.state.activeItem !== Item) {
      this.setState({
        activeItem: Item,
      });
    }
  }

  toggleHistory(History) {
    if (this.state.activeHistory !== History) {
      this.setState({
        activeHistory: '1',
      });
    }
  }

  toggleHistory2(History) {
    if (this.state.activeHistory !== History) {
      this.setState({
        activeHistory: '2',
        idChange: '2',
      });
    }
  }

  toggleHistory3(History) {
    if (this.state.activeHistory !== History) {
      this.setState({
        activeHistory: '3',
        idChange: '3',
      });
    }
  }

  onChangeSearch(idSBR) {
    this.setState(p => ({
      ...p,
      idSBR,
    }));
    console.log(idSBR);
  }

  handleClickSearch() {
    // const urlEstablishment = config.liveSBRUrl + '/establishment/' + this.state.idSBR;
    // axios.get(urlEstablishment)
    //   .then(({ data }) => {
    //     if (data.success) {
    //       this.setState(p => ({
    //         ...p,
    //         dataUmum: data.result,
    //       }));
    //     } else {
    //       alert(data.message);
    //     }
    //     console.log('data ', data.result.idSBR);
    //   })
    //   .catch(err => {
    //     console.log("Tidak bisa mendapatkan data establishment");
    //   });
    // const urlIndicator = config.liveSBRUrl + '/indicator/' + this.state.idSBR;
    // axios.get(urlIndicator)
    //   .then(({ data }) => {
    //     if (data.success) {
    //       this.setState(p => ({
    //         ...p,
    //         dataIdk:data.result,
    //       }));
    //     }
    //   })
    //   .catch(err => {
    //     alert("Tidak bisa mendapatkan data indicator");
    //   });
  }

  render() {
    const { activeItem, activeHistory, dataUmum, dataIdk } = this.state
    return (
      <div >
        <TabContent activeTab={activeHistory}>
          <TabPane tabId="1">
            <Container>
              <p>Cari berdasarkan ID SBR</p>
              <Row>
                <Col xs="8">
                  <InputSearch idSBR={this.state.idSBR} onChangeSearch={this.onChangeSearch} />
                </Col>
                <Col xs="4">
                  <ButtonSearch idSBR={this.state.idSBR} onClickSearch={this.handleClickSearch} />
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <div className="detail-box">
                    <Row>
                      <Col xs="4">
                        <Button outline color="info" active={activeItem === 'Umum'} onClick={() => { this.toggle('Umum'); }}>Variabel Umum</Button>
                      </Col>
                      <Col xs="8">
                        <Button outline color="info" active={activeItem === 'Indikator'} onClick={() => { this.toggle('Indikator'); }}>Variabel Indikator</Button>
                      </Col>
                    </Row><br />
                    <p>Daftar Perubahan</p>
                    <Row>
                      <Col>
                        <TabContent activeTab={activeItem}>
                          <TabPane tabId="Umum">
                            <ReactTable
                              data={dataUmum}
                              columns={[
                                {
                                  Header: "Tanggal Perubahan",
                                  accessor: "pembaruanTerakhir"
                                },
                                {
                                  Header: "Asal Perubahan",
                                  accessor: "updaterTerakhir"
                                },
                              ]}
                              defaultPageSize={10}
                              className="-striped -highlight"
                            />
                            <Button color="info" active={activeHistory === '2'} onClick={() => { this.toggleHistory2('2'); }}>Lihat Detail History Perubahan</Button>
                          </TabPane>
                          <TabPane tabId="Indikator">
                            <ReactTable
                              data={dataIdk}
                              columns={[
                                {
                                  Header: "Tanggal Perubahan",
                                  accessor: "pembaruanTerakhir"
                                },
                                {
                                  Header: "Asal Perubahan",
                                  accessor: "updaterTerakhir"
                                },
                              ]}
                              defaultPageSize={10}
                              className="-striped -highlight"
                            />
                            <Button color="info" active={activeHistory === '3'} onClick={() => { this.toggleHistory3('3'); }}>Lihat Detail History Perubahan</Button>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>

                  </div>
                </Col>
                <Col xs="6">
                  <TabContent activeTab={activeItem}>
                    <TabPane tabId="Umum">
                      <Umum data={this.state.dataUmum}/>
                    </TabPane>
                    <TabPane tabId="Indikator">
                      <Indikator data={this.state.dataIdk} />
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <ChangeLog idChange={this.state.idChange} />
            <br />
            <Button color="info" active={activeHistory === '1'} onClick={() => { this.toggleHistory('1'); }}>Kembali</Button>
          </TabPane>
          <TabPane tabId="3">
            <ChangeLog idChange={this.state.idChange} />
            <br />
            <Button color="info" active={activeHistory === '1'} onClick={() => { this.toggleHistory('1'); }}>Kembali</Button>
          </TabPane>
        </TabContent>

      </div>
    );
  }
}

export default Detail;