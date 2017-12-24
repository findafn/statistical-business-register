import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Login from './components/Login';
import Detail from './components/Detail';
import SideBar from './commons/SideBar';
import Home from './components';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="" component={Home} />
        {/* <Route exact path="/tes" component={SideBar} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
