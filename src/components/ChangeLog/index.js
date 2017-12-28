import React from 'react'
import { Button, Table } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';

class ChangeLog extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="loc-center">History Perubahan</div>
        <div>
          <Table>
            <thead>
              <tr>
                <th>Tanggal Perubahan </th>
                <th>Asal Perubahan </th>
                <th>Nama Perusahaan</th>
                <th>Nama Komersial</th>
                <th>Unit Statistik</th>
                <th>Kegiatan Umum</th>
                <th>Kategori KBLI</th>
                <th>Produk Utama</th>
                <th>Kode KBLI</th>
                <th>Alamat</th>
                <th>Kabupaten/ Kota</th>
                <th>Provinsi</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr> */}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default ChangeLog;