import React from 'react'
import { Button, Table } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import ReactTable from 'react-table';

import { makeData, Logo, Tips } from "./Utils";

class IndikatorLog extends React.Component {
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
              Header: "Nilai Produksi",
              accessor: "nilaiProduksiNew"
            },
            {
              Header: "Nilai Balas Jasa",
              accessor: "nilaiUpahNew"
            },
            {
              Header: "Total Tenaga Kerja",
              accessor: "totalNakerNew"
            },
            {
              Header: "Nilai Pengeluaran",
              accessor: "nilaiPengeluaranNew"
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