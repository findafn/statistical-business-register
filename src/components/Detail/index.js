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
    this.onChangePerusahaan = this.onChangePerusahaan.bind(this);
    this.onChangeKomersial = this.onChangeKomersial.bind(this);
    this.onChangeStatistik = this.onChangeStatistik.bind(this);
    this.onChangeKegiatan = this.onChangeKegiatan.bind(this);
    this.onChangeKategori = this.onChangeKategori.bind(this);
    this.onChangeProduk = this.onChangeProduk.bind(this);
    this.onChangeKode = this.onChangeKode.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.onChangeKota = this.onChangeKota.bind(this);
    this.onChangeProvinsi = this.onChangeProvinsi.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeProduksi = this.onChangeProduksi.bind(this);
    this.onChangeBalasJasa = this.onChangeBalasJasa.bind(this);
    this.onChangeTenagaKerja = this.onChangeTenagaKerja.bind(this);
    this.onChangePengeluaran = this.onChangePengeluaran.bind(this);
    this.onClickChange = this.onClickChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      activeItem: 'Umum',
      activeHistory: '1',
      idChange: '1',
      idSBR: '',
      namaPerusahaan: '',
      namaKomersial: '',
      kegiatanUtama: '',
      kategoriKBLI: '',
      produkUtama: '',
      kodeKBLI: '',
      alamat: '',
      kodeKabKot: '',
      kodeProv: '',
      unitStatistik: '',
      status: '',
      nilaiProduksi: '',
      nilaiUpah: '',
      totalNaker: '',
      nilaiPengeluaran: '',
      dataUmum: [],
      dataIdk: [],
      ubah: '0',
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


  onChangePerusahaan(e) {
    this.setState(p => ({
      ...p,
      namaPerusahaan: e,
    }));
  }
  onChangeKomersial(e) {
    this.setState(p => ({
      ...p,
      namaKomersial: e,
    }));
  }
  onChangeStatistik(e) {
    this.setState(p => ({
      ...p,
      unitStatistik: e,
    }));
  }
  onChangeKegiatan(e) {
    this.setState(p => ({
      ...p,
      kegiatanUtama: e,
    }));
  }
  onChangeKategori(e) {
    this.setState(p => ({
      ...p,
      kategoriKBLI: e,
    }));
  }
  onChangeProduk(e) {
    this.setState(p => ({
      ...p,
      produkUtama: e,
    }));
  }
  onChangeKode(e) {
    this.setState(p => ({
      ...p,
      kodeKBLI: e,
    }));
  }
  onChangeAlamat(e) {
    this.setState(p => ({
      ...p,
      alamat: e,
    }));
  }
  onChangeKota(e) {
    this.setState(p => ({
      ...p,
      kodeKabKot: e,
    }));
  }
  onChangeProvinsi(e) {
    this.setState(p => ({
      ...p,
      kodeProv: e,
    }));
  }
  onChangeStatus(e) {
    this.setState(p => ({
      ...p,
      status: e,
    }));
  }
  onChangeProduksi(e) {
    this.setState(p => ({
      ...p,
      nilaiProduksi: e,
    }));
  }
  onChangeBalasJasa(e) {
    this.setState(p => ({
      ...p,
      nilaiUpah: e,
    }));
  }
  onChangeTenagaKerja(e) {
    this.setState(p => ({
      ...p,
      totalNaker: e,
    }));
  }
  onChangePengeluaran(e) {
    this.setState(p => ({
      ...p,
      nilaiPengeluaran: e,
    }));
  }

  onClickSave(e) {
    const { idSBR } = this.state;
    const pembaruanTerakhir = Date.now();
    const updaterTerakhir = 'SBR';
    const { namaPerusahaan, namaKomersial, kegiatanUtama, kategoriKBLI, produkUtama, kodeKBLI,
      alamat, kodeKabKot, kodeProv, unitStatistik, status } = this.state;
    const dataEstablishment = {
      namaPerusahaan, namaKomersial, kegiatanUtama, kategoriKBLI, produkUtama, kodeKBLI,
      alamat, kodeKabKot, kodeProv, unitStatistik, status, pembaruanTerakhir, updaterTerakhir
    };
    const { nilaiProduksi, nilaiUpah, totalNaker, nilaiPengeluaran } = this.state;
    const dataIndicator = {
      nilaiProduksi, nilaiUpah, totalNaker, nilaiPengeluaran,
      pembaruanTerakhir, updaterTerakhir
    };
    axios.put(config.liveSBRUrl + '/establishment/' + idSBR, dataEstablishment)
      .then(({ data }) => {
        if (data.success) {
          axios.put(config.liveSBRUrl + '/indicator/' + idSBR, dataIndicator)
            .then(({ data }) => {
              if (data.success) {
                alert("Update data berhasil.");
              } else {
                alert("Gagal.");
              }
            })
            .then(() => {
              this.handleClickSearch();
            });
        } else {
          alert("Update data gagal.");
          this.handleClickSearch();
        }
      });
    this.setState({
      ubah: '0',
    })
  }

  onClickChange() {
    this.setState({
      ubah: '1',
    })
  }

  handleClickSearch() {
    const urlEstablishmentAudit = config.sbrAuditTableUrl + '/establishmentaudit/' + this.state.idSBR;
    console.log(urlEstablishmentAudit);
    axios.get(urlEstablishmentAudit)
      .then(({ data }) => {
        console.log(data);
        if (data.success) {
          this.setState(p => ({
            ...p,
            dataUmum: data.result,
          }));
        } else {
          alert(data.message);
        }
        console.log('data ', data.result.idSBR);
      })
      .catch(err => {
        console.log("Tidak bisa mendapatkan data establishment");
      });
    const urlIndicatorAudit = config.sbrAuditTableUrl + '/indicatoraudit/' + this.state.idSBR;
    console.log(urlIndicatorAudit);
    axios.get(urlIndicatorAudit)
      .then(({ data }) => {
        if (data.success) {
          // data.result.forEach((audit) => {
          //   audit.pembaruanTerakhir = new Date(audit.pembaruanTerakhir);
          // })
          this.setState(p => ({
            ...p,
            dataIdk: data.result,
          }));
        }
      })
      .catch(err => {
        alert("Tidak bisa mendapatkan data indicator");
      });
    const urlEstablishment = config.liveSBRUrl + '/establishment/' + this.state.idSBR;
    axios.get(urlEstablishment)
      .then(({ data }) => {
        if (data.success) {
          this.setState(p => ({
            ...p,
            namaPerusahaan: data.result.namaPerusahaan,
            namaKomersial: data.result.namaKomersial,
            kegiatanUtama: data.result.kegiatanUtama,
            kategoriKBLI: data.result.katKBLI,
            produkUtama: data.result.produkUtama,
            kodeKBLI: data.result.kodeKBLI,
            alamat: data.result.alamat,
            kodeKabKot: data.result.kodeKabKot,
            kodeProv: data.result.kodeProv,
            unitStatistik: data.result.unitStatistik,
            status: data.result.status,
          }));
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.log("Tidak bisa mendapatkan data establishment");
      });
    const urlIndicator = config.liveSBRUrl + '/indicator/' + this.state.idSBR;
    axios.get(urlIndicator)
      .then(({ data }) => {
        if (data.success) {
          this.setState(p => ({
            ...p,
            nilaiProduksi: data.result.nilaiProduksi,
            nilaiUpah: data.result.nilaiUpah,
            totalNaker: data.result.totalNaker,
            nilaiPengeluaran: data.result.nilaiPengeluaran,
          }));
        }
      })
      .catch(err => {
        alert("Tidak bisa mendapatkan data indicator");
      });
  }


  render() {
    const { activeItem,
      activeHistory,
      dataUmum,
      dataIdk,
      namaPerusahaan,
      namaKomersial,
      kegiatanUtama,
      kategoriKBLI,
      produkUtama,
      kodeKBLI,
      alamat,
      kodeKabKot,
      kodeProv,
      unitStatistik,
      status,
      nilaiProduksi,
      nilaiUpah,
      totalNaker,
      nilaiPengeluaran,
    } = this.state;

    const data1 = {
      namaPerusahaan,
      namaKomersial,
      kegiatanUtama,
      kategoriKBLI,
      produkUtama,
      kodeKBLI,
      alamat,
      kodeKabKot,
      kodeProv,
      unitStatistik,
      status,
    }
    const data2 = {
      namaPerusahaan,
      namaKomersial,
      nilaiProduksi,
      nilaiUpah,
      totalNaker,
      nilaiPengeluaran,
    }
    const enable =
      this.state.ubah == '1';
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
                            /><br />
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
                            /><br />
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
                      <Umum
                        data={data1}
                        onChangePerusahaan={this.onChangePerusahaan}
                        onChangeKomersial={this.onChangeKomersial}
                        onChangeKegiatan={this.onChangeKegiatan}
                        onChangeKategori={this.onChangeKategori}
                        onChangeProduk={this.onChangeProduk}
                        onChangeKode={this.onChangeKode}
                        onChangeKota={this.onChangeKota}
                        onChangeProvinsi={this.onChangeProvinsi}
                        onChangeStatistik={this.onChangeStatistik}
                        onChangeStatus={this.onChangeStatus}
                        onChangeAlamat={this.onChangeAlamat}
                        onClickChange={this.onClickChange}
                        onClickSave={this.onClickSave}
                        enable={enable}
                      />
                    </TabPane>
                    <TabPane tabId="Indikator">
                      <Indikator
                        data={data2}
                        onChangePerusahaan={this.onChangePerusahaan}
                        onChangeKomersial={this.onChangeKomersial}
                        onChangeProduksi={this.onChangeProduksi}
                        onChangeBalasJasa={this.onChangeBalasJasa}
                        onChangeTenagaKerja={this.onChangeTenagaKerja}
                        onChangePengeluaran={this.onChangePengeluaran}
                        onClickChange={this.onClickChange}
                        onClickSave={this.onClickSave}
                        enable={enable}
                      />
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <ChangeLog idChange={this.state.idChange} data={this.state.dataUmum} />
            <br />
            <Button color="info" active={activeHistory === '1'} onClick={() => { this.toggleHistory('1'); }}>Kembali</Button>
          </TabPane>
          <TabPane tabId="3">
            <ChangeLog idChange={this.state.idChange} data={this.state.dataIdk} />
            <br />
            <Button color="info" active={activeHistory === '1'} onClick={() => { this.toggleHistory('1'); }}>Kembali</Button>
          </TabPane>
        </TabContent>

      </div>
    );
  }
}

export default Detail;