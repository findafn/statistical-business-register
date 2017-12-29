import React from 'react'
import { Button, Table } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import ReactTable from 'react-table';

// class ChangeLog extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <div className="loc-center">History Perubahan</div>
//         <div>
//           <table> 
//             <thead>
//               <tr>
//                 <th className="fix-width">Tanggal Perubahan </th>
//                 <th className="fix-width">Asal Perubahan </th>
//                 <th className="fix-width">Nama Perusahaan</th>
//                 <th className="fix-width">Nama Komersial</th>
//                 <th>Unit Statistik</th>
//                 <th>Kegiatan Umum</th>
//                 <th>Kategori KBLI</th>
//                 <th>Produk Utama</th>
//                 <th>Kode KBLI</th>
//                 <th>Alamat</th>
//                 <th>Kabupaten/ Kota</th>
//                 <th>Provinsi</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="fix-column-child" scope="row">1</td>
//                 <td className="fix-column-child">AsalPerubahanklnsdlkssnflskdlnlksllnfjkhkjsdhfshdgosdhgkjfdfafs </td>
//                 <td className="fix-column-child">Nama Perusahaan ndfs lsnk</td>
//                 <td>Nama Komersial</td>
//                 <td>Unit Statistik</td>
//                 <td>Kegiatan Umum</td>
//                 <td>Kategori KBLI</td>
//                 <td>Produk Utama</td>
//                 <td>Kode KBLI</td>
//                 <td>Alamat</td>
//                 <td>Kabupaten/ Kota</td>
//                 <td>Provinsi</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }


import { makeData, Logo, Tips } from "./Utils";

class ChangeLog extends React.Component {
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

export default ChangeLog;