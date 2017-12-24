import React from 'react'

import Header from '../commons/Header';
import SideBar from '../commons/SideBar';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
          <Header />
          <SideBar />
      </div>
    );
  }
}

export default Home;