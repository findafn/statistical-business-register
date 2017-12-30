import React from 'react'
import { Button, Table } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import ReactTable from 'react-table';

import { makeData, Logo, Tips } from "./Utils";

class IndikatorLog extends React.Component {
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
              Header: "Nilai Produksi",
              accessor: "nilaiProduksi"
            },
            {
              Header: "Nilai Balas Jasa",
              accessor: "nilaiBalaiJasa"
            },
            {
              Header: "Total Tenaga Kerja",
              accessor: "tenagaKerja"
            },
            {
              Header: "Nilai Pengeluaran",
              accessor: "nilaiPengeluaran"
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default IndikatorLog;