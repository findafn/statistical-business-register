import React from 'react'
import ReactTable from 'react-table';
import { Button, Nav, NavItem, NavLink, } from 'reactstrap';

import axios from 'axios';

import config from '../../config';

class Jelajah extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const urlEstablishment = config.liveSBRUrl + '/establishment';
    axios.get(urlEstablishment)
      .then(({ data }) => {
        if (data.success) {
          this.setState(p => ({
            ...p,
            data:data.result,
          }));
        } else {
          alert(data.message);
        }
        console.log('data ', {data});
      })
      .catch(err => {
        console.log("Tidak bisa mendapatkan data establishment");
      });
  }
  updateDataFromADAU(){
    const urlUpdateADAU = config.liveSBRUrl + '/establishment/update';
    axios.post(urlUpdateADAU)
      .then(({ data }) => {
        if (data.success) {
          alert(data.message);
        } else {
          alert(data.message);
        }
        window.location = "/";
      })
      .catch((err) => {
        alert(err);
        window.location = "/";
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Nav>
          <NavItem>
            <Button color="info" onClick={this.updateDataFromADAU}>Sinkronkan dari Data ADAU</Button>
          </NavItem>
        </Nav>
        <div className="loc-center">Jumlah Total Perusahaan : {this.state.data.length}</div>
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "ID SBR",
                accessor: "idSBR"
              },
              {
                Header: "NPWP",
                accessor: "npwp"
              },
              {
                Header: "Nama Perusahaan",
                accessor: "namaPerusahaan"
              },
              {
                Header: "Nama Komersial",
                accessor: "namaKomersial"
              },
              {
                Header: "Alamat",
                accessor: "alamat"
              },
              {
                Header: "Kabupaten/Kota",
                accessor: "kodeKabKot"
              },
              {
                Header: "Provinsi",
                accessor: "kodeProv"
              },
              {
                Header: "Tanggal Entri Data",
                accessor: "tanggalEntryPertama"
              },
              {
                Header: "Tanggal Update Terakhir",
                accessor: "pembaruanTerakhir"
              },
              {
                Header: "Pengupdate Terakhir",
                accessor: "updaterTerakhir"
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default Jelajah;