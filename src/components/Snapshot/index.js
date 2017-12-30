import React from 'react'
import ReactTable from 'react-table';
import { Button, Nav, NavItem, NavLink, } from 'reactstrap';

import { makeData, Logo, Tips } from "./Utils";
import View from './View';

class Snapshot extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      isOpen: false,
    };
    // this.toggleModal = this.toggleModal.bind(this);
  }

  // toggleModal = () =>
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <View />
        </div>
        {/* <Nav>
          <NavItem>
            <NavLink href="/SideBar"><Button color="info">Buat Snapshot</Button></NavLink>
          </NavItem>
        </Nav> */}
        <div className="loc-center">Jumlah Total Perusahaan :</div>
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Nama Snapshot",
                accessor: "namaSnapshot"
              },
              {
                Header: "Tanggal Pembuatan",
                accessor: "tanggalPembuatan"
              },
              {
                Header: "Creator",
                accessor: "creator"
              },
              {
                Header: "Jumlah Establishment",
                accessor: "jumlahEst"
              },
              {
                Header: "Jumlah Establishment Aktif",
                accessor: "jumlahEstAktif"
              },
              {
                accessor: "delete"
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

export default Snapshot;