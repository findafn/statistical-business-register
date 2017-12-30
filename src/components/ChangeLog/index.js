import React from 'react'
import { Button, Table } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import ReactTable from 'react-table';

import { makeData, Logo, Tips } from "./Utils";
import UmumLog from './UmumLog';
import IndikatorLog from './IndikatorLog';

class ChangeLog extends React.Component {
  render() {
    let tableLog = null;

    if (this.props.idChange == '2') {
      tableLog =
        <UmumLog />
    } else if (this.props.idChange == '3') {
      tableLog =
        <IndikatorLog />
    }
    return (
      <div>
      { tableLog }
      </div>
    );
  }
}

export default ChangeLog;