import React from 'react'
import { Button, Table } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import ReactTable from 'react-table';

import { makeData, Logo, Tips } from "./Utils";

class UmumLog extends React.Component {
  render() {

    return (
      <div>
        <ReactTable
          data={this.props.data}
          columns={[
            {
              Header: "Tanggal Perubahan",
              accessor: "pembaruanTerakhir"
            },
            {
              Header: "Asal Perubahan",
              accessor: "updaterTerakhir"
            },
            {
              Header: "Nama Perusahaan",
              accessor: "namaPerusahaanNew"
            },
            {
              Header: "Nama Komersial",
              accessor: "namaKomersialNew"
            },
            {
              Header: "Unit Statistik",
              accessor: "unitStatistikNew"
            },
            {
              Header: "Kegiatan Utama",
              accessor: "kegiatanUtamaNew"
            },
            {
              Header: "Kategori KBLI",
              accessor: "katKBLINew"
            },
            {
              Header: "Produk Utama",
              accessor: "produkUtamaNew"
            },
            {
              Header: "Kode KBLI",
              accessor: "kodeKBLINew"
            },
            {
              Header: "Alamat",
              accessor: "alamatNew"
            },
            {
              Header: "Kabupaten/Kota",
              accessor: "kodeKabKotNew"
            },
            {
              Header: "Provinsi",
              accessor: "kodeProvNew"
            },
            {
              Header: "Status",
              accessor: "statusNew"
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