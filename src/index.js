import React from 'react';
import ReactDOM from 'react-dom';
import IopenApp from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <IopenApp />, document.getElementById('root'));
registerServiceWorker();
