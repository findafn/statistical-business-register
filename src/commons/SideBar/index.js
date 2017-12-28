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
      activeItem: 'Jelajahi-Data-SBR'
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
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item name='Jelajahi-Data-SBR' active={activeItem === 'Jelajahi-Data-SBR'} onClick={() => { this.toggle('Jelajahi-Data-SBR'); }} />
            <Menu.Item name='Lihat-Detail-Perusahaan' active={activeItem === 'Lihat-Detail-Perusahaan'} onClick={() => { this.toggle('Lihat-Detail-Perusahaan'); }} />
            <Menu.Item name='Snapshot' active={activeItem === 'Snapshot'} onClick={() => { this.toggle('Snapshot'); }} />
            <Menu.Item name='CEEF' active={activeItem === 'CEEF'} onClick={() => { this.toggle('CEEF'); }} />
            <Menu.Item name='CEEF' active={activeItem === 'CEEF2'} onClick={() => { this.toggle('CEEF2'); }} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={13}>
        <TabContent activeTab={activeItem}>
        <TabPane tabId="Jelajahi-Data-SBR">
          <Segment>
            <Jelajah />
          </Segment>
        </TabPane>
        <TabPane tabId="Lihat-Detail-Perusahaan">
          <Segment>
            <Detail />
          </Segment>
        </TabPane>
        <TabPane tabId="Snapshot">
          <Segment>
            <p>Snapshot</p>
          </Segment>
        </TabPane>
        <TabPane tabId="CEEF">
          <Segment>
            <p>CEEF</p>
          </Segment>
        </TabPane>
        <TabPane tabId="CEEF2">
          <Segment>
            <p>CEEF</p>
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