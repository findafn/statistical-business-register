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

  render() {
    const { data } = this.state;
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="../SideBar"><Button color="info">Sinkronkan dari Data ADAU</Button></NavLink>
          </NavItem>
        </Nav>
        <div className="loc-center">Jumlah Total Perusahaan :</div>
        <div>
          <ReactTable
            data={data}
            columns={[
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


// import React from 'react'
// import { Button, Table } from 'reactstrap';
// import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';

// class Jelajah extends React.PureComponent {
//   render() {
//     return (
//       <div className="inner-box">
//         <Nav>
//           <NavItem>
//             <NavLink href="../SideBar"><Button color="info">Sinkronkan dari Data ADAU</Button></NavLink>
//           </NavItem>
//         </Nav>
//         <div className="loc-center">Jumlah Total Perusahaan :</div>
//         <div>
//           <Table>
//             <thead>
//               <tr>
//                 <th>Nama Perusahaan</th>
//                 <th>Nama Komersial</th>
//                 <th>Alamat</th>
//                 <th>Kabupaten/Kota</th>
//                 <th>Provinsi</th>
//                 <th>Tanggal Entri Data</th>
//                 <th>Tanggal Update Terakhir</th>
//                 <th>Peng-update Terakhir</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* <tr>
//                 <th scope="row">1</th>
//                 <td>Mark</td>
//                 <td>Otto</td>
//                 <td>@mdo</td>
//               </tr> */}
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     );
//   }
// }

// export default Jelajah;