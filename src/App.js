import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Login from './components/Login';
import ChangeLog from './components/ChangeLog';
import BuatCEEF from './components/CEEF/BuatCEEF';
import SideBar from './commons/SideBar';
import Home from './components';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/ChangeLog" component={ChangeLog} />
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
