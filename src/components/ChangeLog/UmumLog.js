import React from 'react'
import { Button, Table } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import ReactTable from 'react-table';

import { makeData, Logo, Tips } from "./Utils";

class UmumLog extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Tanggal Perubahan",
              accessor: "tanggalPerubahan"
            },
            {
              Header: "Asal Perubahan",
              accessor: "asalPerubahan"
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
              Header: "Unit Statistik",
              accessor: "unitStatistik"
            },
            {
              Header: "Kegiatan Utama",
              accessor: "kegiatanUtama"
            },
            {
              Header: "Kategori KBLI",
              accessor: "kategoriKBLI"
            },
            {
              Header: "Produk Utama",
              accessor: "produkUtama"
            },
            {
              Header: "Kode KBLI",
              accessor: "kodeKBLI"
            },
            {
              Header: "Alamat",
              accessor: "alamat"
            },
            {
              Header: "Kabupaten/Kota",
              accessor: "kota"
            },
            {
              Header: "Provinsi",
              accessor: "provinsi"
            },
            {
              Header: "Status",
              accessor: "status"
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default UmumLog;