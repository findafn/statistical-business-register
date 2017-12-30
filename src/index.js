import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-table/react-table.css';
import 'react-responsive-modal/lib/react-responsive-modal.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
