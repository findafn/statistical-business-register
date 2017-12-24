import React from 'react'
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

class Jelajah extends React.PureComponent {
  render() {
    return (
      <div className="inner-box">
        <Nav>
              <NavItem>
                <NavLink href="../SideBar"><Button color="info">Sinkronkan dari Data ADAU</Button></NavLink>
              </NavItem>
        </Nav>
        
        <p>Jumlah Total Perusahaan :</p><br />
        <div>
          <Table>
            <thead>
              <tr>
                <th>Nama Perusahaan</th>
                <th>Nama Komersial</th>
                <th>Alamat</th>
                <th>Kabupaten/Kota</th>
                <th>Provinsi</th>
                <th>Tanggal Entri Data</th>
                <th>Tanggal Update Terakhir</th>
                <th>Peng-update Terakhir</th>
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

export default Jelajah;