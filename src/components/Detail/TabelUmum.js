import React from 'react'
import ReactTable from 'react-table';
import { Button, Nav, NavItem, NavLink, } from 'reactstrap';

import { makeData, Logo, Tips } from "./UtilsUmum";

class TabelUmum extends React.Component {
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
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default TabelUmum;