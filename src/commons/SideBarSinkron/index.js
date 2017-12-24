import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import Jelajah from '../../components/Jelajah';
import Detail from '../../components/Detail';

class SideBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: 'Lihat-Detail-Perusahaan'
    };
  }

  toggle(Item) {
    if (this.state.activeItem !== Item) {
      this.setState({
        activeItem: Item
      });
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="box">
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='Lihat-Detail-Perusahaan' active={activeItem === 'Lihat-Detail-Perusahaan'} onClick={() => { this.toggle('Lihat-Detail-Perusahaan'); }} />
            <Menu.Item name='Snapshot' active={activeItem === 'Snapshot'} onClick={() => { this.toggle('Snapshot'); }} />
            <Menu.Item name='CRRF' active={activeItem === 'CRRF'} onClick={() => { this.toggle('CRRF'); }} />
            <Menu.Item name='CSSF' active={activeItem === 'CSSF'} onClick={() => { this.toggle('CSSF'); }} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
        <TabContent activeTab={activeItem}>
        <TabPane tabId="Lihat-Detail-Perusahaan">
          <Segment>
            <p>Detail perusahaan</p>
          </Segment>
        </TabPane>
        <TabPane tabId="Snapshot">
          <Segment>
            <p>Snapshotn</p>
          </Segment>
        </TabPane>
        </TabContent>
        </Grid.Column>




        
      </Grid>
      </div>
    )
  }
}

export default SideBar;